module.exports = ({ env }) => ({
  // ..
 'transformer': {
    enabled: true,
    config: {
      prefix: '/api/',
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      }
    }
  },
  // ..
});

module.exports = ({ env }) => ({
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 10, // Default is 5
    }
  },
});

module.exports = ({ env }) => ({
  // ...

  "fuzzy-search": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::header.header",
          modelName: "header",
          fuzzysortOptions: {
            characterLimit: 500,
            keys: [
              {
                name: "name",
                weight: 200,
              },
              {
                name: "url",
                weight: -200,
              },
              {
                name: "submenu",
                weight: -200,
              },
            ],
          },
        },
      ],
    },
  },
});
