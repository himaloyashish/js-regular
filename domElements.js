const x = document.forms['frm1']
console.log(x.length);

let text = '';

for (let i = 0; i < x.length; i++) {

    text += x.elements[i].value + "<br />";

}

document.getElementById('demo').innerHTML= text;
