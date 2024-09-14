window.onload = function() {
    document.getElementById('fadeInImage').classList.add('visible');

    setTimeout(function() {
        var headerElements = document.querySelectorAll('.delayed-fade-in');
        headerElements.forEach(function(element) {
            element.classList.add('visible');
        });
    }, 1000);

    setTimeout(function() {
        var footerElements = document.querySelectorAll('.footer-fade-in');
        footerElements.forEach(function(element) {
            element.classList.add('visible');
        });
    }, 2000);
}
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('fadeInImage');

    logo.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');
    });
});
