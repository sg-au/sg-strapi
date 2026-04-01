'use strict';

function normalizePriceToMillions(value) {
  if (value === null || value === undefined || value === '') return null;

  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return null;
  if (numeric <= 0) return 0;

  // Backward compatibility: if value looks like rupees, convert to millions.
  if (numeric >= 1000) {
    return Number((numeric / 1000000).toFixed(2));
  }

  return Number(numeric.toFixed(2));
}

function normalizeSoldAt(data) {
  if (!data || !Object.prototype.hasOwnProperty.call(data, 'sold_at')) return;
  data.sold_at = normalizePriceToMillions(data.sold_at);
}

module.exports = {
  beforeCreate(event) {
    normalizeSoldAt(event.params.data);
  },

  beforeUpdate(event) {
    normalizeSoldAt(event.params.data);
  },
};
