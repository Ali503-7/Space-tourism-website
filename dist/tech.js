"use strict";
let numbers = document.querySelectorAll('.numbers li');
let reset = () => {
    numbers.forEach((_li) => {
        _li.setAttribute("status", '');
    });
};
numbers.forEach((li) => {
    li.onclick = () => {
        tech(li.getAttribute('name'));
        reset();
        li.setAttribute('status', 'active');
    };
});
let h = document.querySelector('.text h3');
let img = document.querySelector('.right img');
let p = document.querySelector('.text p');
function tech(_theplanet) {
    fetch(`data.json`).then((data) => {
        return data.json();
    })
        .then((planets) => {
        return planets.technology;
    })
        .then((_opjects) => {
        _opjects.forEach((namee) => {
            if (namee.name == _theplanet) {
                h === null || h === void 0 ? void 0 : h.innerHTML = namee.name;
                if (window.innerWidth <= 991) {
                    img === null || img === void 0 ? void 0 : img.setAttribute('src', namee.images.landscape);
                }
                else {
                    img === null || img === void 0 ? void 0 : img.setAttribute('src', namee.images.portrait);
                }
                ;
                p === null || p === void 0 ? void 0 : p.innerHTML = namee.description;
            }
        });
    });
}
tech('Launch vehicle');
var r = document.querySelector(':root');
function myFunction_set() {
    r.style.setProperty('--img-Width', window.innerWidth + 10 + 'px');
}
window.addEventListener('resize', () => {
    let active = document.querySelector('[status="active"]');
    tech(active.getAttribute('name'));
    myFunction_set();
});
myFunction_set();
//# sourceMappingURL=tech.js.map