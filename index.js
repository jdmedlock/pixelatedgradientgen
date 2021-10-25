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
      const pixel = document.createElement("div")
      pixel.setAttribute("style", `background-color: ${ bgColor }; opacity: ${ opacity }; height: ${ pH }px; width: ${ pW }px;`)
      pixel.setAttribute("class", "pixel")
      pixelatedBar.appendChild(pixel)
    }
  }
}

const addTextToBar = (sectionText) => {
  let title = document.getElementById('title')
  title.innerHTML += sectionText
}

const pixels = document.querySelector("#pixels")

generateBar(pixels, 5, "#3CB371")
addTextToBar('"Building real projects to get out of tutorial purgatory"')
