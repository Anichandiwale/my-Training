const PublishModel= require("../models/publishModel")

const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await PublishModel.create(publisher)
    res.send({data: publisherCreated})
}

// const getAuthorsData= async function (req, res) {
//     let authors = await PublishModel.find()
//     res.send({data: authors})
// }

module.exports.createPublisher = createPublisher
// module.exports.getAuthorsData= getAuthorsData