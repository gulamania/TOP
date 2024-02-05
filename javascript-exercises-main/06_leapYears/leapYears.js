const leapYears = function(year) {
    //Century Case
    if (year % 100 == 0){
        if ((year/100) % 4 == 0){
            return true
        }
        return false
    }
    //Non-Century Case
    if (year % 4 == 0){
        return true
    }
    return false
};

// Do not edit below this line
module.exports = leapYears;
