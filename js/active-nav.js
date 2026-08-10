document.addEventListener("DOMContentLoaded", () => {
    const navLinksItems = document.querySelectorAll('.nav-links a');
    let currentPage = window.location.pathname.split("/").pop();
    
    if (currentPage === "" || currentPage === "/") {
        currentPage = "index.html";
    }

    navLinksItems.forEach(link => {
        link.classList.remove("active"); // امسحي الأول من الكل

        let linkPage = link.getAttribute("href").split("/").pop();
        if (linkPage === "" || linkPage === "/") {
            linkPage = "index.html";
        }
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
});