function wrongArgs(vt1, vt2)
{   

    if ((isNaN(vt1)) || (isNaN(vt2)))
        return 'Неправильно указан временной промежуток';
    else
    {
        vt1 = parseInt(vt1);
        vt2 = parseInt(vt2);
        if ((vt1 < 1) || (vt1 > 100000) || (vt2 < 1) || (vt2 > 100000))
            return 'Неправильно указан временной промежуток';
    }
    return 0;
}
function wordend(num, words)
{
    num = num%100;
    if (num > 20)
        num %= 10;
    return words[ (num > 4 || num === 0) + (num !== 1) ];
}
var t1 = process.argv[2];
var t2 = process.argv[3];
var checkArguments = wrongArgs(t1, t2);
if (checkArguments !== 0)
{
    process.stdout.write(checkArguments);
}
else
{
    t1 = parseInt(t1);
    t2 = parseInt(t2);
    const t = t1 + t2;
    const h = Math.floor(t/3600);
    const m = Math.floor((t - 3600*h)/60);
    const s = t - 3600*h - 60*m;
    if ((m === 0) && (s === 0))
        process.stdout.write(String(h + ' ' + wordend(h, ['час', 'часа', 'часов'])));
    else
        if ((h !== 0) && (s === 0))
            process.stdout.write(String(h + ' ' + wordend(h, ['час', 'часа', 'часов']) + ' ' + m + ' ' + wordend(m, ['минута', 'минуты', 'минут'])));
        else
            if (s === 0)
                process.stdout.write(String(m + ' ' + wordend(m, ['минута', 'минуты', 'минут'])));
            else
                if ((h !== 0) && (m !== 0))
                    process.stdout.write(String(h + ' ' + wordend(h, ['час', 'часа', 'часов']) + ' ' + m + ' ' + wordend(m, ['минута', 'минуты', 'минут']) + ' ' + s + ' ' + wordend(s, ['секунда', 'секунды', 'секунд'])));
                else
                    if (h !== 0)
                        process.stdout.write(String(h + ' ' + wordend(h, ['час', 'часа', 'часов']) + ' ' + s + ' ' + wordend(s, ['секунда', 'секунды', 'секунд'])));
                    else
                        if (m !== 0)
                            process.stdout.write(String(m + ' ' + wordend(m, ['минута', 'минуты', 'минут']) + ' ' + s + ' ' + wordend(s, ['секунда', 'секунды', 'секунд'])));
                        else
                            process.stdout.write(String(s + ' ' + wordend(s, ['секунда', 'секунды', 'секунд'])));
}