
const allColors = document.getElementsByClassName("color-single")
const canvasEl = document.getElementById('canvas')
const rangeEl = document.getElementById('range')

const context = canvasEl.getContext("2d")
canvasEl.width = 600
canvasEl.height = 400

context.strokeStyle="black";
context.lineWidth=2;

let paintingBool = false

const startPainting = () => {
  paintingBool = true
}
const stopPainting = () => {
  paintingBool = false
}

const mouseMoveHandler = e => {
  if (!paintingBool) {
    context.beginPath() //when NOT clicking we create path (but we don't use it)
    context.moveTo(e.offsetX, e.offsetY)//we move path
  } else {
    context.lineTo(e.offsetX, e.offsetY) //when click, this creates a line from previous position 
    context.stroke() // this paints the stroke
  }
}

canvasEl.addEventListener('mousemove', mouseMoveHandler)
canvasEl.addEventListener('mousedown', startPainting)
canvasEl.addEventListener('mouseup', stopPainting)
canvasEl.addEventListener('mouseleave', stopPainting)


const colorListener = (e) => {
  console.log(e.target.style.backgroundColor)
  context.strokeStyle=e.target.style.backgroundColor
}
Array.from(allColors).forEach(each=>{ 
  each.addEventListener("click", colorListener)
})

const rangeInputHandler = (e) => {
  console.log(e.target.value)
  context.lineWidth=e.target.value
}
rangeEl.addEventListener("input", rangeInputHandler)
