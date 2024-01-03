//  check array1 elements with array2 elements
const array1 = [8, 9, 10, 4, 5];

const array2 = [9, 10, 4, 5, 8]


const arrayChecker = array1.length == array2.length && array1.every((currentValue) => {
    if (array2.indexOf(currentValue) > -1) {
        // console.log(currentValue ,array2[array2.indexOf(currentValue)]);

        return (currentValue = array2[array2.indexOf(currentValue)])
    }
})

// console.log(arrayChecker);

const duplicates = [1, 34, 5, 4, 5, 45, 5, 3, 4, 5, 3, 2, 6, 4, 6, 3, 7, 8, 2, 6, 9, 5,]

const authenticArray = [...new Set(duplicates)];

const duplicator = [1, 34, 5, 4, 5, 45, 5, 3, 4, 5, 3, 2, 6, 4, 6, 3, 7, 8, 2, 6, 9, 5,]

const authi = duplicator.filter((value, index, array) => {

    return array.indexOf(value) !== index


})

// console.log(authi);

const decorateAlphabetically = ["Akash", "batash", "deltu", "poltu", "celtu"]

// console.log(decorateAlphabetically.sort());

//  sort low to high
const byRoll_LowToHigh = [23, 34, 65, 34, 87, 8, 9]

const roll_no = byRoll_LowToHigh.sort((a, b)=>{

    return b - a
})

// console.log(roll_no);

const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

function getVowel (sentence) {
    let matchingVowel = 0;
    const sentenceArray = Array.from(sentence)

    sentenceArray.forEach(function(value){
        if(vowel.includes(value)){
            matchingVowel++
        }

    })

    return matchingVowel;
}

// console.log(getVowel("I love you bithy"));

const numbers = [12, 2, 34, 4, 5, 3, 5, 3, 2]

const duplicateNumbers = numbers.filter(function(value, index , array){
    //for duplicate value
    return array.indexOf(value) !== index
    
    //for unique value
    // return array.indexOf(value) === index
    
})

// second way to find out the duplicates numbers
const dipu = ()=>{
    let count = 0;
    
    for(n of duplicateNumbers){
        console.log(n);

       if(numbers.indexOf(n)  !== duplicateNumbers[n]){
        count++
       }
    }
    return [count, n];
}

console.log(dipu());