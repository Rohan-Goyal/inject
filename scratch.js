var btn= document.createElement("button");
var t= document.createTextNode('Randomiser');
btn.appendChild(t);
document.body.appendChild(btn);

function f1(){
    var comic=Math.floor(Math.random() * 1148);
    var log=Math.log10(comic);
    var mystr=comic.toString()
    if (log<1){var URL='http://www.giantitp.com/comics/oots000'+mystr+'.html';}
    else if (log<2){var URL='http://www.giantitp.com/comics/oots00'+mystr+'.html';}
    else if (log<3){var URL='http://www.giantitp.com/comics/oots0' +mystr+ '.html';}
    else {var URL='http://www.giantitp.com/comics/oots' +mystr+ '.html';};
    window.location.assign(URL);


};

btn.onClick=function(){f1()};
