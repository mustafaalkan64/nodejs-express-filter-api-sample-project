const Data = require('../model/Data');
const util = require('util')

class DataService {

    async filterData(params) {

        return await Data.aggregate([
            {
                "$project": {
                    "_id": 0,
                    "key": "$key",
                    "createdAt": "$createdAt",
                    "totalCount": { "$sum": "$counts" }
                }
            },
            {
                "$match": {
                    "$and": [
                     {
                         "createdAt": 
                        { 
                            '$gt': new Date(params.startDate), 
                            '$lt': new Date(params.endDate) 
                        }
                    }, 
                    {   "totalCount": 
                        {  
                            '$gt': parseInt(params.minCount), 
                            '$lt': parseInt(params.maxCount) 
                        } 
                    }
                 ]                  
            }
        }
        ]).exec();
    }
}

module.exports = DataService;