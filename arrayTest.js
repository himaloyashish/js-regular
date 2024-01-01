const array1 = [8, 9,10, 4, 5];

const array2 = [9, 10, 4, 5, 8]


const arrayChecker = array1.length == array2.length && array1.every((currentValue)=>{
    if(array2.indexOf(currentValue)> -1){
        console.log(currentValue ,array2[array2.indexOf(currentValue)]);
        
        return ( currentValue = array2[array2.indexOf(currentValue)] )
    }
})

console.log(arrayChecker);