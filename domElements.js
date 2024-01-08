const x = document.forms['frm1']

let text = '';
console.dir(x);

for (let i = 0; i < x.length; i++) {

    text += x.elements[i].value + "<br />";

}

document.getElementById('demo').innerHTML= text;
