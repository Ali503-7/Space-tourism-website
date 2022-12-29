"use strict";
let P_img = document.querySelector('.P_img');
let P_Name = document.querySelector(".mid h2");
let P_doc = document.querySelector('.mid p');
let Km = document.querySelector('.KM');
let Days = document.querySelector('.Days');
let P_ul;
P_ul = document.querySelectorAll('.top ul li');
let reset = () => {
    P_ul.forEach((_li) => {
        _li.setAttribute("status", '');
    });
};
P_ul.forEach((li) => {
    li.onclick = () => {
        planets(li.getAttribute('name'));
        reset();
        li.setAttribute('status', 'active');
    };
});
function planets(_theplanet) {
    fetch(`data.json`).then((data) => {
        return data.json();
    })
        .then((planets) => {
        return planets.destinations;
    })
        .then((_opjects) => {
        _opjects.forEach((namee) => {
            if (namee.name == _theplanet) {
                P_Name.innerHTML = namee.name;
                P_doc.innerHTML = namee.description;
                P_img.src = namee.images.png;
                Km.innerHTML = namee.distance;
                Days.innerHTML = namee.travel;
            }
        });
    });
}
planets('Moon');
//# sourceMappingURL=planets.js.map