//selectors
const toggleButton = document.querySelector(".toggle-button");
const JowakLogo = document.querySelector(".logo")

//dark-light theme button
toggleButton.addEventListener(("click"),()=>{
document.body.classList.toggle("light-theme")
})

//jowak logo 
function jowakclick() {
    window.location.href = 'home.html';
}
JowakLogo.addEventListener('click', jowakclick);

