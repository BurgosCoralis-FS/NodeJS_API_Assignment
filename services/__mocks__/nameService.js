const axios = require("axios");
require("dotenv").config();

const nameService = async () => {
    console.log("Mocked Name");
    return Promise.resolve({
        data:{"count": 0, "country": [], "name": ""}
    })
};

const nameServiceByName = async () => {
    console.log("Mocked User input name");
    return Promise.resolve({
        data:{
            "count": 231099,
            "country":[
                {"country_id": "HK", "probability": 0.582}, 
                {"country_id": "SQ", "probability": 0.111}, 
                {"country_id": "MY", "probability": 0.058}, 
                {"country_id": "CN", "probability": 0.041}, 
                {"country_id": "TW", "probability": 0.032}],
            "name": "Chan"
            },
    });
};

module.exports = { nameService, nameServiceByName }