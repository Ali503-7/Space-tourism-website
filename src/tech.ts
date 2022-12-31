let numbers = document.querySelectorAll('.numbers li')

let reset = () =>{
  numbers.forEach((_li: any) => {
    _li.setAttribute("status", '')
  });
}

numbers.forEach((li) => {
  li.onclick = () => {
    tech(li.getAttribute('name'))
    reset()
    li.setAttribute('status', 'active')
  }
});

let h = document.querySelector('.text h3')
let img = document.querySelector('.right img')
let p = document.querySelector('.text p')

function tech(_theplanet: string): void {
  fetch(`data.json`).then((data) => {
    return data.json()
  })
    .then((planets) => {
      return planets.technology
    })
    .then((_opjects) => {
      _opjects.forEach((namee: { name: string | undefined; images: { landscape: string; portrait: string; }; description: string | undefined; }) => {
        if (namee.name == _theplanet) {
          h?.innerHTML = namee.name;
          if (window.innerWidth <= 991) {
            img?.setAttribute('src', namee.images.landscape)
          } else {
            img?.setAttribute('src', namee.images.portrait);
          };
          p?.innerHTML = namee.description;
        }
      });
    })
}
tech('Launch vehicle')
// Get the root element
var r = document.querySelector(':root');

// Create a function for setting a variable value
function myFunction_set() {
  // Set the value of variable --blue to another value (in this case "lightblue")
  r.style.setProperty('--img-Width', window.innerWidth+10+'px');
}

window.addEventListener('resize', () => {
    let active = document.querySelector('[status="active"]');
  tech(active.getAttribute('name'));
  
  myFunction_set()
})
myFunction_set()