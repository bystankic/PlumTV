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

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            alert('The form has been successfully submitted!');
        }
    });

    const inputs = form.querySelectorAll('input, select, textarea');

    inputs.forEach(input => {
        input.addEventListener('blur', function () {
            validateField(input);
        });
    });

    function validateForm() {
        let isValid = true;

        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        return isValid;
    }

    function validateField(field) {
        const error = field.parentElement.querySelector('.erorr-text');
        if (field.value.trim() === '') {
            error.textContent = field.previousElementSibling.textContent.replace(':', '') + ' cannot be blank.';
            return false;
        } else {
            error.textContent = '';
            return true;
        }
    }
});