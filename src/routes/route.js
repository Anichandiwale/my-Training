const express = require('express');
// const abc = require('../introduction/intro');
const logWel=require('../logger/logger');
const introinfo = require('../util/helper');
const casetrim = require('../validater/formatter');
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

});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason