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

document.getElementById('date').innerHTML = d2;
document.getElementById('date').innerHTML = d2;

	

//document.getElementById('cde-ag').innerHTML = localStorage.getItem('codeAg');
document.getElementById('n-ag').innerHTML = localStorage.getItem('agence');

document.getElementById('n-as').innerHTML = localStorage.getItem('Name');
var d3 = new Date(localStorage.getItem('DateNaissance'));
var d4 = d3.getDate()+'/'+(d3.getMonth()+1)+'/'+d3.getFullYear();

document.getElementById('date-as').innerHTML = d4;
document.getElementById('age-as').innerHTML = localStorage.getItem('age')+' Ans';


if (isNaN(parseInt(localStorage.getItem('inRevenu'))))
{document.getElementById('tdr').innerHTML ='0 TND';}
else {document.getElementById('tdr').innerHTML = formatMillier(localStorage.getItem('inRevenu'))+' TND';}

//document.getElementById('thi').innerHTML = localStorage.getItem('TRHIMP')+' %';
document.getElementById('vad').innerHTML = formatMillier(localStorage.getItem('VersAnnDed'))+' TND';


if (isNaN(parseInt(localStorage.getItem('EcoImp'))))
{document.getElementById('edi').innerHTML = '0 TND';}
else {document.getElementById('edi').innerHTML = formatMillier(localStorage.getItem('EcoImp'))+' TND';}
document.getElementById('vmad').innerHTML = formatMillier(localStorage.getItem('VersMaxAnn'))+' TND';

document.getElementById('veri').innerHTML = formatMillier(localStorage.getItem('VersInit'))+' TND';
document.getElementById('verp').innerHTML = formatMillier(localStorage.getItem('VersProg'))+' TND';
document.getElementById('per').innerHTML = localStorage.getItem('freqvers');
document.getElementById('dobj').innerHTML = localStorage.getItem('durObj')+' Ans';
document.getElementById('aobj').innerHTML = localStorage.getItem('ageObjectif')+' Ans';
document.getElementById('tvpdo').innerHTML = formatMillier(localStorage.getItem('SomVer'))+' TND';
document.getElementById('nasrc').innerHTML = localStorage.getItem('DurRtC')+ ' Ans';
var va100 = parseFloat(localStorage.getItem('va1'));
var va200 = parseFloat(localStorage.getItem('va2'));
document.getElementById('vatdo1').innerHTML = formatMillier(va100.toFixed(3))+ ' TND';
document.getElementById('vatdo2').innerHTML = formatMillier(va200.toFixed(3))+ ' TND';

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
    document.getElementById('nbrAnRtCt').style.display = "none" ;
    document.getElementById('nbrAnRtCt1').style.display = "none" ;
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





