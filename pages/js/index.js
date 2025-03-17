// slider main 
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
        type: 'fade',
        breakpoints: {
        },
    }).mount();
});

// like click
document.querySelectorAll('.like, .shop').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
    });
});

// slider_new
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide2', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 6,
        gap: '20px',
        pagination: false,
        breakpoints: {
        },
    }).mount();

});

function changeImage(imageSrc) {
    document.getElementById('mainImg').src = imageSrc;
}