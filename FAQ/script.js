document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.custom-dropdown-menu');

    dropdown.addEventListener('mouseover', function () {
        dropdownMenu.style.display = 'block';
    });

    dropdown.addEventListener('mouseout', function () {
        dropdownMenu.style.display = 'none';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const productsLink = document.getElementById('navbarDropdown');

    productsLink.addEventListener('click', function (event) {
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

function FAQ1() {
    var x = document.getElementById("FAQ1");
    if (x.style.display === "none") {
        x.style.display = "block";
        x.innerHTML
    } else {
        x.style.display = "none";
        x.innerHTML
    }
}
function FAQ2() {
    var x = document.getElementById("FAQ2");
    if (x.style.display === "none") {
        x.style.display = "block";
        x.innerHTML
    } else {
        x.style.display = "none";
        x.innerHTML
    }
}
function FAQ3() {
    var x = document.getElementById("FAQ3");
    if (x.style.display === "none") {
        x.style.display = "block";
        x.innerHTML
    } else {
        x.style.display = "none";
        x.innerHTML
    }
}
function FAQ4() {
    var x = document.getElementById("FAQ4");
    if (x.style.display === "none") {
        x.style.display = "block";
        x.innerHTML
    } else {
        x.style.display = "none";
        x.innerHTML
    }
}

function toggleFAQ(faqId, parentDiv) {
    var faqElement = document.getElementById(faqId);
    var isActive = faqElement.style.display !== "none";

    faqElement.style.display = isActive ? "none" : "block";

    var buttons = parentDiv.querySelectorAll('.four-custom-buttons');
    buttons.forEach(button => {
        if (isActive) {
            button.classList.remove('active');
        } else {
            button.classList.add('active');
        }
    });
}