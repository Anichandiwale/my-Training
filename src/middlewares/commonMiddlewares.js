const mid2 = function (req, res, next) {
    let data = req.headers.isfreeappuser
    if (!data) {

        res.send("isFreeApUser is not present in the headers")
    }
    else {
        
        req.isFreeAppuser = Boolean(req.headers.isfreeappuser)
        next()
    }
}

module.exports.mid2 = mid2