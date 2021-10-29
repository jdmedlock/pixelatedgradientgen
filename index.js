// This is based on work by Eric Winton (https://codepen.io/ericwinton/pen/YQmayz).
// This implementation reverses the order of the generated pattern
// so it progresses from dark to light in a left-to-right direction.
const PIXELDIMENSION = 15
const BARCOLORS = [
  "#3CB371",
  "#F5521F",
  "#4362AB",
  "#3CB371",
]

const generateBar = (sectionNo, sectionBar) => {
  let windowWidth = window.innerWidth
  let pW = PIXELDIMENSION
  let pH = pW
  let noColumns = parseInt(windowWidth/pW)

  // Locate the DOM element the pixelated bar is to be added to
  const barRows = sectionBar.getAttribute('barRows')
  sectionBar.setAttribute("style", `height: ${ PIXELDIMENSION*barRows }px;`)
  const pixelation = sectionBar.getElementsByClassName('pixels')[0]

  for (let r = 0; r < barRows; r++) {
    for (let c = 0; c < noColumns; c++) {
      // Create one pixel to be added to the bar
      let randomNumber
      const tenth = c/noColumns
      if (c < noColumns/10) {
        randomNumber = (Math.random() * tenth)
      } else {
        randomNumber = (Math.random() * tenth) + (tenth - .05)
      }
      const opacity = 1.7 - randomNumber.toFixed(2)

      // Add the new pixel to the bar
      let pixel = document.createElement("div")
      pixel.setAttribute("style", `background-color: ${ BARCOLORS[sectionNo] }; opacity: ${ opacity }; height: ${ pH }px; width: ${ pW }px;`)
      pixel.setAttribute("class", "pixel")
      pixelation.appendChild(pixel)
    }
  }
}

window.addEventListener('load', (event) => {
  const sectionBars = document.getElementsByClassName('sectionBar')
  for (i = 0; i < sectionBars.length; i++) {
    generateBar(i, sectionBars[i])
  }
})