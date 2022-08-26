
const checkmid= function ( req, res, next) {
    let isfreeApp = req.header("isfreeAppUser")
    if(isfreeApp){
        req.body.isfreeAppUser=isfreeApp
        next()
    }else{
        res.send("The request is missing Header")
    }
}
module.exports.checkmid= checkmid
