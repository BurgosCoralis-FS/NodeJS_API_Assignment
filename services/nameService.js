const axios = require("axios");
require("dotenv").config();

const nameService = async () => {
    console.log("Name");
    return await axios.get(`${process.env.nameURL}`);
};

const nameServiceByName = async (name) => {
    console.log("User input name");
    return await axios.get(`${process.env.nameURL}${name}`);
};

module.exports = { nameService, nameServiceByName }