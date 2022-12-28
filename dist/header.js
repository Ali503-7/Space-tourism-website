"use strict";
let header = '<div class="head contaner">' +
    '<a href="./index.html">' +
    '<img src="./assets/shared/logo.svg" alt="">' +
    '</a>' +
    '<img src="./assets/shared/icon-hamburger.svg" alt="" class="humborger h">' +
    '<div class="ul-con disk-ul">' +
    '<img src="./assets/shared/icon-close.svg" alt="" class="set close h">' +
    '<ul>' +
    '<li><a href="./index.html" class="BarC active"><span class="numbering">00</span>Home</a></li>' +
    '<li><a href="./destination-moon.html" class="BarC"><span class="numbering">01</span>Destination</a></li>' +
    '<li><a href="../crew-commander.html" class="BarC"><span class="numbering">02</span>Crew</a></li>' +
    '<li><a href="../technology-vehicle.html" class="BarC"><span class="numbering">03</span>Technology</a>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '<div class="ul-con hidde">' +
    '<img src="./assets/shared/icon-close.svg" alt="" class="set close h">' +
    '<ul>' +
    '<li><a href="./index.html" class="BarC active"><span class="numbering">00</span>Home</a></li>' +
    '<li><a href="./destination-moon.html" class="BarC"><span class="numbering">01</span>Destination</a></li>' +
    '<li><a href="../crew-commander.html" class="BarC"><span class="numbering">02</span>Crew</a></li>' +
    '<li><a href="../technology-vehicle.html" class="BarC"><span class="numbering">03</span>Technology</a>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</div>';
let head = document.createElement("header");
head.innerHTML = header;
document.body.prepend(head);
//# sourceMappingURL=header.js.map