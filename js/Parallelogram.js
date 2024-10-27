function calculateParallelogramArea (){
    // Parallelogram length
    const baseInput = document.getElementById('Parallelogram-length');
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    console.log(base);

    // Parallelogram height
    const heightInput = document.getElementById('Parallelogram-height');
    const heightText = heightInput.value;
    const height = parseFloat(heightText);
    console.log(height);

    // calculate Parallelogram area
    const area = base * height;
    console.log('Area of the Parallelogram is :', area);

    // display Parallelogram 
    const parallelogramAreaSpan = document.getElementById('Parallelogram-area');
    parallelogramAreaSpan.innerText = area;
}