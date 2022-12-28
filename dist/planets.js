"use strict";
let P_img = document.querySelector('.P_img');
let P_Name = document.querySelector(".mid h2");
let P_doc = document.querySelector('.mid p');
let Km = document.querySelector('.KM');
let Days = document.querySelector('.Days');
let P_ul = document.querySelectorAll('.top ul li');
P_ul.forEach(_li => {
    _li.onclick = () => {
        planets();
    };
});
planets();
function planets() {
    fetch(`../data.json`).then((data) => {
        return data.json();
    })
        .then((planets) => {
        return planets.destinations;
    })
        .then((_opjects) => {
    });
}
//# sourceMappingURL=planets.js.map