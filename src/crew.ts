let dots = document.querySelectorAll('.dots ul li span')


let reset = () =>{
  dots.forEach((_li: any) => {
    _li.setAttribute("status", '')
  });
}

dots.forEach((li) => {
  li.onclick = () => {
    crew(li.getAttribute('name'))
    reset()
    li.setAttribute('status', 'active')
  }
});


let C_role = document.querySelector('.crow-h')
let crowname = document.querySelector('.crow-text h3')
let text = document.querySelector('.crow-text p')
let C_img = document.querySelector('.crow-img img')

const crew = (_theCrew: string): void => {
  fetch(`data.json`).then((data) => {
    return data.json()
  })
    .then((_crew) => {
      return _crew.crew
    })
    .then((_opjects) => {
      _opjects.forEach((namee: {
        bio: string | undefined;
        images: any; name: string; role: string; 
}) => {
        if (namee.name == _theCrew) {
          C_role.innerHTML = namee.role
          crowname.innerHTML = namee.name
          text.innerHTML = namee.bio
          C_img.setAttribute('src', namee.images.png)
        }
      });
    })
};

crew('Douglas Hurley')