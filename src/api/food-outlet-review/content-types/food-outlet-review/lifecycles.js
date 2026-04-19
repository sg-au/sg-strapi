'use strict';

async function recalculateAverageRating(foodOutletId) {
  if (!foodOutletId) return;

  const reviews = await strapi.db.query('api::food-outlet-review.food-outlet-review').findMany({
    where: { foodOutlet: foodOutletId },
  });

  if (reviews.length === 0) {
    await strapi.db.query('api::food-outlet.food-outlet').update({
      where: { id: foodOutletId },
      data: { rating: 0, ratingCount: 0 },
    });
    return;
  }

  const sum = reviews.reduce((acc, curr) => acc + curr.rating, 0);
  const avg = sum / reviews.length;
  // Round to 1 decimal place
  const roundedAvg = Math.round(avg * 10) / 10;

  await strapi.db.query('api::food-outlet.food-outlet').update({
    where: { id: foodOutletId },
    data: { rating: roundedAvg, ratingCount: reviews.length },
  });
}

module.exports = {
  async afterCreate(event) {
    const { result } = event;
    // Check if foodOutlet is present directly or nested
    const outletId = result.foodOutlet?.id || result.foodOutlet;
    if (outletId) {
      await recalculateAverageRating(outletId);
    } else {
      // In some cases afterCreate doesn't return the relations, we might need to fetch them
      const review = await strapi.entityService.findOne('api::food-outlet-review.food-outlet-review', result.id, {
        populate: ['foodOutlet']
      });
      if (review?.foodOutlet?.id) {
        await recalculateAverageRating(review.foodOutlet.id);
      }
    }
  },
  
  async afterUpdate(event) {
    const { result } = event;
    const review = await strapi.entityService.findOne('api::food-outlet-review.food-outlet-review', result.id, {
      populate: ['foodOutlet']
    });
    if (review?.foodOutlet?.id) {
      await recalculateAverageRating(review.foodOutlet.id);
    }
  },
  
  async afterDelete(event) {
    const { result } = event;
    // In afterDelete, you might not have the populated relations anymore
    // If we need to reliably update the outlet when a review is deleted, we check if it was returned
    const outletId = result.foodOutlet?.id || result.foodOutlet;
    if (outletId) {
      await recalculateAverageRating(outletId);
    } else {
       // Best effort if we just deleted a single entity
       strapi.log.warn('Could not recalculate rating after delete due to missing relationship data in event result');
    }
  }
};
