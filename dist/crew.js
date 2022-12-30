"use strict";
let dots = document.querySelectorAll('.dots ul li span');
let reset = () => {
    dots.forEach((_li) => {
        _li.setAttribute("status", '');
    });
};
dots.forEach((li) => {
    li.onclick = () => {
        crew(li.getAttribute('name'));
        reset();
        li.setAttribute('status', 'active');
    };
});
let C_role = document.querySelector('.crow-h');
let crowname = document.querySelector('.crow-text h3');
let text = document.querySelector('.crow-text p');
let C_img = document.querySelector('.crow-img img');
const crew = (_theCrew) => {
    fetch(`data.json`).then((data) => {
        return data.json();
    })
        .then((_crew) => {
        return _crew.crew;
    })
        .then((_opjects) => {
        _opjects.forEach((namee) => {
            if (namee.name == _theCrew) {
                C_role.innerHTML = namee.role;
                crowname === null || crowname === void 0 ? void 0 : crowname.innerHTML = namee.name;
                text === null || text === void 0 ? void 0 : text.innerHTML = namee.bio;
                C_img === null || C_img === void 0 ? void 0 : C_img.setAttribute('src', namee.images.png);
            }
        });
    });
};
crew('Douglas Hurley');
//# sourceMappingURL=crew.js.map