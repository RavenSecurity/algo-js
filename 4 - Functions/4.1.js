function calcSurface(l, w) {
    return l * w;
}

let length = Number(prompt("What is the LENGTH of your rectangle?"))
let width = Number(prompt("What is the WIDTH of your rectangle?"))

let surface = calcSurface(length, width)

alert("The Surface of your rectangle is " + surface)