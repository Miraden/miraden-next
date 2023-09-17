const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  const api = process.env.NEXT_PUBLIC_IMG_HOST

  return {
    reactStrictMode: false,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: api,
        },
      ],
    },
  }
}
