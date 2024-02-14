function getParallelogramID(){
    const baseID =getValuesOfId('ParallelogramBase')
    const heightID = getValuesOfId('ParallelogramHeight')
    const calculation = baseID * heightID
    // console.log(calculation )
    setInnerTxt('ParallelogramResult', calculation)
}

function getValuesOfId(inputID){
    const inputField = document.getElementById(inputID);
    const primaryValue = inputField.value;
    const value = parseFloat(primaryValue);
    return value;
}

function setInnerTxt(place, calculation){
    const area = document.getElementById(place)
    area.innerText = calculation
}