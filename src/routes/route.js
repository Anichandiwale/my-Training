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
       


})//PROBLEM II:
// you will be given an array of persons (1.e an array of objects)..each person will have a 
//(name: String, age: Number, yatingStatus: true/false(Boolean)} take input in query param as votingAge..
//and for all the people above that age, change votingStatus as true also return an array consisting of only
// the person that can vote

// WRITE A POST API TO THE ABOVE

// take this as sample for array of persons: 
let persons = [

    {
        name: "PK",

        age: 10,
        
        votingStatus: false
    },

    {
        name: "SK",

        age: 20,

        votingStatus: false
    },

    {
        name: "AA",
        
        age: 70,

        votingStatus: false
    },

    {
        name: "SC",

        age: 5, 
        
        votingStatus: false
    },

    {
        name: "HO",

        age: 40,

        votingStatus: false
    }
]

router.post('/persons', function (req, res) {

    let input = req.query.input;
    let newperson=[];
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].age >= input) {

            persons[i].votingStatus = true;
            newperson.push(persons[i])
        }
    }
    if (newperson.length == 0) {
        return res.send("dose'nt exist data")
    } else {
        return res.send(newperson);
    }
})



module.exports = router;