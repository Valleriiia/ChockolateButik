// burger 
document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector('.burger__icon');
    const burgerMenu = document.querySelector('.burger__menu');

    if (burgerIcon && burgerMenu) {
        burgerIcon.addEventListener('click', () => {
            burgerIcon.classList.toggle('active');
            burgerMenu.classList.toggle('active');
            document.body.style.overflow = burgerMenu.classList.contains('active') ? 'hidden' : '';
        });

        document.addEventListener('click', (event) => {
            if (!burgerMenu.contains(event.target) && !burgerIcon.contains(event.target)) {
                burgerIcon.classList.remove('active');
                burgerMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const backetBtn = document.querySelector(".backet");
    const backetMain = document.querySelector(".backet_main");
    const closeBacketBtn = document.querySelector(".close_backet");
    const removeCandyBtns = document.querySelectorAll(".remove_candy");

    // Відкриття кошика
    backetBtn.addEventListener("click", function () {
        backetMain.classList.add("open");
    });

    // Закриття кошика
    closeBacketBtn.addEventListener("click", function () {
        backetMain.classList.remove("open");
    });

    // Видалення цукерки зі списку
    removeCandyBtns.forEach(button => {
        button.addEventListener("click", function () {
            this.closest("li").remove();
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const filterBtn = document.querySelector(".open-filter");
    const filterSidebar = document.querySelector(".filter-sidebar");
    const closeFilterBtn = document.querySelector(".close-filter-btn");

    filterBtn.addEventListener("click", function () {
        filterSidebar.classList.add("open");
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    });

    closeFilterBtn.addEventListener("click", function () {
        filterSidebar.classList.remove("open");
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.sort-by-toggle');
    const dropdown = document.querySelector('.sort-by-dropdown');
    const optionsList = document.querySelector('.sort-by-options');
    const radioes = optionsList.querySelectorAll('.sort-by-dropdown input[type="radio"]');

    toggleButton.addEventListener('click', function() {
        dropdown.classList.toggle('active');
    });

    radioes.forEach(function(radio) {
        radio.addEventListener('change', function() {
            const selectedOption = Array.from(radioes).find(radioox => radioox.checked);
            if (selectedOption) {
                toggleButton.innerHTML = `${selectedOption.parentNode.textContent} <span class="toggle-icon">+</span>`;
            }
        });
    });
});