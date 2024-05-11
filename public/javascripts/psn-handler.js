const axios = require('axios');
const cheerio = require('cheerio');

const classNames = {
    resultList: "ul.psw-grid-list"
};

const getSearchUrl = (searchString, page = 1) => {
    const baseUrl = "https://store.playstation.com/tr-tr/search/";
    searchString = searchString.toLowerCase();
    searchString = searchString.replaceAll(' ', '%20');
    return baseUrl + searchString + '/' + page;
};

const getProductUrl = (href) => {
    const baseUrl = "https://store.playstation.com";
    return baseUrl + href;
};

const getProductInfo = async (searchString) => {
    try {
        const resultArr = [];
        const searchUrl = getSearchUrl(searchString);
        const response = await axios.get(searchUrl);
        const $ = cheerio.load(response.data);
        const searchResults = $(classNames.resultList).children();

        searchResults.each((index, element) => {
            const productName = $(element).find('span[data-qa="search#productTile' + index + '#product-name"]').text().trim();
            const productPrice = $(element).find('span[data-qa="search#productTile' + index + '#price#display-price"]').text().trim();
            const productURL = $(element).find('a').attr('href');
            const imageUrl = $(element).find('img[data-qa="search#productTile' + index + '#game-art#image#preview"]').attr('src');

            resultArr.push({
                index: index,
                name: productName,
                price: productPrice,
                url: getProductUrl(productURL),
                imageUrl: imageUrl
            });
        });


        const returnObject = {
            searchUrl: searchUrl,
            searchResults: resultArr
        };

        return returnObject;
    } catch (error) {
        console.error('Error:', error);
    }
}

module.exports = {
    getProductInfo: getProductInfo
};
