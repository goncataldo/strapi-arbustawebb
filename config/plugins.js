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

module.exports = () => ({
  //...
  meilisearch: {
    config: {
      // Your meili host
      host: "http://localhost:7700",
      // Your master key or private key
      apiKey: "masterKey",
      header: {
        indexName: 'all',
      },
      home: {
        indexName: 'all',
      },
    }
  }
})
