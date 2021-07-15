const cheerio = require("cheerio");
const axios = require("axios");

async function scraper(productURL) {
  console.log(productURL);
  console.log("hello from scraper");
  let Data = [];
  const { data: html } = await axios
    .get(productURL, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36",
      },
    })
    .catch(function (error) {
      console.log(error);
    });
  let $ = cheerio.load(html);
  let title = $('span[id="productTitle"]').text().trim();
  let price = $('span[id="priceblock_ourprice"]').text().trim();
  Data.push({ title, price });
  return Data;
}

module.exports = scraper;
