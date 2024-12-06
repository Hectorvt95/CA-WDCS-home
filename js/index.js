
const wrap = document.querySelector('.wrap'); 
const sections = document.querySelectorAll('.section'); 
let page = 0; 
const lastPage = sections.length - 1; 
let isScrolling = false; 
let lastScrollTime = 0; 

// Function to handle navigation
const navigateToPage = (newPage) => {
    if (isScrolling) return; 
    if (newPage < 0 || newPage > lastPage) return; 

    isScrolling = true; 
    page = newPage; 
    wrap.style.transform = `translateY(${page * -100}vh)`; 

    setTimeout(() => {
        isScrolling = false; 
    }, 500); 
};

window.addEventListener('wheel', (e) => {
    const now = Date.now();

    
    if (now - lastScrollTime < 100) return;
    lastScrollTime = now;

    if (e.deltaY > 0) {
        navigateToPage(page + 1); // Scroll down
    } else if (e.deltaY < 0) {
        navigateToPage(page - 1); // Scroll up
    }
}, { passive: false }); 


window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        navigateToPage(page + 1); 
    } else if (e.key === 'ArrowUp') {
        navigateToPage(page - 1); 
    }
});