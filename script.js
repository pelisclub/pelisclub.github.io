document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const sideMenu = document.querySelector('.side-menu');
    const closeBtn = document.querySelector('.close-btn');

    menuBtn.addEventListener('click', function () {
        sideMenu.style.left = '0';
    });

    closeBtn.addEventListener('click', function () {
        sideMenu.style.left = '-250px';
    });
});
function toggleSearch() {
    const searchContainer = document.getElementById('searchContainer');
    searchContainer.style.display = (searchContainer.style.display === 'block') ? 'none' : 'block';
}


