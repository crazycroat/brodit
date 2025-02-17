document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('nav ul');

    mobileMenu.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    const pages = document.querySelectorAll('.text-page');
    let currentPage = 0;

    function showPage(pageIndex) {
        pages.forEach((page, index) => {
            page.classList.toggle('active', index === pageIndex);
        });
    }

    function changePage(direction) {
        currentPage += direction;
        if (currentPage < 0) {
            currentPage = pages.length - 1;
        } else if (currentPage >= pages.length) {
            currentPage = 0;
        }
        showPage(currentPage);
    }

    document.querySelector('.prev').addEventListener('click', () => changePage(-1)); /* strelice za listanje recenzija korisnika */
    document.querySelector('.next').addEventListener('click', () => changePage(1));

    showPage(currentPage);
});
