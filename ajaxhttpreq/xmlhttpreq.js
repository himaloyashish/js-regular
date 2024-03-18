
function loadData () {
    
    // create a new request
    const xhr = new XMLHttpRequest();
    
    // what to do when response arrives
    
    xhr.onload = function () {
        const div = document.getElementById("demo");
        demo.innerHtml = xhr.responseText;

    }

    xhr.open("GET", "./data.txt");
    xhr.send();

}