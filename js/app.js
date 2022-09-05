let myDom = document;

const myDog = {
    "name": "Firulais",
    "age": 5,
    "legs": 4
};

const myCat = {
    name: "Milo",
    age: 6,
    legs: 4
};

console.log(myCat.name);
console.log(myDog.legs);

myCat.tail = 1;

console.log(myCat.tail);

/*class Mouse {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}*/

function Mouse(name) {
    this.age = 4;
    this.name = name;
}

const myMouse = new Mouse("Perez");
console.log(myMouse);

/*this.document;

*/