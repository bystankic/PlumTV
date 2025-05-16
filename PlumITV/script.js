document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.custom-dropdown-menu');

    dropdown.addEventListener('mouseover', function() {
        dropdownMenu.style.display = 'block';
    });

    dropdown.addEventListener('mouseout', function() {
        dropdownMenu.style.display = 'none';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const productsLink = document.getElementById('navbarDropdown');
        
    productsLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = "../Products/products.html";
    });
});

function toggleDropdown() {
    var dropdownMenu = document.getElementById('dropdownMenu');
    if (window.innerWidth < 992) {
        dropdownMenu.classList.add('show');
    } else {
        dropdownMenu.classList.remove('show');
    }
}

toggleDropdown();

window.addEventListener('resize', function() {
        toggleDropdown();
});