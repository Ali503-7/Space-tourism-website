var header = '<div class="head contaner">' +
    '<a href="./index.html">' +
    '<img src="./assets/shared/logo.svg" alt="">' +
    '</a>' +
    '<img src="./assets/shared/icon-hamburger.svg" alt="" class="humborger h">' +
    '<div class="ul-con disk-ul">' +
    '<img src="./assets/shared/icon-close.svg" alt="" class="set close h">' +
    '<ul>' +
    '<li><a href="./index.html" class="BarC " status="" name="home"><span class="numbering">00</span>Home</a></li>' +
    '<li><a href="./destination-moon.html" class="BarC" status="" name="destination"><span class="numbering">01</span>Destination</a></li>' +
    '<li><a href="./crew-commander.html" class="BarC" status="" name="crew"><span class="numbering">02</span>Crew</a></li>' +
    '<li><a href="./technology-vehicle.html" class="BarC" status="" name="technology"><span class="numbering">03</span>Technology</a>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '<div class="ul-con hidde">' +
    '<img src="./assets/shared/icon-close.svg" alt="" class="set close h">' +
    '<ul>' +
    '<li><a href="./index.html" class="BarC" status="" name="home"><span class="numbering">00</span>Home</a></li>' +
    '<li><a href="./destination-moon.html" class="BarC" status="" name="destination"><span class="numbering">01</span>Destination</a></li>' +
    '<li><a href="./crew-commander.html" class="BarC" status="" name="crew"><span class="numbering">02</span>Crew</a></li>' +
    '<li><a href="./technology-vehicle.html" class="BarC" status="" name="technology"><span class="numbering">03</span>Technology</a>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</div>';
var head = document.createElement("header");
head.innerHTML = header;
document.body.prepend(head);
// active status
var lis = document.querySelectorAll('li a');
lis.forEach(function (i) {
    if (i.getAttribute('status')) {
        i.classList.add('active');
    }
    if (document.body.getAttribute('name') == i.getAttribute('name')) {
        i.classList.add("active");
    }
});
// Mobile menu
var imgOpen = document.querySelector('.humborger');
var imgClose = document.querySelectorAll('.close');
var ul = document.querySelectorAll('.ul-con');
imgOpen.onclick = function () {
    ul[1].classList.remove('hidde');
    ul[1].classList.add('show');
};
imgClose[1].onclick = function () {
    ul[1].classList.add('hidde');
    ul[1].classList.remove('show');
};
if (ul[1].classList.value == 'ul-con hidde') {
    imgClose[1].classList.remove('h');
    imgClose[1].classList.remove('close');
}
