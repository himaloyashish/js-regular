const paymentSuccess = true;
const marks = 70;


function enroll (){
    console.log("crouse is on enrollment");

    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(paymentSuccess){
                resolve()
            }else{
                reject("Payment failed")
            }

        }, 2000)
    })

    return promise;
}

function progress (){

    console.log("crouse is on progress");

    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(marks>= 80){
                resolve()
            }else{
                reject("Please try next time")
            }

        }, 2000)
    })

    return promise;
}

function certificates (){
    console.log("Congrats man");

    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("You have succeeded in all exam");

        }, 2000)
    })

    return promise;
}

enroll()
    .then(progress)
    .then(certificates)
    .then(function(value){console.log(value);})
    .catch(function(error){
        console.log(error);
    })