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
///////////////////////////////////////////////////Calcul Ehéances////////////////////////////////////////

var VerI = parseFloat(localStorage.getItem("VerI"));
var VerP = parseFloat(localStorage.getItem("VerP"));
var VerL = parseFloat(localStorage.getItem("VerL"));
var txt1 = parseFloat(localStorage.getItem("tx"));
var NvDate = localStorage.getItem("Dsous");
var Dsous = new Date(NvDate);
var Duro = parseInt(localStorage.getItem("d"));
var Ech = parseInt(localStorage.getItem("Ech"));
var v = parseInt(localStorage.getItem("freqvers"));


///////////////////////////////////////////////////TABLE/////////////////////////////////////////////////

var x = localStorage.getItem('durObj'); 
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
// Function Epargne Const
//VP
function Calcul_EC(Pe0,Pej,ipnet,Date0,Freq,Dure,Ech,P){
    D1 = new Date();
    D2 = new Date();
    a0 = parseInt(Date0.getFullYear());
    an = 0;
    
     
     m_ref = Date0.getMonth();
        //a0 = Date0.getFullYear();
        var Vka=0 ;
         
        var an = a0+Dure;
         j_sous = Date0.getDate();
         m_ref = Date0.getMonth()+1;
         var sa01 = (a0-1).toString();
         var D111 = new Date("12/31/".concat(sa01));
         var sa0 = a0.toString();
         var sm_ref = m_ref.toString();
         var sj_sous = j_sous.toString();
         var D222 = new Date(sm_ref.concat("/").concat(sj_sous).concat("/").concat(sa0));
         j = (D222.getTime()-D111.getTime())/(1000 * 3600 * 24);
        if(j_sous>=24){
            m_ref = m_ref+1;
        }
        for(a=a0;a<=an;a++){    
            k0 = 0;
            kn = 12;
            switch(a){
                case a0:
                    k0 = m_ref;
                    break;
                case an:
                    switch(Ech){
                        case 1:
                            kn = m_ref;
                            break;
                            
                    }
                    
            }
        
         k = k0 + 12/Freq;
        var Vka_n = 0;
        var njc;
        var j;
        var Sa1 = (a-1).toString();
        var Sa = a.toString();
        var  dateD1 = new Date("12/31/".concat(Sa1));
        var  dateD2 = new Date("12/31/".concat(Sa));
        nja = (dateD2.getTime() - dateD1.getTime())/(1000 * 3600 * 24); //nbr de jour sur l'année
    
            switch(kn){
                 
                case 12:
                    njc = nja;
                    break;
                
                default:
                    var Skn = (kn+1).toString();
                    var D11 = new Date("01/01/".concat(Sa));
                    var D22 = new Date(Skn.concat("/01/").concat(Sa));
                    
                    njc = Math.round((D22.getTime() - D11.getTime())/(1000 * 3600 * 24)); //nbr de jour période
                   
                    break;
            }
            if(a==a0){
                var sa01 = (a0-1).toString();
                var D111 = new Date("12/31/".concat(sa01));
                var sa0 = a0.toString();
                var sm_ref = m_ref.toString();
                var sj_sous = j_sous.toString();
                var D222 = new Date(sm_ref.concat("/").concat(sj_sous).concat("/").concat(sa0));
                j = Math.round((D222.getTime()-D111.getTime())/(1000 * 3600 * 24))+1;
                
    
         
              Vka_n =Pe0*(Math.pow((1+ipnet),(Math.max(0,(njc-(j+15)+1))/nja)));
             
            }
           
            while(k<=kn){
                var Sk = k.toString();
                var D10 = new Date("12/31/".concat(Sa1));
                var D20 = new Date(Sk.concat("/1/").concat(Sa));
    
                j = Math.round((D20.getTime()-D10.getTime())/(1000 * 3600 * 24)); //jour de l'année
                Vka_n = Vka_n +(Pej*(Math.pow((1+ipnet),(Math.max(0,(njc-(j+15)+1))/nja))));
                k = k + 12/Freq;
                
    
            }
            Vka  = Vka*(Math.pow((1+ipnet),(njc/nja)))+Vka_n;
            console.log(Vka);            
            
        }
        return Vka;
    }
