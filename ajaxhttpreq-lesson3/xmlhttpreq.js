function getData() {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        console.log(xhr.responseText);
    }

    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

    xhr.send();
}

function sendData() {

}

const sendButton = document.getElementById("send");
const getButton = document.getElementById("get");


sendButton.addEventListener("click", sendData);
getButton.addEventListener("click", getData);