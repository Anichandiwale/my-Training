const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const PublishModel= require("../models/publishModel")

const createBook = async function (req, res) {

    let book = req.body
    if (book.author) {
        const value = await authorModel.findById(book.author)
        if (value) {
            if (book.publisher) {
                const Pass = await PublishModel.findById(book.publisher)
                if (Pass) {
                    let bookCreated = await bookModel.create(book)
                    res.send({ data: bookCreated })

                } else res.send("please enter correct publisher id")
            } else res.send("please enter publisher id")
        } else res.send("please enter correct author id")
    } else res.send("please enter author id")

}

const getBooksData = async function (req, res) {
    let books = await bookModel.find()
    res.send({ data: books })
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author  publisher')
    res.send({ data: specificBook })

}

const book = async function (req, res) {
    let change = await PublishModel.find({ name: ["Penguin", "HarperCollins"] }).select({ _id: 1 })

    let changefine = await bookModel.updateMany({ publisher: change }, { isHardCover: true }, { new: true })

    let value = await authorModel.find({ rating: { $gte: 3.5 } }).select({ _id: 1 })

    let valueadd = await bookModel.updateMany({ author: value }, { $inc: { price: 10 } }, { new: true })
    res.send({ changefine, valueadd })
}

module.exports.createBook = createBook
module.exports.book = book
module.exports.getBooksData = getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails

