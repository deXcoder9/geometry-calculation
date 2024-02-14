function calculationofRhombus(){
    const d1 = getValuesOfID('rhombusd1')
    const d2 = getValuesOfID('rhombusd2')
    const areaCalculationOfRhombus = 0.5 * d1 * d2

    setInnerText('RhombusareaResult', areaCalculationOfRhombus)
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