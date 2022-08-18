const BookModel = require("../models/bookModel")
const AuthorModel = require("../models/authorModel")



const Authorcreate = async function (req, res) {
    let data = req.body
    let savedData = await AuthorModel.create(data)
    res.send({ msg: savedData })
}

const getAuthourIdenty = async function (req, res) {

   let authorid = await AuthorModel.find({"author_name":"Chetan Bhagat"})
    let bookID = authorid[0].author_id
    let final = await BookModel.find({ author_id: bookID })
    res.send({ msg: final })
}

const Authorlist = async function (req, res) {
    let priceBt = await BookModel.find({ price: { $gte: 50, $lte: 100 } })
    let data = priceBt.map(v => v.author_id);
    let newData = await AuthorModel.find({ author_id: data }).select({ author_name: 1, _id: 0 });
    res.send(newData);
}









module.exports.Authorcreate = Authorcreate
module.exports.getAuthourIdenty = getAuthourIdenty
module.exports.Authorlist = Authorlist