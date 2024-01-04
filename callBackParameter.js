
const paymentSuccess = true;
const marks = 80;

function enroll(callback) {
    console.log("course enrollment is enrollment ,please complete payment");
    setTimeout(function () {
        if (paymentSuccess) {
            callback()
        } else {
            console.log("Please complete the payment first");
        }
    }, 2000)
}

function progress(callback) {

    console.log("course is on progress");

    setTimeout(function () {
        if (marks >= 80) {
            callback()
        } else {
            console.log("Please prepare for exam again");
        }
    }, 3000)
}

function getCertificates(){
    console.log("Congrats for your dedication");

    setTimeout(function(){
        console.log("Now you are a great software developer");
    }, 1000)

}

enroll(function(){
    progress(getCertificates)
})