function openCloseMenu() {
  let divElement = document.getElementById('navigation')
  let liElement = document.getElementById('threeline')

  if (divElement.className === 'navigation') {
    divElement.className += ' menu'
    liElement.innerHTML = '&Cross;'
  } else {
    divElement.className = 'navigation'
    liElement.innerHTML = '&#9776;'
  }
}