const axios = require('axios');

const QUOTE_API_URL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
let quotes = [];

(async function loadQuotes() {
  try {
    const {data} = await axios.get(QUOTE_API_URL);
    quotes = data.quotes;
  
  } catch(err) {
    console.error(err);
  }
})();

const index = async (req, res) => {
  res.json(quotes);
};

const random = (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(randomQuote);
};

module.exports = {
  index,
  random
};
