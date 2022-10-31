let nav = document.getElementsByClassName('n');
function navbarContact(){
    setInterval(()=>{
    nav[5].classList.add('appearAgain')
    skill()
},100) 
}
function skill(){
    setInterval(()=>{
    nav[4].classList.add('appearAgain')
    work()
},300) 
}
function work(){
    setInterval(()=>{
    nav[3].classList.add('appearAgain')
    hobby()
},300) 
}
function hobby(){
    setInterval(()=>{
    nav[2].classList.add('appearAgain')
    education()
},300) 
}
function education(){
    setInterval(()=>{
    nav[1].classList.add('appearAgain')
    about()
},300) 
}
function about(){
    setInterval(()=>{
    nav[0].classList.add('appearAgain')
    
},300) 
}

//second menu click
function navbarRemove(){
    for(let n of nav){
        n.classList.add('disappearAgain')
        location.reload()
    }
}

export {navbarContact, navbarRemove};