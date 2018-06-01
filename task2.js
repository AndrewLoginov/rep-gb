var d = +process.argv[2];    // день
var m = process.argv[3];     // месяц
var y = +process.argv[4];    // год
const mons = new Array("январь", "февраль", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря")
mm = mons.indexOf(m);
if (d>=1 & d<=31 ){
    if (mm>=0){
        if (y>=1 & y<=2999){
            var dt = new Date(y,mm,d);
            if (dt.getDate()== d){
                var dtend = new Date(y,11,31);
                console.log((dtend - dt)/(1000*3600*24));
            } else {
                console.log("ошибка в дате");
            }
        } else {
            console.log("1 <= y >= 2999 - не соблюдается");
        }
    } else {
        console.log("m not in [января февраля марта апреля мая июня июля августа сентября октября ноября декабря]");
    }
} else {
    console.log("1 <= d >= 31 - не соблюдается");
}