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
  //...
  meilisearch: {
    config: {
      // Your meili host
      host: env('MEILISEARCH_HOST', 'http://host.docker.internal:7700'),
      // Your master key or private key
      apiKey: env('MEILISEARCH_API_KEY', "'MASTER_KEY'"),
      "blog":{
        indexName: 'insight',
      },
      "event":{
        indexName: 'insight',
      },
      "resource":{
        indexName: 'insight',
      },
      "success-case":{
        indexName: 'insight',
      },
    }
  }
})
