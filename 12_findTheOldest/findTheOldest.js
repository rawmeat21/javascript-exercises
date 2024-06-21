
function age(person){
    const d=new Date();
    return (person.yearOfDeath?person.yearOfDeath:d.getFullYear())-person.yearOfBirth;
}

function oldestAgePerson(oldestPerson,person){
    if(age(oldestPerson)<age(person)) oldestPerson=person;
    return oldestPerson;
}

const findTheOldest = function(people) {
    return people.reduce(oldestAgePerson);
}

// Do not edit below this line
module.exports = findTheOldest;
