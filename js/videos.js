//selectors
const menuBtn = document.querySelector('.toggle-menue');
const navLinks = document.querySelector('.nav-links');
const toggleButton = document.querySelector(".toggle-button");
const JowakLogo = document.querySelector(".logo")
const cardscont =document.querySelector(".Cardscontainer")
const forcastvidcont= document.querySelector (".videosCard-container")

//dark-light theme button
toggleButton.addEventListener(("click"),()=>{
document.body.classList.toggle("light-theme")
})

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

//newsvideocards 
function forcastrender(videos) {
if (!forcastvidcont) return;

forcastvidcont.innerHTML = videos.map(post=>`<div class="video-card">
            <div class="videoImg">
              <a
                href="${post.link}"
                target="_blank"
                rel="noopener noreferrer"
                class="PlaySvg"
              >
                <svg
                  stroke="currentColor"
                  fill="white"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="35px"
                  width="35px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440z"
                  ></path>
                </svg>
              </a>

              <img
                src="${post.img}"
                alt="${post.Title}"
              />
            </div>
            <h2>${post.Title}</h2>
          </div>`).join('');
}
forcastrender(videosNews)
