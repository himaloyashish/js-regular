



function animate (){
    const elm = document.getElementById('animate')
    const set = setInterval(ani, 5)
    let pos = 0;
    
    function ani(){
        if(pos < 350){
            pos++;
            elm.style.top= pos + "px";
            elm.style.left= pos + "px";
    
        }else{
            clearInterval(set)
        }
    }

}

animate()