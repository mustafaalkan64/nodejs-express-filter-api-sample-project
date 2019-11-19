const Data = require('../model/Data');
const util = require('util')

class DataService {

    async filterData(params) {
        let aggregate = [
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
                        "totalCount": {
                            "$gt": parseInt(params.minCount), "$lt": parseInt(params.maxCount)
                        }
                },
                "$match": {
                    "createdAt": { 
                                "$gt": new Date(params.startDate), 
                                "$lt": new Date(params.endDate) 
                            }
                }
            }
        ];

        console.dir(params,{depth:null});

        // let countFilter = {};
        // let dateFilter = {};
        // countFilter.totalCount = { "$lt": params.maxCount, "$gt": params.minCount };
        // dateFilter.createdAt = { "$gt": new Date(params.startDate), "$lt": new Date(params.endDate) };
        // countFilter.totalCount = { "$gt": params.minCount, "$lt": params.maxCount };

         return await Data.aggregate(aggregate).exec();
    }
}

module.exports = DataService;