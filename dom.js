const champBox = document.getElementById('champ-box')
const covidBox = document.getElementById('covid-box')
const moreBox = document.getElementById('more-box')

champBox.addEventListener('mouseenter', function () {
    covidBox.classList.remove('flex-fill')
    // covidBox.style.display = 'none';
    moreBox.classList.remove('flex-fill')
    // moreBox.style.display = 'none';
})
champBox.addEventListener('mouseleave', function () {
    covidBox.classList.add('flex-fill')
    // covidBox.style.display = 'block';
    moreBox.classList.add('flex-fill')
    // moreBox.style.display = 'block';

})