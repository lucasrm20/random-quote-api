const ROUTES_MAP = [
  {
    route: '/quotes',
    description: 'Returns all quotes available'
  },
  {
    route: '/quotes/random',
    description: 'Returns a random quote'
  }
];

const index = async (req, res) => {
  res.json(ROUTES_MAP);
};

module.exports = {
  index
};
