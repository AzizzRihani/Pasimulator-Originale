var sel = $('#agnc');
var selected = sel.val(); // cache selected value, before reordering
var opts_list = sel.find('option');
opts_list.sort(function(a, b) { return $(a).text() > $(b).text() ? 1 : -1; });
sel.html('').append(opts_list);
sel.val(selected);

document.getElementById('agnc').addEventListener('change',function(){
    var txt1=document.getElementById('agnc').value = this.value;
    var txt=document.getElementById('agnc').value = this.options[this.selectedIndex].textContent;
    console.log(txt);
    localStorage.setItem("agence", txt);

    
  });
var agc1 = localStorage.getItem('agence');
document.getElementById('AGC').innerHTML = agc1;
 
function formatMillier( nombre){
    nombre += '';
    var sep = ' ';
    var reg = /(\d+)(\d{3})/;
    while( reg.test( nombre)) {
      nombre = nombre.replace( reg, '$1' +sep +'$2');
    }
    return nombre;
  }

//document.getElementById('bcal').addEventListener("click", f1);

function f1() {
    var c = document.getElementById("inCap").value;
    var p = document.getElementById("inPer").value;
    var f = document.getElementById("per").value;
    var Mt = document.getElementById("inMtRt").value;
    var Dur = document.getElementById("inDrRt").value;
    var freq = document.getElementById("inPerRt").value;
    

    var tx1 = parseFloat(localStorage.getItem("HypRev1")) / 100;
    var TEQM = (Math.pow((1 + tx1), (1 / 12)) - 1);
    var TEQT = (Math.pow((1 + tx1), (1 / 4)) - 1);
    var TEQS = (Math.pow((1 + tx1), (1 / 2)) - 1);
    var TEQA = (Math.pow((1 + tx1), (1 / 1)) - 1);

    var c = document.getElementById("inCap").value;
    var p = document.getElementById("inPer").value;
    var f = document.getElementById("per").value;

    
    

    var Mt = document.getElementById("inMtRt").value;
    var Dur = document.getElementById("inDrRt").value;
    var freq = document.getElementById("inPerRt").value;

    function PMT(rate, nperiod, pv, fv, type) {
        if (!fv) fv = 0;
        if (!type) type = 0;

        if (rate == 0) return -(pv + fv) / nperiod;

        var pvif = Math.pow(1 + rate, nperiod);
        var pmt = rate / (pvif - 1) * -(pv * pvif + fv);

        if (type == 1) {
            pmt /= (1 + rate);
        }

        return pmt;
    }

    if (f == 12) {
        var result = PMT(parseFloat(TEQM), p * 12, 0, -c, 1).toFixed(3);


    } else if (f == 4) {
        var result = PMT(parseFloat(TEQT), p * 4, 0, -c, 1).toFixed(3);

    } else if (f == 2) {
        var result = PMT(parseFloat(TEQS), p * 2, 0, -c, 1).toFixed(3);
    } else if (f == 1) {
        var result = PMT(parseFloat(TEQA), p * 1, 0, -c, 1).toFixed(3);
    }
    if(isNaN(result)){
        result = 0;
    }
    document.getElementById("OutMtVers").innerHTML = formatMillier(result)+' TND';

    var txtecA = parseFloat(localStorage.getItem("TxTech")) / 100;
    var txtecS = Math.pow((1 + txtecA), (1 / 2)) - 1;
    var txtecT = Math.pow((1 + txtecA), (1 / 4)) - 1;
    var txtecM = Math.pow((1 + txtecA), (1 / 12)) - 1;
    var TA = Array(100);
    for (i = 2; i < 101; i++) {
        TA[i] = (((1 + 0.03) * (1 + (1 - (Math.pow((1 + (txtecA)), -(i - 1)))) / (txtecA))) / 1);
    }
    var TS = Array(100);
    for (i = 2; i < 101; i++) {
        TS[i] = (((1 + 0.03) * (1 + (1 - (Math.pow((1 + txtecS), -(i * 2 - 1)))) / (txtecS))) / 1);
    }
    var TT = Array(100);
    for (i = 2; i < 100; i++) {
        TT[i] = (((1 + 0.03) * (1 + (1 - (Math.pow((1 + txtecT), -(i * 4 - 1)))) / (txtecT))) / 1);
    }
    var TM = Array(100);
    for (i = 2; i < 100; i++) {
        TM[i] = (((1 + 0.03) * (1 + (1 - (Math.pow((1 + txtecM), -(i * 12 - 1)))) / (txtecM))) / 1);
    }

    if (freq == 12) {
        var cap = (Mt * TM[Dur]).toFixed(3);

    } else if (freq == 4) {
        var cap = (Mt * TT[Dur]).toFixed(3);
    } else if (freq == 2) {
        var cap = (Mt * TS[Dur]).toFixed(3);
    } else if (freq == 1) {
        var cap = (Mt * TA[Dur]).toFixed(3);
    }
    if(isNaN(cap)){
        cap = 0.00;
    }
    
    //document.getElementById("OutCapRt").innerHTML = formatMillier(cap)+' TND';
   
}
function f3() {
    var c = document.getElementById("inCap").value;
    var p = document.getElementById("inPer").value;
    var f = document.getElementById("per").value;
    var Mt = document.getElementById("inMtRt").value;
    var Dur = document.getElementById("inDrRt").value;
    var freq = document.getElementById("inPerRt").value;
    

    var tx1 = parseFloat(localStorage.getItem("HypRev1")) / 100;
    var TEQM = (Math.pow((1 + tx1), (1 / 12)) - 1);
    var TEQT = (Math.pow((1 + tx1), (1 / 4)) - 1);
    var TEQS = (Math.pow((1 + tx1), (1 / 2)) - 1);
    var TEQA = (Math.pow((1 + tx1), (1 / 1)) - 1);

    var c = document.getElementById("inCap").value;
    var p = document.getElementById("inPer").value;
    var f = document.getElementById("per").value;

    
    

    var Mt = document.getElementById("inMtRt").value;
    var Dur = document.getElementById("inDrRt").value;
    var freq = document.getElementById("inPerRt").value;

    function PMT(rate, nperiod, pv, fv, type) {
        if (!fv) fv = 0;
        if (!type) type = 0;

        if (rate == 0) return -(pv + fv) / nperiod;

        var pvif = Math.pow(1 + rate, nperiod);
        var pmt = rate / (pvif - 1) * -(pv * pvif + fv);

        if (type == 1) {
            pmt /= (1 + rate);
        }

        return pmt;
    }

    if (f == 12) {
        var result = PMT(parseFloat(TEQM), p * 12, 0, -c, 1).toFixed(3);


    } else if (f == 4) {
        var result = PMT(parseFloat(TEQT), p * 4, 0, -c, 1).toFixed(3);

    } else if (f == 2) {
        var result = PMT(parseFloat(TEQS), p * 2, 0, -c, 1).toFixed(3);
    } else if (f == 1) {
        var result = PMT(parseFloat(TEQA), p * 1, 0, -c, 1).toFixed(3);
    }
    if(isNaN(result)){
        result = 0;
    }
    //document.getElementById("OutMtVers").innerHTML = formatMillier(result)+' TND';

    var txtecA = parseFloat(localStorage.getItem("TxTech")) / 100;
    var txtecS = Math.pow((1 + txtecA), (1 / 2)) - 1;
    var txtecT = Math.pow((1 + txtecA), (1 / 4)) - 1;
    var txtecM = Math.pow((1 + txtecA), (1 / 12)) - 1;
    var TA = Array(100);
    for (i = 2; i < 101; i++) {
        TA[i] = (((1 + 0.03) * (1 + (1 - (Math.pow((1 + (txtecA)), -(i - 1)))) / (txtecA))) / 1);
    }
    var TS = Array(100);
    for (i = 2; i < 101; i++) {
        TS[i] = (((1 + 0.03) * (1 + (1 - (Math.pow((1 + txtecS), -(i * 2 - 1)))) / (txtecS))) / 1);
    }
    var TT = Array(100);
    for (i = 2; i < 100; i++) {
        TT[i] = (((1 + 0.03) * (1 + (1 - (Math.pow((1 + txtecT), -(i * 4 - 1)))) / (txtecT))) / 1);
    }
    var TM = Array(100);
    for (i = 2; i < 100; i++) {
        TM[i] = (((1 + 0.03) * (1 + (1 - (Math.pow((1 + txtecM), -(i * 12 - 1)))) / (txtecM))) / 1);
    }

    if (freq == 12) {
        var cap = (Mt * TM[Dur]).toFixed(3);

    } else if (freq == 4) {
        var cap = (Mt * TT[Dur]).toFixed(3);
    } else if (freq == 2) {
        var cap = (Mt * TS[Dur]).toFixed(3);
    } else if (freq == 1) {
        var cap = (Mt * TA[Dur]).toFixed(3);
    }
    if(isNaN(cap)){
        cap = 0.00;
    }
    
    document.getElementById("OutCapRt").innerHTML = formatMillier(cap)+' TND';
   
}

