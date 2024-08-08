let nav = document.getElementsByClassName('n');

function navbarContact(){
    setTimeout(()=>{
    nav[5].classList.add('appearAgain')
    about()
},100) 
}
function skill(){
    setTimeout(()=>{
    nav[4].classList.add('appearAgain')
    // work()
},100) 
}
function work(){
    setTimeout(()=>{
    nav[3].classList.add('appearAgain')
    skill()
},100) 
}
function hobby(){
    setTimeout(()=>{
    nav[2].classList.add('appearAgain')
    work()
},100) 
}
function education(){
    setTimeout(()=>{
    nav[1].classList.add('appearAgain')
    hobby()
},100) 
}
function about(){
    setTimeout(()=>{
    nav[0].classList.add('appearAgain')
    education()
},100) 
}

//second menu click  ( /(?:^|\s)MyClass(?!\S)/g , '' )
function navbarRemove(){

    for(let n of nav){
        n.classList.remove('appearAgain')
    }
}

export {navbarContact, navbarRemove};
