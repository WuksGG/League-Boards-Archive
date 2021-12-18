module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/eu',
        permanent: false,
      },
    ]
  },
}
