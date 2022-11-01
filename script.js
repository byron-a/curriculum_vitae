let nav = document.getElementsByClassName('n');

function navbarContact(){
    setTimeout(()=>{
    nav[5].classList.add('appearAgain')
    skill()
},100) 
}
function skill(){
    setTimeout(()=>{
    nav[4].classList.add('appearAgain')
    work()
},300) 
}
function work(){
    setTimeout(()=>{
    nav[3].classList.add('appearAgain')
    hobby()
},300) 
}
function hobby(){
    setTimeout(()=>{
    nav[2].classList.add('appearAgain')
    education()
},300) 
}
function education(){
    setTimeout(()=>{
    nav[1].classList.add('appearAgain')
    about()
},300) 
}
function about(){
    setTimeout(()=>{
    nav[0].classList.add('appearAgain')
    
},300) 
}

//second menu click  ( /(?:^|\s)MyClass(?!\S)/g , '' )
function navbarRemove(){

    for(let n of nav){
        n.classList.remove('appearAgain')
    }
}

export {navbarContact, navbarRemove};
