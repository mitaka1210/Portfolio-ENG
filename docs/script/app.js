function solve() {
    let burger = document.querySelector('.hamburger');
    let navlinks = document.querySelector('.nav-links');
    let links = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', () => {
        navlinks.classList.toggle('open');

        links.forEach(link => {
            link.classList.toggle('fade');
        });
    });
}

solve();
