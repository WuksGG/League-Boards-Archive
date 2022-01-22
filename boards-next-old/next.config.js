module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['ddragon.leagueoflegends.com']
  },
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
