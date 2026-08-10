//selectors
const menuBtn = document.querySelector('.toggle-menue');
const navLinks = document.querySelector('.nav-links');
const container = document.querySelector('.cards-box');
const weatherForcastCont=document.querySelector('#WeeklyForecastContainer');
const parent = document.querySelector('.CountriesWeatherparent');
const forcastvidcont= document.querySelector (".videosCard-container")
const emailInput=document.querySelector('.emailInput');
const emailSender=document.querySelector('.sender');
const JowakLogo = document.querySelector(".logo")

//dropdown search list
const locationServices = {
    async fetchAll() {
        try {
            const res = await fetch("./js/HomeData.json");
            if (!res.ok) throw new Error("Failed load countries"); 
            const data = await res.json();
            return data.cities;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
};

const SearchController = { 
    input: document.querySelector('.search-input'),
    dropdown: document.getElementById('dropdownList'),

    async init() {
        if (!this.input || !this.dropdown) return;

        const data = await locationServices.fetchAll();
        this.render(data);
        this.attachEvents(); 
    },

    render(data) {
        const fragment = document.createDocumentFragment(); 
        data.forEach(item => { 
            const li = document.createElement("li");
            li.textContent = item.name;
            li.onclick = () => {
                this.input.value = item.name;
                this.dropdown.classList.remove("show");
                window.location.href = `weather.html?cityId=${item.id}`;
            };
            fragment.appendChild(li);
        });
        this.dropdown.innerHTML = '';
        this.dropdown.appendChild(fragment);
    },

    attachEvents() { 
        this.input.onclick = () => this.dropdown.classList.toggle("show");
        
        document.onclick = (e) => {
            const searchBar = document.querySelector('.SearchBar'); 
            if (searchBar && !searchBar.contains(e.target)) {
                this.dropdown.classList.remove('show');
            }
        };
    }
};
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

SearchController.init();

//Hours Update section data display

function renderWeathercard(data){
container.innerHTML=data.map(item=>`<div class="hoursUpdate-Card">
            <div class="card-icon">
              ${item.svg}
            </div>
            <div class="card-degree-day">
              <span>${item.temp}</span> <br />
              <span>${item.condition}</span>
            </div>
            <div class="card-percentage">
              <div class="percentage">
                <svg
                  stroke="#ffffff"
                  fill="#ffffff"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M352 146.4c-34.4-48.6-67.5-78.5-90.8-96.6-3.1-2.4-7.3-2.4-10.4-.1-23 17.1-56.1 48.4-90.5 96.5-37.3 52-63 108.4-64.2 170.9 0 1.2-.1 2.5-.1 3.7 0 18.4 3.9 35.9 10.9 52.1 4.1 9.3 9.2 18.1 15.2 26.3 28.5 39 77.8 64.8 133.8 64.8 88.4 0 160.1-64.1 160.1-143.2 0-63.7-27-122.2-64-174.4zm-86 264.3h-.5c-9.9 0-12-14.1-2.6-17.1 45.1-14.2 69.6-38.5 86.4-80.8 3.5-8.9 16.7-6.5 16.8 3.1v1.4c-.1 51.6-44.9 93.4-100.1 93.4z"
                  ></path>
                </svg>
                <span>${item.humidity}| </span>
              </div>
              <div class="wind">
                <svg
                  stroke="#ffffff"
                  fill="#ffffff"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M156.7 256H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h142.2c15.9 0 30.8 10.9 33.4 26.6 3.3 20-12.1 37.4-31.6 37.4-14.1 0-26.1-9.2-30.4-21.9-2.1-6.3-8.6-10.1-15.2-10.1H81.6c-9.8 0-17.7 8.8-15.9 18.4 8.6 44.1 47.6 77.6 94.2 77.6 57.1 0 102.7-50.1 95.2-108.6C249 291 205.4 256 156.7 256zM16 224h336c59.7 0 106.8-54.8 93.8-116.7-7.6-36.2-36.9-65.5-73.1-73.1-55.4-11.6-105.1 24.9-114.9 75.5-1.9 9.6 6.1 18.3 15.8 18.3h32.8c6.7 0 13.1-3.8 15.2-10.1C325.9 105.2 337.9 96 352 96c19.4 0 34.9 17.4 31.6 37.4-2.6 15.7-17.4 26.6-33.4 26.6H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16zm384 32H243.7c19.3 16.6 33.2 38.8 39.8 64H400c26.5 0 48 21.5 48 48s-21.5 48-48 48c-17.9 0-33.3-9.9-41.6-24.4-2.9-5-8.7-7.6-14.5-7.6h-33.8c-10.9 0-19 10.8-15.3 21.1 17.8 50.6 70.5 84.8 129.4 72.3 41.2-8.7 75.1-41.6 84.7-82.7C526 321.5 470.5 256 400 256z"
                  ></path>
                </svg>
                <span>${item.windSpeed}</span>
              </div>
            </div>
            <div class="card-time">Now</div>
          </div>`).join('');
}


//Weather Forcast section data display
function WeaklyCardDisplay(data){
    weatherForcastCont.innerHTML=data.map(item=>`
        <div class="hoursUpdate-Card">
            <div class="card-icon">
              ${item.svg}
            </div>
            <div class="card-degree-day">
              <span>${item.condition}</span> <br />
              <span>${item.temp}</span>
            </div>
            <div class="card-percentage">
              <div class="percentage">
                <svg
                  stroke="#ffffff"
                  fill="#ffffff"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M352 146.4c-34.4-48.6-67.5-78.5-90.8-96.6-3.1-2.4-7.3-2.4-10.4-.1-23 17.1-56.1 48.4-90.5 96.5-37.3 52-63 108.4-64.2 170.9 0 1.2-.1 2.5-.1 3.7 0 18.4 3.9 35.9 10.9 52.1 4.1 9.3 9.2 18.1 15.2 26.3 28.5 39 77.8 64.8 133.8 64.8 88.4 0 160.1-64.1 160.1-143.2 0-63.7-27-122.2-64-174.4zm-86 264.3h-.5c-9.9 0-12-14.1-2.6-17.1 45.1-14.2 69.6-38.5 86.4-80.8 3.5-8.9 16.7-6.5 16.8 3.1v1.4c-.1 51.6-44.9 93.4-100.1 93.4z"
                  ></path>
                </svg>
                <span>${item.humidity} | </span>
              </div>
              <div class="wind">
                <svg
                  stroke="#ffffff"
                  fill="#ffffff"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M156.7 256H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h142.2c15.9 0 30.8 10.9 33.4 26.6 3.3 20-12.1 37.4-31.6 37.4-14.1 0-26.1-9.2-30.4-21.9-2.1-6.3-8.6-10.1-15.2-10.1H81.6c-9.8 0-17.7 8.8-15.9 18.4 8.6 44.1 47.6 77.6 94.2 77.6 57.1 0 102.7-50.1 95.2-108.6C249 291 205.4 256 156.7 256zM16 224h336c59.7 0 106.8-54.8 93.8-116.7-7.6-36.2-36.9-65.5-73.1-73.1-55.4-11.6-105.1 24.9-114.9 75.5-1.9 9.6 6.1 18.3 15.8 18.3h32.8c6.7 0 13.1-3.8 15.2-10.1C325.9 105.2 337.9 96 352 96c19.4 0 34.9 17.4 31.6 37.4-2.6 15.7-17.4 26.6-33.4 26.6H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16zm384 32H243.7c19.3 16.6 33.2 38.8 39.8 64H400c26.5 0 48 21.5 48 48s-21.5 48-48 48c-17.9 0-33.3-9.9-41.6-24.4-2.9-5-8.7-7.6-14.5-7.6h-33.8c-10.9 0-19 10.8-15.3 21.1 17.8 50.6 70.5 84.8 129.4 72.3 41.2-8.7 75.1-41.6 84.7-82.7C526 321.5 470.5 256 400 256z"
                  ></path>
                </svg>
                <span>${item.windSpeed}</span>
              </div>
            </div>
            <div class="card-time">${item.day}</div>
          </div>`).join('');
}


//states weather section data display
function stateCardsDisplay(data) {
    const StatesCon = document.getElementById('weatherCardBox');
    StatesCon.innerHTML = data.map(item => `
        <div class="Weather-card ${item.bgClass}">
            <div class="weatherSvg">
              ${item.svg}
            </div>
            <h2>${item.condition}</h2>
            <h4>${item.temp}</h4>
            <h2>${item.city}</h2>
        </div>
    `).join('');
}



//flagscountries function
function renderCountries() {
    parent.innerHTML = countriesData.map(country => `
        <div class="country-card ${country.name.toLowerCase()}">
            <div class="country-image">
                <img src="${country.img}" alt="${country.name}" loading="lazy" decoding="async" />
            </div>
            <h3>${country.name}</h3>
        </div>
    `).join('');
}
renderCountries();

//video forcast function
function forcastrender(){
forcastvidcont.innerHTML=forcastvids.map(post=>`<div class="video-card">
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
                loading="lazy"
                decoding="async"
              />
            </div>
            <h2>${post.Title}</h2>
          </div>`).join('');
}



//email settings
function saveEmail() {
  const emailInputData = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailInputData) {
    alert('Please enter your email.');
    return;
  }

  if (!emailPattern.test(emailInputData)) {
    alert('Please enter a valid email address.');
    return;
  }

  localStorage.setItem('email', emailInputData);
  console.log(emailInputData);
  emailInput.value = '';
}

emailSender.addEventListener('click', saveEmail);

emailInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    saveEmail();
 }
});
//jowak logo 
function jowakclick() {
    window.location.href = 'home.html';
}
JowakLogo.addEventListener('click', jowakclick);



renderWeathercard(Weatherdata)
WeaklyCardDisplay(WeeklyData)
stateCardsDisplay(RecentSearchData);
forcastrender();
