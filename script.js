window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

// Animation of loader that appears after the page loads.

document.addEventListener("DOMContentLoaded", function() {
    // Hide the preloader when the content is loaded
    const preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
  });
  
