function calculateRectangleArea (){
//    rectangle length
const lengthInput = document.getElementById('rectangle-length');
const lengthText = lengthInput.value;
const length = parseFloat(lengthText)
console.log(length);

// rectangle width
const widthInput = document.getElementById('rectangle-width');
const widthText = widthInput.value;
const width = parseFloat(widthText);
console.log(width);

// calculate rectangle area
const area = length + width;
console.log('Area of the Rectangle is :', area);

// display rectangle area
const rectangleAreaSpan = document.getElementById('rectangle-area');
rectangleAreaSpan.innerText = area;
}