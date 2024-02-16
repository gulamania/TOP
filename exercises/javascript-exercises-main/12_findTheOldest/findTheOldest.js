const findTheOldest = function(peopleArray) {
    for (person in peopleArray){//add age variables to the objects
        var birthYear = peopleArray[person]['yearOfBirth'];
        if ('yearOfDeath' in peopleArray[person]){ //dead case
            var deathYear = peopleArray[person]['yearOfDeath'];
            peopleArray[person]['age'] =  deathYear - birthYear;
        } else { //alive case
            var curYear = new Date().getFullYear();
            peopleArray[person]['age'] =  curYear - birthYear;
        }
    }

    const getOlderPerson = function(person1, person2){
        if (person1['age'] < person2['age']){
            return person2
        } else {return person1}
    }

    let minAge = {age: 0};
    const oldestPerson = peopleArray.reduce(getOlderPerson, minAge);
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
