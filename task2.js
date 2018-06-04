function findMonth(vm)
{
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    for (let count = 0; count < months.length; count++)
        if(months[count] === vm)
            return count + 1;
    return 0;
}

function bigYear(vy)
{
    if ((vy % 400) === 0)
        return 1;
    else
        if (((vy % 4) === 0) && ((vy % 100) !== 0))
            return 1;
    return 0;
}
function wrongArgs(dd, mm, yy)
{   
    if (isNaN(dd))
        return 'Неправильно указан день';
    dd = parseInt(dd);
    if (dd <= 0)
        return 'Неправильно указан день';

    if (findMonth(mm) === 0)
        return 'Неправильно указан месяц';
    if (isNaN(yy))
        return 'Неправильно указан год';
    else
    {
        yy = parseInt(yy);
        if ((yy < 1) || (yy > 2999))
            return 'Неправильно указан год';
    }

    if (mm === 'февраля')
    {
        if ((dd > 28) && (bigYear(yy) === 0))
            return 'Неправильно указан день';
        else
            if (dd > 29)
                return 'Неправильно указан день';
    }
    else
        {

            if ((dd > 30) && ((mm === 'апреля') || (mm === 'июня') || (mm === 'сентября') || (mm === 'ноября')))
                return 'Неправильно указан день';
            else

                if (dd > 31)
                    return 'Неправильно указан день';
        }
    return 0;
}
function countDays(vdd, vmm, vyy)
{
    const year = bigYear(vyy);  
    let days;
    switch (vmm) {
        
        case 'января':
        days = 31+28+year+31+30+31+30+31+31+30+31+30+31-vdd;
        break;
        
        case 'февраля':
        days = 28+year+31+30+31+30+31+31+30+31+30+31-vdd;
        break;

        case 'марта':
        days = 31+30+31+30+31+31+30+31+30+31-vdd;
        break;

        case 'апреля':
        days = 30+31+30+31+31+30+31+30+31-vdd;
        break;

        case 'мая':
        days = 31+30+31+31+30+31+30+31-vdd;
        break;

        case 'июня':
        days = 30+31+31+30+31+30+31-vdd;
        break;

        case 'июля':
        days = 31+31+30+31+30+31-vdd;
        break;

        case 'августа':
        days = 31+30+31+30+31-vdd;
        break;

        case 'сентября':
        days = 30+31+30+31-vdd;
        break;

        case 'октября':
        days = 31+30+31-vdd;
        break;

        case 'ноября':
        days = 30+31-vdd;
        break;

        // декабрь
        default:
        days = 31-vdd;
        break;
    }
    return days;
}
var d = process.argv[2];
var m = process.argv[3];
var y = process.argv[4];
var checkArguments = wrongArgs(d, m, y);
if (checkArguments !== 0)
{
    process.stdout.write(checkArguments);
}
else
{
    d = parseInt(d);
    y = parseInt(y);
    process.stdout.write(String(countDays(d, m, y)));
}
