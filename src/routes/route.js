
const express = require('express');

const abc = require('../introduction/intro')

const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('My batch is', abc.name)
    // abc.printName()


    res.send('My second ever api!')
});
// problem number 1
router.get('/movies', function (req, res) {
    let movies = ['Baadshah', 'shershah', 'major', 'Brothers', 'spectrum', 'merry kom']

    console.log(movies)

    res.send(movies)
})


// problem number 2 & 3

router.get("/movies/:indexNumber", function (req, res) {

    const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]

    console.log(req.params.indexNumber)

    let movieIndex = req.params.indexNumber


    if (movieIndex < 0 || movieIndex >= movies.length) {

        return res.send('The index value is not correct, Please check the it')
    }


    let requiredMovie = movies[movieIndex]
    res.send(requiredMovie)
})



// problem number 4

router.get("/films", function (req, res) {
    const films = [{
        "id": 1,
        "name": "udaan"
    }, {
        "id": 2,
        "name": "sapne"
    }, {
        "id": 3,
        "name": "chack de india"
    }, {
        "id": 4,
        "name": "major "
    }]

    res.send(films)
})


// problem number 5

router.get("/films/:filmId", function (req, res) {
    const films = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]

    let filmId = req.params.filmId


    for (let i = 0; i < films.length; i++) {
        let film = films[i]
        if (film.id == filmId) {

            return res.send(film)
        }
    }


    res.send("The film id doesn't match any movie")
})

module.exports = router;
