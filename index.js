// This is based on work by Eric Winton (https://codepen.io/ericwinton/pen/YQmayz).
// This implementation reverses the order of the generated pattern
// so it progresses from dark to light in a left-to-right direction.
const generateBar = (pixelatedBar, noRows, bgColor) => {
  let windowWidth = window.innerWidth
  let pW = 15
  let pH = pW
  let noColumns = parseInt(windowWidth/pW)

  for (let r = 0; r < noRows; r++) {
    for (let c = 0; c < noColumns; c++) {
      const tenth = c/noColumns
      if (c < noColumns/10) {
        var randomNumber = (Math.random() * tenth)
      } else {
        var randomNumber = (Math.random() * tenth) + (tenth - .05)
      }
      const opacity = 1.7 - randomNumber.toFixed(2)
      let pixel = document.createElement("div")
      pixel.setAttribute("style", `background-color: ${ bgColor }; opacity: ${ opacity }; height: ${ pH }px; width: ${ pW }px;`)
      pixel.setAttribute("class", "pixel")
      pixelatedBar.appendChild(pixel)
    }
  }
}

window.addEventListener('load', (event) => {
  barColors = [
    "#3CB371",
    "#F5521F",
    "#4362AB",
    "#3CB371",
    "#F5521F",
    "#4362AB",
    "#3CB371",
    "#F5521F",
    "#4362AB",
    "#3CB371",
    "#F5521F",
    "#4362AB",
  ]
  const pixelBars = document.getElementsByClassName('pixels')
  for (i = 0; i < pixelBars.length; i++) {
    generateBar(pixelBars[i], 5, barColors[i])
  }
})