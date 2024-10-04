let navH1 = document.querySelector('.nav-h1');
let body = document.querySelector('body');
let navOption = document.querySelector('.nav-option');
let navButton = document.querySelector('.nav-btn');
navH1.addEventListener('click',function () {
   body.style.background='black';
   navH1.style.display='none';
   navOption.style.display='none';
   navButton.style.display='none';
   body.innerHTML='<h1> MONOJIT</h1>';
   body.style.color='palegreen';
   body.style.display='flex';
   body.style.justifyContent='center';
   body.style.alignItems='center';
   body.style.fontSize='80px';
   body.style.marginTop='17%';
});
let servicesBox = document.querySelector('.services-box');
let servicesboxButton = document.querySelector('.services-box-button');
let servicesBox2 = document.querySelector('.services-box2');
let servicesBox3 = document.querySelector('.services-box3');
let btn2 = document.querySelector('.btn-2');
let btn3 = document.querySelector('.btn-3');

servicesBox.addEventListener('mouseover',function () {
   servicesBox.style.backgroundColor='palegreen';
   servicesBox.style.color='black';
});
servicesBox.addEventListener('mouseout',function () {
   servicesBox.style.backgroundColor='black';
   servicesBox.style.color='palegreen';
   servicesBox.style.fontWeight='600';
});
servicesBox2.addEventListener('mouseover',function () {
   servicesBox2.style.backgroundColor='palegreen';
   servicesBox2.style.color='black';
});
servicesBox2.addEventListener('mouseout',function () {
   servicesBox2.style.backgroundColor='black';
   servicesBox2.style.color='palegreen';
   servicesBox2.style.fontWeight='600';
});
servicesBox3.addEventListener('mouseover',function () {
   servicesBox3.style.backgroundColor='palegreen';
   servicesBox3.style.color='black';
});
servicesBox3.addEventListener('mouseout',function () {
   servicesBox3.style.backgroundColor='black';
   servicesBox3.style.color='palegreen';
   servicesBox3.style.fontWeight='600';
});


servicesboxButton.addEventListener('click', function () {
   alert('I am a Passionate Frentend Developer,Skilled in modern Web Technologies like HTML, CSS, JavaScript, Creating visually appealing and responsive Website...')
});
btn2.addEventListener('click',function () {
   alert('I am a Passionate Frentend Developer,Skilled in modern Web Technologies like HTML, CSS, JavaScript, Creating visually appealing and responsive Website My focus is on enhancing user experince, & I work with lib React and TailwindCSS...')
});
btn3.addEventListener('click', function () {
   alert('I am also fullstack Developer...')
});

document.querySelectorAll('a[href="#"]').forEach(anchor =>{
   anchor.addEventListener('click',function (e) {
     e.preventDefault();
     document.querySelectorAll(this.getAttribute('href')).scrollIntoView({
      behavior:"smooth"
     });
   });
});
document.getElementById('submit-btn').addEventListener('click', function() {
   const name = document.getElementById('name').value.trim();
   const email = document.getElementById('email').value.trim();
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!name) {
       alert('Please enter your name.');
       return;
   }

   if (!email) {
       alert('Please enter your email.');
       return;
   }

   if (!emailPattern.test(email)) {
       alert('Please enter a valid email address.');
       return;
   }

   
   alert('Form submitted successfully!');
  
});