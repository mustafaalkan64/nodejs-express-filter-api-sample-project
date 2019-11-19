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
                    "$and": [
                    ]
                }
            }
        ];

        console.dir(params,{depth:null});
    
        var dateFilter = {};
        var countFilter = {};

        // Bu şekilde result dönmedi
        // let countFilter = {};
        // let dateFilter = {};
        // countFilter.totalCount = { "$lt": params.maxCount, "$gt": params.minCount };
        // dateFilter.createdAt = { "$gt": new Date(params.startDate), "$lt": new Date(params.endDate) };

        if(params.startDate) {
            dateFilter.createdAt = { "$gt": new Date(params.startDate) };
        } 
    
        if(params.endDate) {
            if(dateFilter.createdAt) {
                dateFilter.createdAt.$lt = new Date(params.endDate);
            }
            else {
                dateFilter.createdAt = { "$lt": new Date(params.endDate) };
            }
        }
    
        if(params.minCount) {
            countFilter.totalCount = { "$gt": params.minCount };
        }
    
        if(params.maxCount) {
            if(countFilter.totalCount) {
                countFilter.totalCount.$lt = params.maxCount;
            }
            else {
                countFilter.totalCount = { "$lt": params.maxCount };
            }
        }

    
         aggregate[1].$match.$and.push(dateFilter);
         aggregate[1].$match.$and.push(countFilter);
         return await Data.aggregate(aggregate).exec();
    }
}

module.exports = DataService;