function sendRequest() {

    const promise = new Promise((method, url) => {
        const xhr = new XMLHttpRequest();

        xhr.onload = function () {
            console.log(xhr.responseText);
        }

        xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

        xhr.responseType = "json";

        xhr.send();
    })

    return promise;

}

function getData() {

}

function sendData() {

}

const sendButton = document.getElementById("send");
const getButton = document.getElementById("get");


sendButton.addEventListener("click", sendData);
getButton.addEventListener("click", getData);