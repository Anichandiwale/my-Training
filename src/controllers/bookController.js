// const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let allBooks= await BookModel.find().select({bookName:1, authorName : 1, _id: 0})
    res.send({msg: allBooks})
}

const getBooksInYear= async function (req, res) {
    let year=req.body.year
    let allBooks= await BookModel.find({year:year})
    res.send({msg: allBooks})
}
const getParticularBooks = async function (req, res) {
    let savedData= await BookModel.find(req.body)
    res.send({msg: savedData})
}
const getXINRBooks = async function (req, res) {
    let savedData= await BookModel.find({$or: [{"prices.indianPrice": "150INR"},{"prices.indianPrice": "400INR"},{"prices.indianPrice": "700INR"}]})
    res.send({msg: savedData})
}

const getRandomBooks = async function(req , res){
    let randomBooks = await BookModel.find({$or: [{"stockAvailable":true},{"totalPages":{$gt:600}}]})
    res.send({msg : randomBooks})
}
module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks