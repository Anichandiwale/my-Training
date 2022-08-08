const express = require('express');
// const abc = require('../introduction/intro');
const logWel=require('../logger/logger');
const introinfo = require('../util/helper');
const casetrim = require('../validater/formatter');
// const _ = require('underscore')
const router = express.Router();

 router.get('/test-me', function (req, res) {
    // console.log('My batch is', abc.name)
//     abc.printName()

 res.send('My assignment completed')

 logWel.welcome();
 introinfo.date();
 introinfo.month();
 introinfo.batch();
 casetrim.trim();
 casetrim.lower();
 casetrim.upper();
 let months = ["january", "febraury", "march", "april", "may", "june", 'july', "agust", "sept", 'oct', 'nov', 'dec']

    console.log(lodash.chunk(months, 4))

    let odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

    console.log(lodash.tail(odd));

    let unityB = lodash.union([1, 5, 3], [4, 8, 9], [5, 4, 3], [7, 3, 8], [5, 5, 8]);

    console.log(unityB);

    let array = [["bmw", 'audi'], ["volvo", "alto"], ["mercedes", "maruti"], ["innova", "zean"]];

    console.log(lodash.fromPairs(array));
});




router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason