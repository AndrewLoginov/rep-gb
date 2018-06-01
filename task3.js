var t1 = +process.argv[2];   
var t2 = +process.argv[3];    

if (Math.min(t1,t2)>=1 & Math.max(t1,t2)<=100000){
    var ss=t1+t2;
    var s = ss%60;                    //секунды
    var m = Math.trunc(ss/60)%60      //минуты
    var h = Math.trunc(ss/3600)%24    //часы
    var d = Math.trunc(ss/(3600*24))  //дни
    var out = "";
    if (d==1) out = "1 день";
    if (d==2) out = "2 дня";
    if (h>0){
        out = out +" "+getext(h,"час");
    }
    if (m>0){
        out = out +" "+getext(m,"минут");
    }
    if (s>0){
        out = out +" "+getext(s,"секунд");
    }
    console.log(out);
} else {
    if (t1<1 | t1>100000) console.log("1 <= t1 <= 100000 - не соблюдается");
    if (t2<1 | t2>100000) console.log("1 <= t2 <= 100000 - не соблюдается");
}   
function getext( m,  h){
    res = "";
    if (m==1 | m==21 | m==31 | m==41 |m==51) {
        res = m.toString()+" "+h+((h=="час")? "":"a")  
    } 
    if ((m>=2 & m<=4) | (m>=22 & m<=24) | (m>=32 & m<=34)  | (m>=42 & m<=44)  | (m>=52 & m<=54)){
        res = m.toString()+" "+h+((h=="час")? "а":"ы")
    } 
    if ((m>=5 & m<=21) | (m>=25 & m<=30) | (m>=35 & m<=40)  | (m>=45 & m<=50)  | (m>=55 & m<=59)) {
        res = m.toString()+" "+h+((h=="час")? "ов":"");
    }
    return res;
}