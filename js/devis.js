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



document.getElementById('n-as').innerHTML = formatMillier(localStorage.getItem('Name'));
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

if(localStorage.getItem('Type')==0)
{
var RentCer1 = 0;
var RentCer2 = 0;
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

///////////////////////////////////////////////////TABLE/////////////////////////////////////////////////

var x = localStorage.getItem('durObj'); // Change this value to control the number of rows
var y = parseInt(localStorage.getItem('Year')) - 1;
var CumulVer = parseFloat(localStorage.getItem('res1an'));
var CumulImp = parseFloat(localStorage.getItem('EcoImp1An'));
var EchFinale = parseFloat(localStorage.getItem('MtntPaDev')) - (parseFloat(localStorage.getItem('res1an'))-parseFloat(localStorage.getItem('VersInit')-parseFloat(localStorage.getItem('VersProg'))));
/////////////////////////////////////////////CALCUL IMPOT///////////////////////////////////////////////
var MntVer = localStorage.getItem('MntVer');
var outRevenu = localStorage.getItem('OutRev');
var NetImpAprPla = outRevenu-EchFinale;
var ImpotDu = parseFloat(localStorage.getItem("ImpDu"));
if (NetImpAprPla>=0 && NetImpAprPla<5000){
    var impotduPa = (NetImpAprPla-0)*0+0;
}
else if (NetImpAprPla>=5000 && NetImpAprPla<20000){
    var impotduPa = (NetImpAprPla-5000)*0.26+0;
}
else if (NetImpAprPla>=20000 && NetImpAprPla<30000){
    var impotduPa = (NetImpAprPla-20000)*0.28+3900;
}
else if (NetImpAprPla>=30000 && NetImpAprPla<50000){
    var impotduPa = (NetImpAprPla-30000)*0.32+6700;
}
else if (NetImpAprPla>=50000)
{
    var impotduPa = (NetImpAprPla-50000)*0.35+13100;
}
if(isNaN(impotduPa)){
    impotduPa = 0;
}
var GainImpFinale = ImpotDu - impotduPa;
if(GainImpFinale>=parseFloat(localStorage.getItem('EcoImpAn')))
    GainImpFinale = parseFloat(localStorage.getItem('EcoImpAn'));
// Function to generate rows
function generateRows(x) {
    const table = document.getElementById("Capi");

    for (let i = 0; i <= x; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 6; j++) {
            const cell = document.createElement("td");
            if (j === 0) {
                y = y + 1;
                cell.textContent = y; // Date de l'échéance
            } else if (j === 1) {
                if(TypeVer==0)
                {
                    if(i==0)
                    cell.textContent = formatMillier(localStorage.getItem('SomVer'));
                    else
                    cell.textContent = 0;
                }
                else
                {
                    if(i==0)
                        cell.textContent = formatMillier(localStorage.getItem('res1an'));
                    else
                    if(i==x)
                    {
                        cell.textContent = formatMillier(EchFinale);
                    }
                    else
                        cell.textContent = formatMillier(localStorage.getItem('MtntPaDev'));
                }
            }
            else if (j === 2) // Versement de l'année
            {
                if(TypeVer==0)
                    {
                        cell.textContent = formatMillier(localStorage.getItem('SomVer'));
                    }
                    else
                    {
                        if(i==0)
                            cell.textContent = formatMillier(localStorage.getItem('res1an'));
                        else if(i==x)
                        {
                            {
                            CumulVer = CumulVer + EchFinale ;
                            cell.textContent = formatMillier(CumulVer);
                            }
                        }
                        else
                        {
                            CumulVer = CumulVer + parseFloat(localStorage.getItem('MtntPaDev'));
                            cell.textContent = formatMillier(CumulVer);
                        }
                    }
            }
            else if (j === 3) // Epargne constituée
            {
               cell.textContent = formatMillier(parseFloat(localStorage.getItem('EpConst')).toFixed(3)); 
            }
            else if (j === 4) // Economie d'impot annuelle
            {
                if(TypeVer==0)
                    {
                        if(i==0)
                        cell.textContent = formatMillier(Math.round(localStorage.getItem("EcoImpAn")));
                        else
                        cell.textContent = 0;
                    }
                    else
                    {
                        if(i==0)
                            cell.textContent = formatMillier(localStorage.getItem('EcoImp1An'));
                        else
                        if(i==x)
                        {
                            cell.textContent = formatMillier(GainImpFinale);
                        }
                        else
                            cell.textContent = formatMillier(localStorage.getItem('EcoImpAn'));
                    } 
            } else if (j === 5) // Cumul économie d'impots
            {

                if(TypeVer==0)
                    {
                        if(i==0)
                        cell.textContent = formatMillier(Math.round(localStorage.getItem("EcoImpAn")));
                        else
                        cell.textContent = 0;
                    }
                    else
                    {
                        if(i==0)
                            cell.textContent = formatMillier(localStorage.getItem('EcoImp1An'));
                        else
                        if(i==x)
                        {
                            CumulImp = CumulImp + GainImpFinale ;
                            cell.textContent = formatMillier(CumulImp);
                        }
                        else
                        {
                            CumulImp = CumulImp + parseFloat(localStorage.getItem('EcoImpAn'));
                            cell.textContent = formatMillier(CumulImp);
                        }
                    }
            }	
            row.appendChild(cell);
        }

        table.appendChild(row);
    }
}

// Call the function to generate rows
generateRows(x);

//////////////////////////////////////////////END TABLE ////////////////////////////////////////////
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

    


}
else if(localStorage.getItem('TypeRT')==3){
    document.getElementById('nbrAnRtCt').style.display = "none" ;
    document.getElementById('nbrAnRtCt1').style.display = "none" ;

}
else if(localStorage.getItem('TypeRT')==2){
    document.getElementById('nbrAnRtCt').style.display = "none" ;
    document.getElementById('nbrAnRtCt1').style.display = "none" ;

}

function Imprimer(){
    document.getElementById("imprimerdev").style.visibility = "hidden";
    window.print();

}





