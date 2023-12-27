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
console.log(matches.length);

let position = sentence.search(/Ashish/i)
position = position >= 0 ? position : "Not found";
console.log(position);