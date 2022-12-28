// Mobile menu
let imgOpen = <HTMLImageElement>document.querySelector('.humborger')
let imgClose = <HTMLImageElement><unknown>document.querySelectorAll('.close')
let ul = <HTMLUListElement> <unknown>document.querySelectorAll('.ul-con')

imgOpen.onclick = () => {
  ul[1].classList.remove('hidde')
  ul[1].classList.add('show') 
}

imgClose[1].onclick = () => {
  ul[1].classList.add('hidde')
  ul[1].classList.remove('show')
}

if (ul[1].classList.value == 'ul-con hidde') {
  imgClose[1].classList.remove('h')
  imgClose[1].classList.remove('close')
}