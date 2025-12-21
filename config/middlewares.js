module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  // 'strapi::body',
  {
    name: 'strapi::body',
    config: {
      jsonLimit: '20mb',
      formLimit: '20mb',
      textLimit: '20mb',
      formidable: {
        maxFileSize: 20 * 1024 * 1024, // 20mb
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
