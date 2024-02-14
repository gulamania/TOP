const palindromes = function (candidate) {
    // 1. Parse: remove whitespace, punctuation and change everything to lowercase
    let parsedStr = candidate.replace(/[.!,\s]/g, ""); //take out whitespace and punctuation
    let parsedArray = parsedStr.toLowerCase().split("");
    let parsedArrayRev = parsedArray.toReversed();
    console.log(parsedArray);
    // 2. Compare: parsedArray to parsedArray.reverse()
    for (let index = 0; index < parsedArray.length; index++){
        if (parsedArray[index] != parsedArrayRev[index]){
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;