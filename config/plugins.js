module.exports = ({ env }) => ({
    upload: {
        config: {
        provider: ['cloudinary', 'aws-s3'],
        providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
            region: env('AWS_REGION'),
        },
        actionOptions: {
            upload: {ACL: null},
            uploadStream: {ACL: null},
            delete: {},
        },
        },
    },
});