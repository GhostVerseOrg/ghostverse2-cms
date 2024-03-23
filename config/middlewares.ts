export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com', // Strapi marketplace
            'market-assets.strapi.io', // The default directives include a market-assets.strapi.io value. This value is set for the in-app market and is safe to keep.
            '*.digitaloceanspaces.com', // The one we actually use for S3 storage
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com', // Strapi marketplace
            'market-assets.strapi.io', // The default directives include a market-assets.strapi.io value. This value is set for the in-app market and is safe to keep.
            '*.digitaloceanspaces.com', // The one we actually use for S3 storage
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
