let positionY = -255
let positionX = -55

for (let j = 0; j < 4; j++) {
  for (let i = 0; i < 5; i++) {
    const container = document.getElementById("container")
    const outerSquare = document.createElement("div")
    const innerSquare = document.createElement("div")
    outerSquare.classList.add("outer-square")
    innerSquare.classList.add("inner-square")
    container.append(outerSquare)
    outerSquare.append(innerSquare)

    outerSquare.style.top = `${positionY}px`
    outerSquare.style.left = `${positionX}px`

    positionX += 439
  }
  positionY += 439
  positionX = -55
}

positionX = -275
positionY = -35

for (let j = 0; j < 4; j++) {
  for (let i = 0; i < 6; i++) {
    const container = document.getElementById("container")
    const outerSquare = document.createElement("div")
    const innerSquare = document.createElement("div")
    outerSquare.classList.add("outer-square")
    innerSquare.classList.add("inner-square")
    container.append(outerSquare)
    outerSquare.append(innerSquare)

    outerSquare.style.top = `${positionY}px`
    outerSquare.style.left = `${positionX}px`

    positionX += 439
  }
  positionY += 439
  positionX = -275
}

const selectOuterSquare = document.getElementsByClassName("outer-square")
const selectInnerSquare = document.getElementsByClassName("inner-square")
let deg = 0

function pulse() {
  for (let i = 0; i < selectOuterSquare.length; i++) {
    if (selectOuterSquare[i].offsetWidth == 273) {
      selectOuterSquare[i].style.width = "243px"
      selectOuterSquare[i].style.height = "243px"
      selectOuterSquare[i].style.top = `${
        selectOuterSquare[i].offsetTop + 15
      }px`
      selectOuterSquare[i].style.left = `${
        selectOuterSquare[i].offsetLeft + 15
      }px`
    } else {
      selectOuterSquare[i].style.width = "273px"
      selectOuterSquare[i].style.height = "273px"
      selectOuterSquare[i].style.top = `${
        selectOuterSquare[i].offsetTop - 15
      }px`
      selectOuterSquare[i].style.left = `${
        selectOuterSquare[i].offsetLeft - 15
      }px`
    }
  }
}

function spin() {
  if (deg <= 90) {
    deg += 0.1
  } else {
    deg = 0
  }
  for (let i = 0; i < selectInnerSquare.length; i++) {
    selectInnerSquare[i].style.transform = `rotate(${deg * 2}deg)`
  }

  for (let i = 0; i < selectOuterSquare.length; i++) {
    selectOuterSquare[i].style.transform = `rotate(-${deg}deg)`
  }
}

setInterval(spin, 1)
setInterval(pulse, 5000)