/*function f2() {
    var c = document.getElementById("inCap").value;
    var p = document.getElementById("inPer").value;
    var f = document.getElementById("per").value;
    var Mt = document.getElementById("inMtRt").value;
    var Dur = document.getElementById("inDrRt").value;
    var freq = document.getElementById("inPerRt").value;
    

    var tx1 = parseFloat(localStorage.getItem("HypRev1")) / 100;
    var TEQM = (Math.pow((1 + tx1), (1 / 12)) - 1);
    var TEQT = (Math.pow((1 + tx1), (1 / 4)) - 1);
    var TEQS = (Math.pow((1 + tx1), (1 / 2)) - 1);
    var TEQA = (Math.pow((1 + tx1), (1 / 1)) - 1);

    var c = document.getElementById("inCap").value;
    var p = document.getElementById("inPer").value;
    var f = document.getElementById("per").value;

    
    

    var Mt = document.getElementById("inMtRt").value;
    var Dur = document.getElementById("inDrRt").value;
    var freq = document.getElementById("inPerRt").value;

    function PMT(rate, nperiod, pv, fv, type) {
        if (!fv) fv = 0;
        if (!type) type = 0;

        if (rate == 0) return -(pv + fv) / nperiod;

        var pvif = Math.pow(1 + rate, nperiod);
        var pmt = rate / (pvif - 1) * -(pv * pvif + fv);

        if (type == 1) {
            pmt /= (1 + rate);
        }

        return pmt;
    }

    if (f == 12) {
        var result = PMT(parseFloat(TEQM), p * 12, 0, -c, 1).toFixed(3);


    } else if (f == 4) {
        var result = PMT(parseFloat(TEQT), p * 4, 0, -c, 1).toFixed(3);

    } else if (f == 2) {
        var result = PMT(parseFloat(TEQS), p * 2, 0, -c, 1).toFixed(3);
    } else if (f == 1) {
        var result = PMT(parseFloat(TEQA), p * 1, 0, -c, 1).toFixed(3);
    }
    if(isNaN(result)){
        result = 0;
    }
    document.getElementById("OutMtVers").innerHTML = formatMillier(result)+' TND';

    var txtecA = parseFloat(localStorage.getItem("TxTech")) / 100;
    var txtecS = Math.pow((1 + txtecA), (1 / 2)) - 1;
    var txtecT = Math.pow((1 + txtecA), (1 / 4)) - 1;
    var txtecM = Math.pow((1 + txtecA), (1 / 12)) - 1;
    var TA = Array(100);
    for (i = 2; i < 101; i++) {
        TA[i] = (((1 + 0.03) * (1 + (1 - (Math.pow((1 + (txtecA)), -(i - 1)))) / (txtecA))) / 1);
    }
    var TS = Array(100);
    for (i = 2; i < 101; i++) {
        TS[i] = (((1 + 0.03) * (1 + (1 - (Math.pow((1 + txtecS), -(i * 2 - 1)))) / (txtecS))) / 1);
    }
    var TT = Array(100);
    for (i = 2; i < 100; i++) {
        TT[i] = (((1 + 0.03) * (1 + (1 - (Math.pow((1 + txtecT), -(i * 4 - 1)))) / (txtecT))) / 1);
    }
    var TM = Array(100);
    for (i = 2; i < 100; i++) {
        TM[i] = (((1 + 0.03) * (1 + (1 - (Math.pow((1 + txtecM), -(i * 12 - 1)))) / (txtecM))) / 1);
    }

    if (freq == 12) {
        var cap = (Mt * TM[Dur]).toFixed(3);

    } else if (freq == 4) {
        var cap = (Mt * TT[Dur]).toFixed(3);
    } else if (freq == 2) {
        var cap = (Mt * TS[Dur]).toFixed(3);
    } else if (freq == 1) {
        var cap = (Mt * TA[Dur]).toFixed(3);
    }
    if(isNaN(cap)){
        cap = 0.00;
    }
    
    document.getElementById("OutCapRt").innerHTML = formatMillier(cap)+' TND';
    //if($("#inCap").val()){
    //$("#inCap").attr("value", cap);
    //} 
    function checkWhitespace(inputString){

        let stringArray = inputString.split(' ');
    
        let output = true;
    
        for (let el of stringArray){
            if (el!=''){
                output=false;
            }
        }
    
        return output;
    }
    
        let inputValue = $('#inCap').val();
    if(checkWhitespace(inputValue)) {
       $("#inCap").attr("value", cap);
        

    }else {
        $("#inCap").val(cap);
        
        document.getElementById('a123').style.visibility = 'hidden';
    
    }
}*/

   