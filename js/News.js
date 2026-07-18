//selectors
const menuBtn = document.querySelector('.toggle-menue');
const navLinks = document.querySelector('.nav-links');
const toggleButton = document.querySelector(".toggle-button");
const JowakLogo = document.querySelector(".logo")
const cardscont =document.querySelector(".Cardscontainer")

//apis&data
const weatherNews = [
  {Title : "Rain or Shine: Australia's Weather Outloolk", bgClass:"nineth", Author:"Sarah Jenkins", Date:"15 May 2023"} ,
  {Title : "UK Weather Update: Latest Forecasts and Warnings" ,bgClass: "first",Author:"Mark Thompson", Date:"22 June 2023"} ,
  {Title : "India's Monsoon Madness: Latest Weather Updates" , bgClass: "second",Author:"Elena Rodriguez", Date:"08 July 2023"} ,
  { Title : "The Science Behind Extreme Weather Events" , bgClass: "third",Author:"David Chen", Date:"19 August 2023"} ,
  {Title : "The Impact of Climate Change on Our Weather" ,bgClass: "fourth",Author:"Amina Mansour", Date:"03 September 2023"} ,
  {Title : "Weather Disasters and How to Stay Safe During Them" ,  bgClass: "fifth",Author:"James O'Connor", Date:"12 October 2023"} ,
  {Title : "Beyond the Stars: Discovering the Mysteries of Deep Space"  , bgClass: "sixth",Author:"Sofia Rossi", Date:"27 November 2023"} ,
  {Title : "A Guide to Stargazing: Tips for Enjoying the Night Sky" ,  bgClass: "seventh",Author:"Liam Peterson", Date:"05 December 2023"} ,
  {Title : "The Latest Discoveries in Space Exploration and Astronomy" ,  bgClass: "eighth",Author:"Chloe Bennett", Date:"14 January 2024"} ,
]
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

//weathernews cards
function renderWeatherCards(weatherNews){
    cardscont.innerHTML=weatherNews.map((card)=>`<div class="Newscard ${card.bgClass}">
        <div class="card-content">
            <h2>${card.Title}</h2>
            <div class="card-ads">
                <div class="card-author">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6M432 480H80a31 31 0 0 1-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 0 1 432 480"></path></svg>
                    <h4>${card.Author}</h4>
                </div>
                <div class="card-date">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-3２v-３２．２２４h２５６v３２．２４c０ １７．６８ １４．３２ ３２ ３２ ３２s３２－１４．３２ ３２－３２v－３２．２４H９６０v７９９．９８４zM７３６ ５１１．８８８h６４c１７．６６４ ０ ３２－１４．３３６ ３２－３２v－６４c０－１７．６６４－１４．３３６－３２－３２－３２h－６４c－１７．６６４ ０－３２ １４．３３６－３２  thirty-two v sixty-four c０ eighteen point six six four one four point three three six thirty-two z"></path></svg>
                    <h4>${card.Date}</h4>
                </div>
            </div>

        </div>
    </div>`).join("");
}

renderWeatherCards(weatherNews)
SearchController.init()