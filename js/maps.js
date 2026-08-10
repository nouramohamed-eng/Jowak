//selectors
const menuBtn = document.querySelector('.toggle-menue');
const navLinks = document.querySelector('.nav-links');
const JowakLogo = document.querySelector(".logo")

//jowak logo 
function jowakclick() {
    window.location.href = 'home.html';
}
JowakLogo.addEventListener('click', jowakclick);

//sidebar menue
if (menuBtn && navLinks){
menuBtn.addEventListener("click",(e)=>{
    e.stopPropagation()
    navLinks.classList.toggle('open')
})
document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('open') && !navLinks.contains(e.target)) {
                navLinks.classList.remove('open');
            }
        });
} 


