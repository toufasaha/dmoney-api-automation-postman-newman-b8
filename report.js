const newman = require('newman');

newman.run({
    
    //collection: require("./Collection/DMoney.postman_collection.json"),
    collection: 'https://api.postman.com/collections/16824487-a63e5b33-de02-4c04-baf7-c02346767eb8?access_key=PMAT-01H98V37SNBM2B5B6MGWR0XZ9G',
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html'
        }
    }
}, function(err) {

    if(err) {
        throw err;
    }
    console.log('collection run complete.');
});
