function formatMillier( nombre){
    nombre += '';
    var sep = ' ';
    var reg = /(\d+)(\d{3})/;
    while( reg.test( nombre)) {
      nombre = nombre.replace( reg, '$1' +sep +'$2');
    }
    return nombre;
  }

var d1 = new Date();
//var d2 = d1.getDate()+"/"+(d1.getMonth()+1)+"/"+d1.getFullYear();
var d2 = d1.getDate()+'/'+(d1.getMonth()+1)+'/'+d1.getFullYear();

//document.getElementById('date').innerHTML = d2;
//document.getElementById('date').innerHTML = d2;

	

//document.getElementById('cde-ag').innerHTML = localStorage.getItem('codeAg');

var d3 = new Date(localStorage.getItem('DateNaissance'));
var d4 = d3.getDate()+'/'+(d3.getMonth()+1)+'/'+d3.getFullYear();

document.getElementById('age-as').innerHTML = localStorage.getItem('age')+' Ans';



//document.getElementById('thi').innerHTML = localStorage.getItem('TRHIMP')+' %';




document.getElementById('GainIm1An').innerHTML = formatMillier(localStorage.getItem('GainImpot1An'))+' TND';
document.getElementById('dobj').innerHTML = localStorage.getItem('durObj')+' Ans';
document.getElementById('VerProgAn').innerHTML = formatMillier(localStorage.getItem('MtntPaDev'))+' TND';
document.getElementById('GainImPA').innerHTML = formatMillier(localStorage.getItem('GainImpANDev'))+' TND';
document.getElementById('VerOpAn').innerHTML = formatMillier(localStorage.getItem('VerOp'))+' TND';
if(localStorage.getItem('TypeV')==0)
{
document.getElementById('TypeVer').innerHTML = 'Versement libre';
document.getElementById('per').innerHTML = '\u2205';
}
else
{
document.getElementById('TypeVer').innerHTML = 'Versement programmé';
document.getElementById('per').innerHTML = localStorage.getItem('freqvers');
}
document.getElementById('aobj').innerHTML = localStorage.getItem('ageObjectif')+' Ans';
document.getElementById('tvpdo').innerHTML = formatMillier(localStorage.getItem('SomVer'))+' TND';
document.getElementById('tvpdo1').innerHTML = formatMillier(localStorage.getItem('SomVer'))+' TND';

var VersTot = parseFloat(localStorage.getItem('SomVer'));

var va100 = parseFloat(localStorage.getItem('va1'));
var va200 = parseFloat(localStorage.getItem('va2'));

var sommeVer = localStorage.getItem('SomVer');
var GainFin1 = va100 - sommeVer;
var GainFin2 = va200 - sommeVer;


document.getElementById('vatdo1').innerHTML = formatMillier(va100.toFixed(3))+ ' TND';
document.getElementById('vatdo2').innerHTML = formatMillier(va200.toFixed(3))+ ' TND';

document.getElementById('GainF1').innerHTML = formatMillier(GainFin1.toFixed(3))+ ' TND';
document.getElementById('GainF2').innerHTML = formatMillier(GainFin2.toFixed(3))+ ' TND';

var GainImp1ereAn = localStorage.getItem('GainImpot1An');
var GainImp = localStorage.getItem('GainImpANDev');
var Dur = localStorage.getItem('durObj');

var float = parseFloat(GainImp1ereAn);
var TypeVer = localStorage.getItem('TypeVr');
if(TypeVer==1)
var GainImpTot = float+(GainImp*(Dur-1));
else
var GainImpTot = float;

var GainTot1 = GainImpTot+GainFin1;
var GainTot2 = GainImpTot+GainFin2;

var RetSurInv1 = ((GainTot1 +  VersTot)/VersTot)*100;
var RetSurInv2 = ((GainTot2 +  VersTot)/VersTot)*100;

document.getElementById('RetourSurInv1').innerHTML = Math.round(RetSurInv1)+ ' %';
document.getElementById('RetourSurInv2').innerHTML = Math.round(RetSurInv2)+ ' %';

document.getElementById('GainFiscal1').innerHTML = formatMillier(GainImpTot)+ ' TND';
document.getElementById('GainFiscal2').innerHTML = formatMillier(GainImpTot)+ ' TND';

document.getElementById('GainTot1').innerHTML = formatMillier(GainTot1.toFixed(3))+ ' TND';
document.getElementById('GainTot2').innerHTML = formatMillier(GainTot2.toFixed(3))+ ' TND';

