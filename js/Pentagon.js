// function calculatePentagonArea(){
//   const perimeter = getComputedStyle('Pentagon-perimeter');
//   const apothem = getComputedStyle('Pentagon-apothem');
//   console.log(perimeter, apothem);

//   const area = 0.5 * perimeter * apothem;
//   setInnerTextById('Pentagon-area', area);
// }

// function getInputValueById(inputFieldId){
//     const inputField = document.getElementById(inputFieldId);
//     const inputValueText = inputField.value;
//     const value = parseFloat(inputValueText);
//     return value;
// }


// function setInnerTextById (elementId){
//    const element = document.getElementById(elementId);
//    element.innerText = area;
// }



function calculatePentagonArea(){
    //  Pentagon-perimeter
     const perimeterInput = document.getElementById('Pentagon-perimeter');
     const pentagonText = perimeterInput.value;
     const perimeter = parseFloat(pentagonText);
     console.log(perimeter);

    // Pentagon-apothem
    const apothemInput = document.getElementById('Pentagon-apothem');
    const apothemText = apothemInput.value;
    const apothem = parseFloat(apothemText);
    console.log(apothem);

    // calculate Pentagon area
    const area = 0.5 * perimeter * apothem;
    console.log('Aea of the Pentagon is :', area);

    // display pentagon
    const pentagonAreaSpan = document.getElementById('Pentagon-area');
    pentagonAreaSpan.innerText = area;
}