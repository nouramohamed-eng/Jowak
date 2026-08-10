//selectors
const menuBtn = document.querySelector('.toggle-menue');
const navLinks = document.querySelector('.nav-links');
const JowakLogo = document.querySelector(".logo")
const NameInp =document.querySelector(".nameInp")
const EmailInp = document.querySelector(".emailInp")
const PhoneInp = document.querySelector(".PhoneInp")
const SubInp = document.querySelector(".SubInp")
const MessInp=document.querySelector(".MessageInp")
const SendBtn = document.querySelector(".SendBtn")
const form = document.querySelector(".form")
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


//form validation
SendBtn.addEventListener("click", function(e){
    e.preventDefault();


    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(NameInp.value.trim() === "" || EmailInp.value.trim() === "" || PhoneInp.value.trim() === "" || MessInp.value.trim() === ""){
        alert("Please Fill Required Fields");
    } 
    
    else if(!EmailInp.value.match(emailPattern)) {
        alert("Please enter a valid email address");
    }
    else {
        const formData = {
            name: NameInp.value,
            email: EmailInp.value,
            phone: PhoneInp.value,
            subject: SubInp.value,
            message: MessInp.value
        };

        localStorage.setItem("userMessage", JSON.stringify(formData));
        console.log(formData);
        
        alert("Your Response Has Been Recorded and Saved!");

        NameInp.value = "";
        EmailInp.value = "";
        PhoneInp.value = "";
        SubInp.value = "";
        MessInp.value = "";
    }
});
