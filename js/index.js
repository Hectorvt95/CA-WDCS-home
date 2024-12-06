const wrap = document.querySelector('.wrap'); // The container for all sections
const sections = document.querySelectorAll('.section'); // Individual sections
let page = 0; // Current page index
const lastPage = sections.length - 1; // Total number of sections minus one (0-indexed)

// Listen for wheel events
window.addEventListener('wheel', (e) => {
    e.preventDefault(); // Prevent default scroll behavior

    // Determine scroll direction
    if (e.deltaY > 0) {
        page++; // Scroll down
    } else if (e.deltaY < 0) {
        page--; // Scroll up
    }

    // Clamp page index to valid range
    if (page < 0) {
        page = 0;
    } else if (page > lastPage) {
        page = lastPage;
    }

    // Move the wrap container to show the correct section
    wrap.style.transform = `translateY(${page * -100}vh)`;
}, { passive: false }); // Ensure preventDefault works
