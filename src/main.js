document.getElementById('mode-toggle').addEventListener('click', function() {
    // Toggle theme class on body
    document.body.classList.toggle('dark');
});

window.addEventListener('load', function() {
    var loader = document.querySelector('.loader');
    loader.style.display = 'none'; 
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('small'); 
    } else {
        navbar.classList.remove('small');
    }
});
