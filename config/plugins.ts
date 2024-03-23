module.exports = ({ env }) => ({
    upload: {
        config: {
          provider: 'aws-s3',
          providerOptions: {
            rootPath: env('S3_ROOT_PATH'), // like strapi-data
            s3Options: {
              endpoint: env('S3_ENDPOINT'), // like https://fra1.digitaloceanspaces.com
              region: env('S3_REGION'), // like fra1
              credentials: {
                accessKeyId: env('S3_ACCESS_KEY_ID'), 
                secretAccessKey: env('S3_SECRET_ACCESS_KEY'),
              },
              params: {
                Bucket: env('S3_BUCKET'), // like mvxme-strapi
              },
            },
          },
        },
      },
  });