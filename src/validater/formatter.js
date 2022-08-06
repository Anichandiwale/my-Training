function trimString(){
    console.log("anil    chandiwale   ".trim());
}

function lowerString(){
    console.log("My NaMe is AnIl".toLowerCase());
}

function upperString(){
    console.log("My NaMe is AnIl".toUpperCase());
}

module.exports.trim=trimString;
module.exports.lower=lowerString;
module.exports.upper=upperString;
