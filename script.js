const main = document.querySelector('main');
const slides = Array.from(document.querySelectorAll('iframe'));
const prevButton = document.querySelector('#previous');
const nextButton = document.querySelector('#next');
const indexButton = document.querySelector('#index');

const buttons = [prevButton, nextButton, indexButton];

const colorHome = '#DD697F'
const colorAct1 = '#946C4C'
const colorAct2 = '#767522'
const colorAct3 = '#053C5E'

let currentIndex = 0;

main.addEventListener('scroll', () => {
    const scrollPosition = main.scrollLeft;
    const slideWidth = main.offsetWidth;
    const currentIndex = Math.round(scrollPosition / slideWidth);
    switch (currentIndex) {
        default:
            prevButton.style.display = 'block'
            nextButton.style.display = 'block'
            break;

        case 0:
            prevButton.style.display = 'none'
            nextButton.style.display = 'block'

            buttons.forEach((button) => {
                button.style.fill = colorHome;
                button.style.color = colorHome;
            });

            break;

        case 1:
            prevButton.style.display = 'block'

            buttons.forEach((button) => {
                button.style.fill = colorAct1;
                button.style.color = colorAct1;
            });
            break;

        case 2:
            nextButton.style.display = 'block'

            buttons.forEach((button) => {
                button.style.fill = colorAct2;
                button.style.color = colorAct2;
            });
            break;

        case 3:
            nextButton.style.display = 'none'

            buttons.forEach((button) => {
                button.style.fill = colorAct3;
                button.style.color = colorAct3;
            });
            break;
    }

});

function ChangeSlide(direction) {
    window.event.preventDefault();

    if (direction === 'prev') {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        scrollToSlide(currentIndex);

    } else if (direction === 'next') {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        scrollToSlide(currentIndex);
    }

};

function scrollToSlide(index) {
    const slideWidth = main.offsetWidth;
    main.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
    })
};