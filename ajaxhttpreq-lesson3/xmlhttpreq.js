function sendRequest(method, url) {

    const promise = new Promise((resolve , reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onload = function () {
            resolve(this.response);
        }

        xhr.open(method, url);

        xhr.responseType = "json";

        xhr.send();
    })

    return promise;

}

function getData() {
    sendRequest().then(responseData =>{
        console.log(responseData);
    })

}

function sendData() {

}

const sendButton = document.getElementById("send");
const getButton = document.getElementById("get");


sendButton.addEventListener("click", sendData);
getButton.addEventListener("click", getData);