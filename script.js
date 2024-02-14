/** 
function calculation(){
    // Rhombus
    const d1 = getValuesOfID('rhombusd1')
    const d2 = getValuesOfID('rhombusd2')
    const areaCalculationOfRhombus = 0.5 * d1 * d2

    //Triangle
    const base = getValuesOfID('triangleBase')
    const height = getValuesOfID('triangleHeight')
    const areaCalculationOfTriangle = 0.5 * height * base

    //Rectangle
    const width = getValuesOfID('rectangleWidth')
    const length = getValuesOfID('rectangleLength')
    const areaCalculationOfRectangle = width * length

    //Parallelogram
    const baseP = getValuesOfID('ParallelogramBase')
    const heightP = getValuesOfID('ParallelogramHeight')
    const areaCalculationOfParallelogram = baseP * heightP

    // Pentagon
    const p = getValuesOfID('pentagonP')
    const b = getValuesOfID('pentagonB')
    const areaCalculationOfPentagon = p * b


    setInnerText('result', areaCalculationOfTriangle)    
    setInnerText('RhombusareaResult', areaCalculationOfRhombus)
    setInnerText('rectangleResult', areaCalculationOfRectangle)
    setInnerText('ParallelogramResult', areaCalculationOfParallelogram)
    setInnerText('PentagonAreaResult', areaCalculationOfPentagon)

} */

function calculationOfTriangle(){
    //Triangle
    const base = getValuesOfID('triangleBase')
    const height = getValuesOfID('triangleHeight')
    const areaCalculationOfTriangle = 0.5 * height * base
    setInnerText('result', areaCalculationOfTriangle)    
}
function calculationOfRectangle(){
     //Rectangle
     const width = getValuesOfID('rectangleWidth')
     const length = getValuesOfID('rectangleLength')
     const areaCalculationOfRectangle = width * length
     setInnerText('rectangleResult', areaCalculationOfRectangle)
}
function calculationOfParallelogram(){
    //Parallelogram
    const baseP = getValuesOfID('ParallelogramBase')
    const heightP = getValuesOfID('ParallelogramHeight')
    const areaCalculationOfParallelogram = baseP * heightP
    setInnerText('ParallelogramResult', areaCalculationOfParallelogram)

}
function calculationOfRhombus(){
    // Rhombus
    const d1 = getValuesOfID('rhombusd1')
    const d2 = getValuesOfID('rhombusd2')
    const areaCalculationOfRhombus = 0.5 * d1 * d2;
    setInnerText('RhombusareaResult', areaCalculationOfRhombus)
}
function calculationOfPentagon(){
    // Pentagon
    const p = getValuesOfID('pentagonP')
    const b = getValuesOfID('pentagonB')
    const areaCalculationOfPentagon = 0.5 * p * b;
    setInnerText('PentagonAreaResult', areaCalculationOfPentagon)
}
function calculationOfEllipse(){
    const Ea = getValuesOfID('EllipseA')
    const Eb = getValuesOfID('EllipseB')
    const areaCalculationOfEllipse = 3.1416 * Ea * Eb;
    setInnerText('EllipseAreaResult', areaCalculationOfEllipse)
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