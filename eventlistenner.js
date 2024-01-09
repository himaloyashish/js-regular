const callMe = document.getElementById('click')
const callMeDeep = document.getElementById('deep')

function CallMe (text){
    console.log(text);
}



callMe.addEventListener('click', function(){
    CallMe('hello button')
}, true)
callMeDeep.addEventListener('click', function(){
    CallMe('hello div')
}, true)