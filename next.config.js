/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/(.*)',
                destination: '/api',
            },
        ]
    },
}

module.exports = nextConfig
