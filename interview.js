function add(item, arr) {
    return arr.push(item)
}

const push = add("c", ["a", "b"])
// console.log(push);

let text = "Apple, Banana, Kiwi";
let part = text.substr(7, 6);
// console.log(part);

const sentence = " Ashish is a good boy with passion focused self employed man. He is named Himaloy by mam and Ashu by grand ma Ashish by baba and friends and bala by friends and brothers sometimes. "

const matches = sentence.match(/Ashish/gi);
// console.log(matches.length);

let position = sentence.search(/Ashish/i)
position = position >= 0 ? position : "Not found";
// console.log(position);


function linear(arr, value) {
    const length = arr.length

    for (let i = 0; i < length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }


    return "not found";
}

// console.log(linear(['a', 'b', 'c', 'd'], 'd'));

// problem longest number
function getLongest(names) {

    let longestWord = ""

    for (let name of names) {
        if (name.length > longestWord) {
            longestWord = name

        }

    }

    return [longestWord, names.indexOf(longestWord)]
}

// console.log(getLongest(["Himaloy Bala Ashish", "Bithy angle", "Ashish007"]));


// the divided  numbers

const fizzBuzz = (numbers) => {

    for (let i = 1; i <= numbers; i++) {

        if (i % 15 === 0) {
            // console.log(`${i} is fizzBuzz`);
        } else if (i % 3 === 0) {
            //   console.log(`${i} is fizz`);

        } else if (i % 5 === 0) {
            //  console.log(i, `${i} is Buzz`);

        }

    }
}

const numChecker = fizzBuzz(100)
// console.log(numChecker);


const duplicate = [
    false,
    "ok",
    undefined,
    "",
    "basanti",
    true,
    NaN
]

const checkDup = duplicate.filter((elm) => {
    if (elm) {
        return true;
    }
    else {
        return false
    }
})
// console.log(checkDup);


// truthy value in object;
const obj = {
    A: "Ashish",
    B: "Ball",
    C: "Cat",
    D: "Doll",
    E: undefined,
    F: false
}

const truthy = function (obj) {

    for (let i in obj) {
        if (!obj[i]) {
            delete obj[i];
        }
    }

    return obj
}

// console.log(truthy(obj));
const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

// console.log(person);


// constructor with function

function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.ages = age;
    this.fullName = function () {

        return this.firstName + " " + this.lastName
    }
}

const Ashish = new Person("Himaloy", "Ashish", 26)

// console.log(Ashish.fullName());


// iterator in js

const nums = [1, 2, 3]

const iterators = nums[Symbol.iterator]()

// console.log(iterators.next());

const iterateObject = {a:'a', b:'b'}

// console.dir(iterateObject);

iterateObject[Symbol.iterator] = function () {

    let n = 0;
    let done = false;
    return {
        next() {
            n += 10;
            if (n == 100) { done = true }
            return { value: n, done: done }
        }
    }
}

for(naam of iterateObject){
    // console.log(naam);
}

const letters = new Set(['a']);

// Add Values to the Set

const fruits = new Map([['banana', 500]])
// console.log(fruits);

const foll = new Map()

foll.set('Mango', 50)
foll.set('Apple', 50)
foll.set('Jam', 50)

// console.log(fol);


