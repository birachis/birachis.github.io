const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
var typingEffect = new Typed(".multiText", {
    strings : ["Software Engineer","Web Developer","Mobile Developer","Game Developer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1500
})
