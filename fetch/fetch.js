
const fetches = document.getElementById('fetch')


async function getData(){

    const res = await fetch('http://localhost:5500/fetch/json.txt');
    const data = await res.text();

    fetches.innerHTML = data

}