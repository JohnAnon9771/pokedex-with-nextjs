module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pokemons',
        permanent: true,
      },
    ];
  },
};
