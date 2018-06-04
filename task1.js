function onlyDigits(vf)
{

    if (vf < 11)
        return 1;
    else
        return 0;
}
function maxSymbol(vff)
{
    if (vff < 11)
        return 47 + vff;
    else
        return 54 + vff;
}
function wrongArgs(iV, fV, bV)
{
    if (iV.length > 5)
        return 'Недопустимое число';
    else
        if ((iV.length === 5) && (iV !== '10000'))
            return 'Недопустимое число';
    if ((isNaN(fV)) || (isNaN(bV)))
        return 'Недопустимое основание системы счисления';
    else
    {
        fV = parseInt(fV);
        bV = parseInt(bV);
    }
    if ((fV < 2) || (fV > 36) || (bV < 2) || (bV > 36))
        return 'Недопустимое основание системы счисления';
    const max = maxSymbol(fV);
    let symbol;
    if (onlyDigits(fV) === 1)
    {       
        for (let count = 0; count < iV.length; count++)
        {
            symbol = iV.charCodeAt(count);          
            if ((symbol < 48) || (symbol > max))
                return 'Недопустимый символ в числе';
        }
    }
    else
    {
        for (lrt count = 0; count < iV.length; count++)
        {
            symbol = iV.charCodeAt(count);
            if ((symbol < 48) || ((symbol > 57) && (symbol < 65)) || ((symbol > max) && (symbol < 97)) || (symbol > (max + 32)))
                return 'Недопустимый символ в числе';
        }
    }
    return 0;
}
function parseToSystem10(ival)
{
    if (isNaN(ival))
    {
        var symbolCode = ival.charCodeAt(0);
        if (symbolCode > 96)
            return symbolCode - 87;
        else
            return symbolCode - 55;
    }
    return parseInt(iVal);
}
var i = process.argv[2];
var f = process.argv[3];
var b = process.argv[4];
var checkArguments = wrongArgs(i, f, b);
if (checkArguments !== 0)
{
    process.stdout.write(checkArguments);
}
else
{
    f = parseInt(f);
    b = parseInt(b);
    if (f === b)
    {
        process.stdout.write(i);
    }
    else
    {
        let system10 = 0;
        let systemB = '';
        let fullNumber;
        let output = '';
        const symbols = '0123456789abcdefghijklmnopqrstuvwxyz';
        if (f < 10)
        {
            for (let count = 0; count < i.length; count++)
            {
                system10 += parseInt(i[count])*(Math.pow(f,(i.length - count - 1)));
            }
        }
        else
            if (f !== 10)
            {
                for (let count = 0; count < i.length; count++)
                {
                    system10 += parseToSystem10(i[count])*(Math.pow(f,(i.length - count - 1)));
                }
            }
            else
            {
                system10 = parseInt(i);
            }   

        if (b !== 10)
        {
            do
            {
                fullNumber = symbols[system10 % b];
                systemB += fullNumber;
                system10 = Math.floor(system10 / b);            
            }
            while (system10 !== 0);
            for (let count = systemB.length - 1; count >= 0; count--)
            {
                output += systemB[count];
            }
        }
        else
            output = system10;
        process.stdout.write(String(output));
    }
}