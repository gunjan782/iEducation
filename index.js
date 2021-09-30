let burger=document.querySelector('.burger');
let navbar=document.querySelector('.navbar');
let rightNav=document.querySelector('.rightNav');
let navList=document.querySelector('.navlist');

    
burger.addEventListener('click',()=>{
rightNav.classList.toggle('v-class-resp');
navList.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav-resp');
});