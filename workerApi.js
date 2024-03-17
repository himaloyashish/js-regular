let w;

function startWorker() {

    if (typeof Worker !== "undefined") {
        // worker available here;

        // if the worker does not work
        if (w == "undefined") {
            w = new Worker("hang.js");

        }

        w.onmessage = function (event) {
            console.log(event.data);
            document.getElementById("demo").innerHTML = event.data;
        }

    } else {
        alert("worker is unsupported in this browser");
    }
}

function stopWorker() {
    if (typeof Worker !== "undefined") {
        w.terminate();
        w = undefined;
    } else {
        alert("worker is unsupported in this browser");
    }
}