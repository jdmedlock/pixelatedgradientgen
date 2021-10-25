// This is based on work by Eric Winton (https://codepen.io/ericwinton/pen/YQmayz).
// This implementation reverses the order of the generated pattern
// so it progresses from dark to light in a left-to-right direction.
const generateBar = (pixelatedBar, noRows, bgColor) => {
  
  console.log('pixelatedBar: ', pixelatedBar)

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

const addTextToBar = (title, sectionText) => {
  title.innerHTML += sectionText
}

window.addEventListener('load', (event) => {
  const pixels1 = document.getElementById('pixels1')
  console.log('pixels1: ', pixels1)
  generateBar(pixels1, 5, "#3CB371")
  const title1 = document.getElementById("title1")
  addTextToBar(title1, 'Building real projects to get out of tutorial purgatory')

  const pixels2 = document.getElementById('pixels2')
  console.log('pixels2: ', pixels2)
  generateBar(pixels2, 5, "#7D498D")
  const title2 = document.getElementById("title2")
  addTextToBar(title2, 'Chingu helped me land my dream job!')
})