document.getElementById('TRDM11').innerHTML = localStorage.getItem('TRDM1')+ ' %';
document.getElementById('TRDM22').innerHTML = localStorage.getItem('TRDM2')+ ' %';

console.log(parseInt(localStorage.getItem('Type')));
if(localStorage.getItem('Type')==0)
{
var RentCer1 = 0;
var RentCer2 = 0;
console.log(RentCer1);
document.getElementById('Rt1').innerHTML = '-';
document.getElementById('Rt2').innerHTML = '-';
}
else
{
var RentCer1 = parseFloat(localStorage.getItem('RenteCert1'));
var RentCer2 = parseFloat(localStorage.getItem('RenteCert2'));
document.getElementById('Rt1').innerHTML = formatMillier(RentCer1.toFixed(3))+ ' TND';
document.getElementById('Rt2').innerHTML = formatMillier(RentCer2.toFixed(3))+ ' TND';
}


document.getElementById('HypRev1').innerHTML = localStorage.getItem('HypRev1')+ ' %';
document.getElementById('HypRev2').innerHTML = localStorage.getItem('HypRev2')+ ' %';

document.getElementById('grafc1').innerHTML = formatMillier(localStorage.getItem('GainReal1'))+ ' TND';
document.getElementById('grafc2').innerHTML = formatMillier(localStorage.getItem('GainReal2'))+ ' TND';

document.getElementById('txr1').innerHTML = parseFloat((localStorage.getItem('TAUX1'))).toFixed(2)+ ' %';
document.getElementById('txr2').innerHTML = parseFloat((localStorage.getItem('TAUX2'))).toFixed(2)+ ' %';
if(parseInt(localStorage.getItem('CategorieDeRevenu'))==0){
    document.getElementById('Gain').style.display = "none" ;
    document.getElementById('grafc1').style.display = "none" ;
    document.getElementById('grafc2').style.display = "none" ;
}
else if(parseInt(localStorage.getItem('CategorieDeRevenu'))!=0){
    document.getElementById('Gain').style.display = "flex" ;
    document.getElementById('grafc1').style.display = "flex" ;
    document.getElementById('grafc2').style.display = "flex" ;
}
if((localStorage.getItem('TypeRT')==0)||(localStorage.getItem('TypeRT')==6)){
    document.getElementById('RentType').style.display = "none" ;
    document.getElementById('remc1').style.display = "none" ;
    document.getElementById('remc2').style.display = "none" ;
}

if(localStorage.getItem('TypeRT')==1){
    document.getElementById('RentType').innerHTML = "Rente Certaine" ;
    document.getElementById('nbrAnRtCt').style.display = "flex" ;
    document.getElementById('nbrAnRtCt1').style.display = "flex" ;

    
    document.getElementById('remc1').innerHTML = formatMillier((parseFloat(localStorage.getItem('RenteCertaine1'))).toFixed(3))+' TND' ;
    document.getElementById('remc2').innerHTML = formatMillier((parseFloat(localStorage.getItem('RenteCertaine2'))).toFixed(3))+' TND' ;


}
else if(localStorage.getItem('TypeRT')==3){
    document.getElementById('RentType').innerHTML = "Rente viagère Reversible" ;
    document.getElementById('nbrAnRtCt').style.display = "none" ;
    document.getElementById('nbrAnRtCt1').style.display = "none" ;
    document.getElementById('remc1').innerHTML = formatMillier((parseFloat(localStorage.getItem('RenteReversible1'))).toFixed(3))+' TND' ;
    document.getElementById('remc2').innerHTML = formatMillier((parseFloat(localStorage.getItem('RenteReversible2'))).toFixed(3))+' TND' ;


}
else if(localStorage.getItem('TypeRT')==2){
    document.getElementById('nbrAnRtCt').style.display = "none" ;
    document.getElementById('nbrAnRtCt1').style.display = "none" ;
    document.getElementById('RentType').innerHTML = "Rente viagère sur une tete" ;
    document.getElementById('remc1').innerHTML = formatMillier((parseFloat(localStorage.getItem('RenteSurTete1'))).toFixed(3))+' TND' ;
    document.getElementById('remc2').innerHTML = formatMillier((parseFloat(localStorage.getItem('RenteSurTete2'))).toFixed(3))+' TND' ;


}

function Imprimer(){
    document.getElementById("imprimerdev").style.visibility = "hidden";
    window.print();

}





