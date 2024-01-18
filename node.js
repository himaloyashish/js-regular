const deep = document.getElementById('deep');
const node = document.createElement('p')
node.innerHTML= "I'm a new p tag";

const p2 = document.getElementById('p2')
const p1 = document.getElementById('p1')

deep.insertBefore(node, p2 )
// deep.removeChild(p1)
// deep.removeChild(p1)