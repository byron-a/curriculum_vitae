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

console.log('I am here');
let days = 72;
let totalBalance = 75000;

// console.log(betCash);
for (let x = 1; x < days; x++){
    let betCash = (totalBalance * (33.3333333333334/100))/5;
    if(x === 1)console.log(betCash);
    totalBalance =  totalBalance - betCash; 
    let winBet = betCash * 1.75;
    totalBalance += winBet;
    // console.log(totalBalance)
}
console.log(totalBalance)
const words = "My name is Byron Ayalogu, I am a graduate of Madonna University Akpugo campus Nigeria, with a bachelor's degree in Mechanical Engineering. I am a citizen of Nigeria and have lived here all my life. After my Bachelor’s degree(2015) I worked in an agro industry (Phinomar Nigeria limited) in Enugu Nigeria, where I served as  a data analyst then was given the role of an interim production manager. My Interest in computer science and programming started while working for Phinomar Nigeria Limited. I noticed that technology and science has the ability to solve all manner of problems with the right algorithm and I started looking up the possibility of becoming a developer. I moved to Lagos in 2021, started training myself in web programming with online materials, after two years I got a job in a firm called Excite Africa, a subsidiary of Precise Platforms where I interpret the front-ends of figma designs,  integrate APIs(on basic level) of new projects and maintain already existing projects , and right now I am a front-end developer(entry)  building on the MERN stack. I want to further in software Engineering/computer science because I want to have a strong core(foundation) in the field of programming. This will give me more insights that will enable me  to develop durable, reliable and scalable products, also I will have a good understanding of how hardwares are optimized and how softwares communicates with hardwares, most importantly the fundamentals. I want to be able to have the patience to stay on problems and the intuition to find the right solution(s). I want to be able and available to create solutions for people and communities, to make life better. My dream is to become an entrepreneur, and through Tech I will be able to touch so many lives because technology has touched almost all aspects of life, from finance, health, transportation to even online educational tools and many more. When I am not at work or writing code, my hobbies are: playing basketball, playing chess and listening to music. I also love nature and I just learnt how to swim. I graduated with a 2nd class lower(2.97 CGPA over a 5 point scale), getting a University has been a long search until I came across Conestoga college and this is a great opportunity for me. Conestoga, a leader in  polytechnic education is also one of Canada's top research colleges with applied research activities that support students' learning and development with easier opportunities to further academically. I believe students here are engaged especially practically to grow and develop in various fields and I want to be part of this community. It will be a privilege to pass through Conestoga college.Finally I believe Canada is one of the best countries with a practical studying experience, mixed with lots of people from different countries and cultures, also in a structured system. It's my ambition to grow in a place like Canada.";
console.log(words.split(' ').length);

export {navbarContact, navbarRemove};
