var express = require('express');
const {getProductInfo} = require("../public/javascripts/psn-handler");
var router = express.Router();

const getSearchResults = async (req, res) => {
    try {
        const { query } = req.query; // Arama sorgusunu al
        const data = await getProductInfo(query); // getProductInfo fonksiyonuna geç
        res.status(200).json(data); // JSON formatında yanıt gönder
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }

};


router.get('/', getSearchResults);
module.exports = router;
