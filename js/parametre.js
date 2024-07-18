document.getElementById("par").addEventListener("click", fp);

function fp() {
    document.getElementById("popup").style.display = "flex";
}
document.getElementById("par1").addEventListener("click", fp1);

function fp1() {
    document.getElementById("popup").style.display = "none";
}
document.getElementById("par2").addEventListener("click", fp1);



var Outa = localStorage.getItem("TxTech");
document.getElementById('TxTech').innerHTML = Outa+' %';
var Outb = localStorage.getItem("TxFrRt");
document.getElementById('TxFrRt').innerHTML = Outb+' %';
var Outc = localStorage.getItem("HypRev1");
document.getElementById('HypRev1').innerHTML = Outc+' %';
var Outd = localStorage.getItem("HypRev2");
document.getElementById('HypRev2').innerHTML = Outd+' %';
var Oute = localStorage.getItem("TxR");
document.getElementById('TxR').innerHTML = Oute +' %';


var a = document.getElementById('inputTxTech').value;
var b = document.getElementById('inputTxFrRt').value;
var c = document.getElementById('inputHypRev1').value;
var d = document.getElementById('inputHypRev2').value;
var e = document.getElementById('inputTxR').value;


document.getElementById("app-para").addEventListener("click", params);

function params() {
    var a = document.getElementById('inputTxTech').value;
    var b = document.getElementById('inputTxFrRt').value;
    var c = document.getElementById('inputHypRev1').value;
    var d = document.getElementById('inputHypRev2').value;
    var e = document.getElementById('inputTxR').value;

    if((a!="")&&(b!="")&&(c!="")&&(d!="")&&(e!="")){
var Outa = localStorage.getItem("TxTech");
document.getElementById('TxTech').innerHTML = Outa;
var Outb = localStorage.getItem("TxFrRt");
document.getElementById('TxFrRt').innerHTML = Outb;
var Outc = localStorage.getItem("HypRev1");
document.getElementById('HypRev1').innerHTML =  Outc;
var Outd = localStorage.getItem("HypRev2");
document.getElementById('HypRev2').innerHTML = Outd;
var Oute = localStorage.getItem("TxR");
document.getElementById('TxR').innerHTML = Oute;
    
    var a = document.getElementById('inputTxTech').value;
    var b = document.getElementById('inputTxFrRt').value;
    var c = document.getElementById('inputHypRev1').value;
    var d = document.getElementById('inputHypRev2').value;
    var e = document.getElementById('inputTxR').value;

    localStorage.setItem("HypRev1", c);
    localStorage.setItem("HypRev2", d);
    localStorage.setItem("TxFrRt", b);
    localStorage.setItem("TxTech", a);
    localStorage.setItem("TxR", e);

    var Outa = localStorage.getItem("TxTech");
document.getElementById('TxTech').innerHTML = Outa+' %';
var Outb = localStorage.getItem("TxFrRt");
document.getElementById('TxFrRt').innerHTML = Outb+' %';
var Outc = localStorage.getItem("HypRev1");
document.getElementById('HypRev1').innerHTML = Outc+' %';
var Outd = localStorage.getItem("HypRev2");
document.getElementById('HypRev2').innerHTML = Outd+' %';
var Oute = localStorage.getItem("TxR");
document.getElementById('TxR').innerHTML = Oute +' %';
document.getElementById("alertpar").style.display="none";
document.getElementById("alertpar1").style.display="flex";


    }
    else {
       // window.alert("Veuillez remplir tout les champs");
        document.getElementById("alertpar").style.display="flex";
        document.getElementById("alertpar1").style.display="none";


    }
}
