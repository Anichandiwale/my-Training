const BookModel = require("../models/bookModel")
const AuthorModel = require("../models/authorModel")

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

const updateBooks = async function (req, res) {
    let allBooks = await BookModel.findOneAndUpdate({ name: "Two states" }, { $set: { price: 100 } }, { new: true });
    let updateprice = allBooks.price;
    let final = await AuthorModel.find({ author_id: { $eq: allBooks.author_id } }).select({ author_name: 1, _id: 0 });
    res.send({ final, updateprice })
}



module.exports.createBook = createBook
module.exports.updateBooks = updateBooks
