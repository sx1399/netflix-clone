/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        domains: [
        'image.tmdb.org', 'rb.gy'
        ],
    },
    transpilePackages: ['@acme/ui', 'lodash-es'],
}