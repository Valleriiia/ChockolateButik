// like click
document.querySelectorAll('.like, .shop').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
    });
});

function changeImage(imageSrc) {
    document.getElementById('mainImg').src = imageSrc;
}

document.addEventListener("DOMContentLoaded", function () {
    new Swiper("#swiper1", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});

document.addEventListener("DOMContentLoaded", function () {
    new Swiper("#swiper2", {
        slidesPerView: "auto", 
        spaceBetween: 24, 
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