//VL
function Calcul_EC_VL(Pe0,ipnet,Date0,Dure,Ech,P){

    D1 = new Date();
    D2 = new Date();

    a0 = parseInt(Date0.getFullYear());
    an = 0;
    

     m_ref = Date0.getMonth();
        //a0 = Date0.getFullYear();
        var Vka=0 ;
        var count=0;
        var an = a0+Dure;
         j_sous = Date0.getDate();
         m_ref = Date0.getMonth()+1;
         var sa01 = (a0-1).toString();
         var D111 = new Date("12/31/".concat(sa01));
         var sa0 = a0.toString();
         var sm_ref = m_ref.toString();
         var sj_sous = j_sous.toString();
         var D222 = new Date(sm_ref.concat("/").concat(sj_sous).concat("/").concat(sa0));
         j = (D222.getTime()-D111.getTime())/(1000 * 3600 * 24);
        if(j_sous>=24){
            m_ref = m_ref+1;
        }
        for(a=a0;a<=an;a++)
            {    
            k0 = 0;
            kn = 12;
            switch(a){
                case a0:
                    k0 = m_ref;
                    break;
                case an:
                    switch(Ech){
                        case 1:
                            kn = m_ref;
                            break;
                            
                    }
                    
            }
        
         k = k0 + 12;
         var Vka_n = 0;
        var njc;
        var j;
        var Sa1 = (a-1).toString();
        var Sa = a.toString();
        var  dateD1 = new Date("12/31/".concat(Sa1));
        var  dateD2 = new Date("12/31/".concat(Sa));
        nja = (dateD2.getTime() - dateD1.getTime())/(1000 * 3600 * 24); //nbr de jour sur l'année
    
            switch(kn){
                 
                case 12:
                    njc = nja;
                    break;
                
                default:
                    var Skn = (kn+1).toString();
                    var D11 = new Date("01/01/".concat(Sa));
                    var D22 = new Date(Skn.concat("/01/").concat(Sa));
                    
                    njc = Math.round((D22.getTime() - D11.getTime())/(1000 * 3600 * 24)); //nbr de jour période
                   
                    break;
            }
            if(a==a0){
                var sa01 = (a0-1).toString();
                var D111 = new Date("12/31/".concat(sa01));
                var sa0 = a0.toString();
                var sm_ref = m_ref.toString();
                var sj_sous = j_sous.toString();
                var D222 = new Date(sm_ref.concat("/").concat(sj_sous).concat("/").concat(sa0));
                j = Math.round((D222.getTime()-D111.getTime())/(1000 * 3600 * 24))+1;
                
    
         
              Vka_n =Pe0*(Math.pow((1+ipnet),(Math.max(0,(njc-(j+15)+1))/nja)));
             
            }
           
            while(k<=kn){
                var Sk = k.toString();
                var D10 = new Date("12/31/".concat(Sa1));
                var D20 = new Date(Sk.concat("/1/").concat(Sa));
    
                j = Math.round((D20.getTime()-D10.getTime())/(1000 * 3600 * 24)); //jour de l'année
                Vka_n = Vka_n +(1*(Math.pow((1+ipnet) ,(Math.max(0,(njc-(j+15)+1))/nja))));
                k = k + 12;
            }
            Vka  = Vka*(Math.pow((1+ipnet),(njc/nja)))+Vka_n;

            
            if(count==P)
            {
                return Vka;
            }
            count ++;
        /*
        // Retrieve existing Vka array from localStorage or initialize an empty array if it doesn't exist
        var VkaArray = localStorage.getItem("VkaL");

        // Make sure that VkaArray is an array, even if localStorage is empty
        if (VkaArray) {
            VkaArray = JSON.parse(VkaArray);
        } else {
            VkaArray = [];
        }

        // Ensure VkaArray is an array before pushing
        if (!Array.isArray(VkaArray)) {
            VkaArray = [];
        }

        // Append the new Vka value to the array
        VkaArray.push(Vka);

        // Store the updated array back in localStorage
        localStorage.setItem("VkaL", JSON.stringify(VkaArray));
        */

        }
        return Vka;
    }
// Function to generate rows
function generateRows(x) {
    const table = document.getElementById("Capi");
    var u=0;
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
                if(TypeVer==0)
                {
                    var va = Calcul_EC_VL(VerL,txt1,Dsous,Duro,Ech,i);
                    if(i==x)
                        cell.textContent = formatMillier(va.toFixed(3));
                    else 
                    {
                        cell.textContent = formatMillier(va.toFixed(3));
                    }
                }
                else
                {
                    console.log("PG");
                    var vap = Calcul_EC(VerI,VerP,txt1,Dsous,v,Duro,Ech,i);
                    if(i==x)
                        cell.textContent = formatMillier(vap.toFixed(3));
                    else 
                    {
                        cell.textContent = formatMillier(vap.toFixed(3));  
                    }            
                }
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
                        cell.textContent = formatMillier(Math.round(localStorage.getItem("EcoImpAn")));
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
    document.getElementById('Gain').style.display = "none" ;
    document.getElementById('grafc1').style.display = "none" ;
    document.getElementById('grafc2').style.display = "none" ;
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





