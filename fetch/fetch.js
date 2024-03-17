
const fetches = document.getElementById('fetch')


async function getData(){

    const res = await fetch('http://localhost:5500/fetch/json.txt');
    console.log(res);
    const data = await res.json()

    fetches.innerHTML = data

}