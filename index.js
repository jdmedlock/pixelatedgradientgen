// This is based on work by Eric Winton (https://codepen.io/ericwinton/pen/YQmayz).
// This implementation reverses the order of the generated pattern
// so it progresses from dark to light in a left-to-right direction.
const generateBar = (pixelatedBar, bgColor) => {	

  let grid = 100, //anything over a couple hundred will probably kill it
    windowWidth = window.innerWidth,
    windowHeight = innerHeight = window.innerHeight/10,
    pW = windowWidth/grid,
    pH = pW,
    rows = parseInt(windowHeight/pH)

  let r = 0

  while (r < rows) {
    var p = 0
    while (p < grid) {
      var tenth = p/grid
      if (p < grid/10) {
        var randomNumber = (Math.random() * tenth)
      } else {
        var randomNumber = (Math.random() * tenth) + (tenth - .05)
      }
      
      let opacity = 1.7 - randomNumber.toFixed(2)
      const pixel = document.createElement("div")
      pixel.setAttribute("style", `background-color: ${bgColor}; opacity: ${opacity}; height: ${pH}px; width: ${pW}px;`)
      pixel.setAttribute("class", "pixel")
      pixelatedBar.appendChild(pixel)
      p++;		
    }
    r++
  }
}

const addTextToBar = (sectionText) => {
  let title = document.getElementById('title')
  title.innerHTML += sectionText
}

const pixels = document.querySelector("#pixels")

generateBar(pixels, "#3CB371")
addTextToBar('"Building real projects to get out of tutorial purgatory"')
