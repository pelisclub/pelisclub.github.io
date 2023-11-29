document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const sideMenu = document.querySelector('.side-menu');
    const closeBtn = document.querySelector('.close-btn');
 const ratingCircle = document.getElementById('ratingCircle');
    const ratingValue = parseFloat(ratingCircle.dataset.rating);
  
    menuBtn.addEventListener('click', function () {
        sideMenu.style.left = '0';
    });

    closeBtn.addEventListener('click', function () {
        sideMenu.style.left = '-250px';
    });
   
    // Asegurarse de que la calificación esté en el rango de 0 a 10
    const normalizedRating = Math.min(Math.max(ratingValue, 0), 10);
  
    // Actualizar el atributo --rating en el estilo del círculo
    ratingCircle.style.setProperty('--rating', normalizedRating);
  
    // Actualizar el valor de la calificación en el texto
    ratingCircle.querySelector('.rating-value').innerText = normalizedRating;
  
});
function toggleSearch() {
    const searchContainer = document.getElementById('searchContainer');
    searchContainer.style.display = (searchContainer.style.display === 'block') ? 'none' : 'block';
}

