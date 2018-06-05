function onlyDigits(numberSystem){
    if (numberSystem < 11)
        return 1;
    else
        return 0;}
function maxSymbol(vF){
    if (vF < 11)
        return 47 + vF;
    else
        return 86 + vF;}
function wrongArgs(iV, fV, bV){
    if (iV.length > 5)
        return 'error';
    else
        if ((iV.length === 5) && (iV !== '10000'))
            return 'error';
    if ((isNaN(fV)) || (isNaN(bV)))
        return 'error';
    else{
        fV = parseInt(fV);
        bV = parseInt(bV);}
    if ((fV < 2) || (fV > 36) || (bV < 2) || (bV > 36))
        return 'error';
    const max = maxSymbol(fV);
    let nextSymbol;
    if (onlyDigits(fV) === 1){
        for (let count = 0; count < iV.length; count++){
            nextSymbol = iV.charCodeAt(count);          
            if ((nextSymbol < 48) || (nextSymbol > max))
                return 'error';}
                            }
    else{
        iV = iV.toLowerCase();
        for (let count = 0; count < iV.length; count++){
            nextSymbol = iV.charCodeAt(count);
            if ((nextSymbol < 48) || ((nextSymbol > 57) && (nextSymbol < 97)) || (nextSymbol > (max + 32)))
                return 'error';}
        }
    return 0;}  

function parseToSystem10(iVal){
    if (isNaN(iVal)){
        const symbolCode = iVal.toLowerCase().charCodeAt(0);
        return symbolCode - 87;}
    return parseInt(iVal);}
function convertNumber(numberForConvert, fromSystem, toSystem){
        fromSystem = parseInt(fromSystem);
        toSystem = parseInt(toSystem);
        if (fromSystem === toSystem){
            process.stdout.write(numberForConvert);}
        else{
            let numberInSystem10 = 0;
            let numberInNewSystem = '';
            let integerPartOfNumber;
            const symbolsArray = '0123456789abcdefghijklmnopqrstuvwxyz';
            if (fromSystem < 10){
                for (let count = 0; count < numberForConvert.length; count++){
                    numberInSystem10 += parseInt(numberForConvert[count])*(Math.pow(fromSystem,(numberForConvert.length - count - 1)));}
                                }
            else
                if (fromSystem !== 10){
                    for (let count = 0; count < numberForConvert.length; count++){
                        numberInSystem10 += parseToSystem10(numberForConvert[count])*(Math.pow(fromSystem,(numberForConvert.length - count - 1)));}
                }
                else{
                    numberInSystem10 = parseInt(numberForConvert);}   
            if (toSystem !== 10){
                do {
                    integerPartOfNumber = symbolsArray[numberInSystem10 % toSystem];
                    numberInNewSystem = integerPartOfNumber + numberInNewSystem;
                    numberInSystem10 = Math.floor(numberInSystem10 / toSystem);}
                while (numberInSystem10 !== 0);}
            else
                numberInNewSystem = numberInSystem10;
            process.stdout.write(String(numberInNewSystem));}
}
var dataForTask1 = [process.argv[2], process.argv[3], process.argv[4]];
convertNumber(...dataForTask1);