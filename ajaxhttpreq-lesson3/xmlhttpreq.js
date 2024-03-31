function sendRequest(method, url, data) {

    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onload = function () {

            if (this.status >= 400) {
                reject(`There was an application error and the status is ${this.status} and the response text is ${this.statusText}`)
            } else {

                resolve(this.response);
            }

        }

        xhr.onerror = function () {
            reject("Something went wrong.");
        }

        xhr.open(method, url);

        xhr.responseType = "json";

        xhr.send(data);
    })

    return promise;
    

}

function getData() {
    sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1").then(responseData => {
        console.log(responseData);
    })
        .catch((err) => {
            console.log(err);
        })

}

function sendData() {
    sendRequest("POST", "https://jsonplaceholder.typicode.com/posts",
        JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
    ).then(responseData => {
        console.log(responseData);
    })
}

const sendButton = document.getElementById("send");
const getButton = document.getElementById("get");


sendButton.addEventListener("click", sendData);
getButton.addEventListener("click", getData);

let cars = [
     {Name: "abu", age:30}, 
     {Name:"Asraful", age: 30}
    ]

for (let i = 0; i < cars.length; i++) {
    const result = cars[i].Name
    const age = cars[i].age
    console.log(result, ":", age);
  }

