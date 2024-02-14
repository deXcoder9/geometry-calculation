const calculateButton = document.getElementById('CalculateButton').addEventListener('click', 
function(){
    const inputwidth = document.getElementById('rectangleWidth')
    const String_width = inputwidth.value
    const width = parseFloat(String_width)

    const inputLength = document.getElementById('rectangleLength')
    const String_length = inputLength.value
    const length = parseFloat(String_length)

    let result = length * width
    const areaResult = document.getElementById('areaResult')
    areaResult.innerText = result;
    return areaResult;

})