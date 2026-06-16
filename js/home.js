//selectors
const toggleButton = document.querySelector(".toggle-button");
const menuBtn = document.querySelector('.toggle-menue');
const navLinks = document.querySelector('.nav-links');

//dark-light theme button
toggleButton.addEventListener(("click"),()=>{
document.body.classList.toggle("light-theme")
})

//dropdown search list
const locationServices = {
    async fetchAll() {
        try {
            const res = await fetch("/js/HomeData.json");
            if (!res.ok) throw new Error("Failed load countries"); 
            return await res.json();
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