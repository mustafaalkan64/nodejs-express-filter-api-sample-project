const express = require('express');
const DataService = require('./service/DataService');

const api = express.Router();

api.post('/', async (request, response) => {
    try {
        const dataService = new DataService();
        const datas = await dataService.filterData(request.body);
        response
            .status(200)
            .send({
                "code": 0,
                "msg": "Success",
                "records": datas
            });
    }
    catch (error) {
        console.log(error);
        response
            .status(500)
            .send({
                "code": -1,
                "msg": error,
                "records": null
            });
    }

});

module.exports = api;