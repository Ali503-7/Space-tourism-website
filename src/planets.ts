let P_img: any = document.querySelector('.P_img')
let P_Name: any = document.querySelector(".mid h2")
let P_doc: any = document.querySelector('.mid p')
let Km: any = document.querySelector('.KM')
let Days: any = document.querySelector('.Days')

let P_ul: any;

P_ul = document.querySelectorAll('.top ul li');

let reset = () =>{
  P_ul.forEach((_li: any) => {
    _li.setAttribute("status", '')
  });
}


P_ul.forEach((li: {
  [x: string]: any; onclick: () => void; getAttribute: (arg0: string) => string 
}) => {
  li.onclick = () => {
    planets(li.getAttribute('name'))
    reset()
    li.setAttribute('status', 'active')
  }
});


function planets(_theplanet: string): void {
  fetch(`../data.json`).then((data) => {
    return data.json()
  })
    .then((planets) => {
      return planets.destinations
    })
    .then((_opjects) => {
      _opjects.forEach((namee: {
        [x: string]: any
        description: string ;name: string 
}) => {
        if (namee.name == _theplanet) {
          P_Name.innerHTML = namee.name
          P_doc.innerHTML = namee.description
          P_img.src = namee.images.png
          Km.innerHTML = namee.distance
          Days.innerHTML = namee.travel
        }
      });
    })
}
planets('Moon')
