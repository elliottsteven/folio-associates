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
