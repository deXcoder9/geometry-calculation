//  Calculation
function calculationOfTriangle(){
    //Triangle
    const base = getValuesOfID('triangleBase')
    const height = getValuesOfID('triangleHeight')
    const areaCalculationOfTriangle = 0.5 * height * base
    setInnerText('result', areaCalculationOfTriangle)    
    setOnAreaCalculation(areaCalculationOfTriangle , 'Triangle')
}
function calculationOfRectangle(){
     //Rectangle
     const width = getValuesOfID('rectangleWidth')
     const length = getValuesOfID('rectangleLength')
     const areaCalculationOfRectangle = width * length
     setInnerText('rectangleResult', areaCalculationOfRectangle)
     setOnAreaCalculation(areaCalculationOfRectangle , 'Rectangle')
}
function calculationOfParallelogram(){
    //Parallelogram
    const baseP = getValuesOfID('ParallelogramBase')
    const heightP = getValuesOfID('ParallelogramHeight')
    const areaCalculationOfParallelogram = baseP * heightP
    setInnerText('ParallelogramResult', areaCalculationOfParallelogram)
    setOnAreaCalculation(areaCalculationOfParallelogram , 'Parallelogram')
}
function calculationOfRhombus(){
    // Rhombus
    const d1 = getValuesOfID('rhombusd1')
    const d2 = getValuesOfID('rhombusd2')
    const areaCalculationOfRhombus = 0.5 * d1 * d2;
    setInnerText('RhombusareaResult', areaCalculationOfRhombus)
    setOnAreaCalculation(areaCalculationOfRhombus , 'Rhombus')
}
function calculationOfPentagon(){
    // Pentagon
    const p = getValuesOfID('pentagonP')
    const b = getValuesOfID('pentagonB')
    const areaCalculationOfPentagon = 0.5 * p * b;
    setInnerText('PentagonAreaResult', areaCalculationOfPentagon)
    setOnAreaCalculation(areaCalculationOfPentagon , 'Pentagon')
}
function calculationOfEllipse(){
    const Ea = getValuesOfID('EllipseA')
    const Eb = getValuesOfID('EllipseB')
    const areaCalculationOfEllipse = 3.1416 * Ea * Eb;
    setInnerText('EllipseAreaResult', areaCalculationOfEllipse)
    setOnAreaCalculation(areaCalculationOfEllipse , 'Ellipse')
}



function getValuesOfID(inputField){
    const inputtext = document.getElementById(inputField); 
    const semiValue = inputtext.value;
    const value = parseFloat(semiValue)
    return value;
}


function setInnerText(id, areaCalculation){
    const place = document.getElementById(id);
    place.innerText = areaCalculation;
}

// setting Background COlor
function MoucseOverOfTriangle(){
    setBGColor('triangle' , "pink")

}
function MouseOutOfTriangle(){
    removeBGcolor('triangle' , "white")
}

// -------
function MoucseOverOfRectangle(){
    setBGColor('rectangle' , "red")

}
function MouseOutOfRectangle(){
    removeBGcolor('rectangle' , "white")
}
// ---------
function MoucseOverOfparallelogram(){
    setBGColor('parallelogram' , "gray")

}
function MouseOutOfParallelogram(){
    removeBGcolor('parallelogram' , "white")
}
// ----
function MoucseOverOfrhombus(){
    setBGColor('rhombus' , "#edf756")

}
function MouseOutOfrhombus(){
    removeBGcolor('rhombus' , "white")
}
// ----
function MoucseOverOfpentagon(){
    setBGColor('pentagon' , "#a28089")

}
function MouseOutOfpentagon(){
    removeBGcolor('pentagon' , "white")
}
// ----
function MoucseOverOfellipse(){
    setBGColor('ellipse' , "#51e2f5")

}
function MouseOutOfellipse(){
    removeBGcolor('ellipse' , "white")
}

function setBGColor(id, bgC){
    const divID = document.getElementById(id);
    const colorSet = divID.style.backgroundColor = bgC;
    return colorSet;
    // console.log('hello')

}
function  removeBGcolor(id, bgC) {
    const divID = document.getElementById(id);
    const colorSet = divID.style.backgroundColor = bgC;
    return colorSet;
}


// area Calculation

let serialNumber = 1;
function setOnAreaCalculation(result , sector){
    const d = document.getElementById('contentOfCalculation');
    const n = document.createElement('p');
    n.innerText = serialNumber+ "." + sector + '=    '+ '' + result + 'cm²' 
    d.appendChild(n);
    serialNumber++

}