let menuIcon = document.querySelector('#menu-box');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


window.onscroll =() =>{
   // menuIcon.classList.toggle('bx-x');
   // navbar.classList.toggle('active');
};


ScrollReveal({ 
   //reset: true,
   distance:'80px',
   duration:2000,
   delay:200
});
ScrollReveal().reveal('.home-content ,.heading', { origin:'top' });
ScrollReveal().reveal('.home-img,.services-container,.pro-con,.footer', { origin:'bottom' });     


ScrollReveal().reveal('.home-content h1 , .about-img', { origin:'top' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'bottom' });

const typed = new Typed ('.multiple-text',{
    strings :['Front End Developer','Mechanical Engineer',
    'Youtuber','Blogger','Software Developer','Data Analyst'],
    typeSpeed:100,
    backSpeed:100,
    loop:true
});
