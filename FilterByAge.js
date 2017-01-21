function filterAge([minAge, nameA, ageA, nameB, ageB]) {
    let personA = {name:nameA, age:Number(ageA)};
    let personB = {name:nameB, age:Number(ageB)};

    if (personA.age >= minAge)  console.log(personA);
    if (personB.age >= minAge)  console.log(personB);
}

filterAge(['15', 'Adelina', '5', 'Ico', '4']);