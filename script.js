let burgerBtn = document.querySelector('.burger__btn');
let nav = document.querySelector('.nav');

burgerBtn.addEventListener('click', function(){
    burgerBtn.classList.toggle('active');
    nav.classList.toggle('active');
})