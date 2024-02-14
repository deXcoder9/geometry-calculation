function getValues(){ //first -1
    const base = getValuesById('triangleBase') //you can set any call name such as- automation. getInputValue etc

    const height = getValuesById('triangleHeight') //you can set any call name such as- automation. getInputValue etc
    const results = 0.5 * height * base
    // console.log(height, base, '=', results)
    innerTEXT('result', results )
}

function getValuesById(inputID){ // second -2
    const valuetxt = document.getElementById(inputID)
    const mainValue = valuetxt.value
    const values = parseFloat(mainValue)
    return values;
}
function innerTEXT(elementID , results){ //third -3
    const setValueId = document.getElementById(elementID) 
    setValueId.innerText = results;
}

/**
 * mainly hoisa je first-1 section e je 2 ta variable disa and oitay je value oigulaii holo second e function hisabe pass krsa as a result oi first er value second function e dhorte parsa and value nisa 
 */