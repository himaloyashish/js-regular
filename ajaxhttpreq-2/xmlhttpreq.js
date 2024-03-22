function loadData(callbackFunction) {
    

    const xhr = new XMLHttpRequest()

    xhr.onload = function () {
        callbackFunction(this);
    }

    xhr.open("GET", "./data.txt");

    xhr.setRequestHeader("My_gf", "Mitu");


    xhr.send();

}

function callbackFunction1(xhr) {
    const container = document.getElementById("demo");
    container.innerHTML = xhr.responseText;
}

function callbackFunction2(xhr) {
    const container = document.getElementById("demo2");
    demo.innerHTML = xhr.responseText;
}
