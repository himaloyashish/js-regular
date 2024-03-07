const confirms = document.getElementById("confirm");
const prompts = document.getElementById("prompt");


function alertShow() {
    window.alert("Vai boro doyalu hain")
};

function ConformShow() {

    let tex;

    if (window.confirm("Vai apni ki bari jaben?")) {

        tex = "You pressed ok"
    } else {
        tex = "You cancelled"
    }

    confirms.innerHTML = tex;
};

function PromptShow() {
    const person = window.prompt("What is your opinion")
    let tex
    if(person === null || person === ""){
        tex = "User cancelled the prompt"
    }else{
        tex = `Hello ${person} how are you?`
    }
   prompts.innerHTML = tex;
};