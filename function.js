(function () {
    // console.log("object");
})()

x = findMax(12, 332, 500, 53)

function findMax() {
    let max = -Infinity;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        }

    }

    return max
}

// console.log(x);

