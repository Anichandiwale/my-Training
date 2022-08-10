const express = require('express');
const router = express.Router();




let players =
[
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ],
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ],
    },

]

router.post('/players', function (req, res) {

    let play = req.body.element

       for(let i = 0; i < players.length; i++){

          let add = players[i]

           if(add.name===play.name) {

               return res.send("file already exist can'nt accessible due to same value")
           }
       }
       players.push(play)

             return res.send(  { data: players , status: true }  )
       


})

module.exports = router;