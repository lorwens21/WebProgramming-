//Array Exercises
let people = ["Greg", "Mary", "Devon","James"];


//1. For Loop
for(let i = 0; i < people.length; i++){
    console.log(people[i]);
}


//2. For Each
people.forEach(function(nama) {
    console.log(nama);
});


//3. Remove Greg
people.shift();
console.log(people);


//4. Remove James
people.pop();
console.log(people);


//5. Add Matt
people.unshift("Matt");
console.log(people);


//6. Add Name
people.push("Brillian Lorwens");
console.log(people);


//7. For loop
for (let i = 0; people.length ; i++) {
    console.log(people[i]);
    if(people[1]==="Mary")
    {
        break;
    }
}


//8. Copy Slice
people.splice(2, 1);
console.log(people);


//9. Redefine
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);


//10. Create new Variable
let withBob = people.concat("Bob");


//Object Exercises
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};


//1. Add
programming.languages.push("Go");
console.log(programming);


//2. Bracket Notation
programming['difficulty'] = 7;
console.log(programming);


//3. Delete
delete programming.jokes;
console.log(programming);


//4. isFun of True
programming.isFun = true;
console.log(programming);


//5. Using a map
let newProgramming = programming.languages.map(function(item, index)
{
    return index + "-" + item;   
});
console.log(newProgramming);