


if (localStorage.length == 0){
localStorage.setItem("HypRev1", 4);
localStorage.setItem("HypRev2", 4.80);
localStorage.setItem("TxFrRt", 3.00);
localStorage.setItem("TxR", 60.00);
localStorage.setItem("TxTech",2.50);
}

/////////////////////////////////// Tables de mortalités /////////////////////////var xlsx = require("xlsx");

var sel = $('#agnc');
var selected = sel.val(); // cache selected value, before reordering
var opts_list = sel.find('option');
opts_list.sort(function(a, b) { return $(a).text() > $(b).text() ? 1 : -1; });
sel.html('').append(opts_list);
sel.val(selected);



///////////////////////////////////////////Format des milliers///////////////////////////////////////
function formatMillier( nombre){
    nombre += '';
    var sep = ' ';
    var reg = /(\d+)(\d{3})/;
    while( reg.test( nombre)) {
      nombre = nombre.replace( reg, '$1' +sep +'$2');
    }
    return nombre;
  }
///////////////////////////////NOM DE L'AGENCE/////////////////////////////////////
document.getElementById('agnc').addEventListener('change',function(){
    var txt1=document.getElementById('agnc').value = this.value;
    var txt=document.getElementById('agnc').value = this.options[this.selectedIndex].textContent;
    localStorage.setItem("agence", txt);
 });
var agc1 = localStorage.getItem('agence');
document.getElementById('AGC').innerHTML = agc1;
///////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('TypeRT').addEventListener('change',function(){
   if (document.getElementById('TypeRT').value == 0){
       document.getElementById('OutTypeRente').style.display = "none";
       document.getElementById('RtCt').style.display = "none";
       document.getElementById('RtCt1').style.display = "none";


   }else{
    document.getElementById('OutTypeRente').style.display = "flex";
    document.getElementById('RtCt').style.display = "flex";
    document.getElementById('RtCt1').style.display = "flex";

   }
 });
 /////////////////////////////// TYPE VERSEMENT /////////////////////////////////

 document.getElementById('TypeV').addEventListener('input',function(){
    var Type = document.getElementById('TypeV').value;
    if(Type==0){
        
        document.getElementById("VerssA").style.display = "inline";
        document.getElementById("durObjA").style.display = "inline";
        document.getElementById("inDateSousA").style.display = "inline";
        document.getElementById("VersInitA").style.display = "none";
        document.getElementById("freqvA").style.display = "none";
        document.getElementById("VersProgA").style.display = "none";
        document.getElementById("Ech1").style.display = "none";
    }
    else
    {
        document.getElementById("VerssA").style.display = "none";
        document.getElementById("durObjA").style.display = "inline";
        document.getElementById("inDateSousA").style.display = "inline";
        document.getElementById("VersInitA").style.display = "inline";
        document.getElementById("freqvA").style.display = "inline";
        document.getElementById("VersProgA").style.display = "inline";
        document.getElementById("Ech1").style.display = "none";      
    }
});

//////////////////////////////// TYPE DE LA RENTE ///////////////////////////////
document.getElementById('TypeRT').addEventListener('input',function(){
    var Type = document.getElementById('TypeRT').value;
    if(Type==0){
        
        document.getElementById("DureRente").style.display = "none";
        document.getElementById("PerRente").style.display = "none";
        document.getElementById("Naiss2T").style.display = "none";
        

        

    }
    if(Type==1){
        document.getElementById("DureRente").style.display = "inline";
        document.getElementById("PerRente").style.display = "inline";
        document.getElementById("Naiss2T").style.display = "none";
        document.getElementById('OutTypeRente').innerHTML = "Rente certaine";

        

    }
    else if(Type==2){
        document.getElementById("PerRente").style.display = "inline";
        document.getElementById("DureRente").style.display = "none";
        document.getElementById("Naiss2T").style.display = "none";
        document.getElementById('OutTypeRente').innerHTML = "Rente sur une téte";



    }
    else if(Type==3){
        
        document.getElementById("Naiss2T").style.display = "inline";
        document.getElementById("PerRente").style.display = "inline";
        document.getElementById("DureRente").style.display = "none";
        document.getElementById('OutTypeRente').innerHTML = "Rente réversible";


    }


});
/////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////// AGE ///////////////////////////////

function verifage(){
    var D2 = document.getElementById("inDate").value;
    localStorage.setItem("DateNaissance", D2);

    var d3 = D2.toString();

    var d4 = d3.replace("-", "");
    var d5 = d4.replace("-", "");
    var year = Number(d5.substr(0, 4));
    var month = Number(d5.substr(4, 2)) - 1;
    var day = Number(d5.substr(6, 2));
    var today = new Date();
    var age = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
        age--;
    }
    var ageObjectif = parseInt(age) + parseInt(d);
    if (age>100){
        swal("L'âge doit être inférieur à 100", "", "info");
        
    }
    
}

/*document.getElementById('inDate').addEventListener("input",function(){
    
var D2 = document.getElementById("inDate").value;
var d3 = D2.toString();

var d4 = d3.replace("-", "");
var d5 = d4.replace("-", "");
var year = Number(d5.substr(0, 4));
var month = Number(d5.substr(4, 2)) - 1;
var day = Number(d5.substr(6, 2));
var today = new Date();
var age = today.getFullYear() - year;
///////////////////////////////////////////////////////////////////////////////////
   /* if ((today.getFullYear() - year)>100){
        swal("Erreur", "Age inferieur a 18 ans!", "error");
    }
    

   
}); */


document.getElementById('inDate2T').addEventListener("input",function (){
    
        var D2 = document.getElementById("inDate2T").value;
        var d3 = D2.toString();
        
        var d4 = d3.replace("-", "");
        var d5 = d4.replace("-", "");
        var year = Number(d5.substr(0, 4));
        var month = Number(d5.substr(4, 2)) - 1;
        var day = Number(d5.substr(6, 2));
        var today = new Date();
        var age2t = today.getFullYear() - year;
       });
/*document.getElementById('freqvers').addEventListener("input",function(){

    var f = document.getElementById('VersInit').value;

    var c = document.getElementById('VersProg').value;
    var v = document.getElementById('freqvers').value;

   if (v==1 && f<300){
        swal("Erreur", "Pour le versement Annuel la valeur min du versement initial est de 300dt", "error");
    }
    if (v==1 && c<300){
        swal("Erreur", "Pour le versement Annuel la valeur min du versement programmé est de 300dt", "error");

    }
    if (v==2 && f<150){
        swal("Erreur", "Pour le versement semestriel la valeur min du versement initial est de 150dt", "error");

    }
    if (v==2 && c<150){
        swal("Erreur", "Pour le versement semestriel la valeur min du versement programmé est de 150dt", "error");

    }
    if (v==4 && f<75){
        swal("Erreur", "Pour le versement trimestriel la valeur min du versement initial est de 75dt", "error");

    }
    if (v==4 && c<75){
        swal("Erreur", "Pour le versement trimestriel la valeur min du versement programmé est de 75dt", "error");

    }
    if (v==12 && f<25){
        swal("Erreur", "Pour le versement mensuel la valeur min du versement initial est de 25dt", "error");

    }
    if (v==12 && c<25){
        swal("Erreur", "Pour le versement mensuel la valeur min du versement programmé est de 25dt", "error");

       
    }

});*/
 
document.getElementById('catrev1').addEventListener("input", function(){
    let CatRev = document.getElementById('catrev1').value;
if(CatRev==1){
    $("#inRevenu").attr("placeholder", "Résultat fiscal (TND)");
    document.getElementById('REVNET').innerHTML = "Résultat fiscal (TND)";
    document.getElementById('REVNET').style.visibility = 'visible';


    
}else if(CatRev==2){
    $("#inRevenu").attr("placeholder", "Recettes globales brutes TTC (TND)");
    document.getElementById('REVNET').innerHTML = "Recettes globales brutes TTC (TND)";
    document.getElementById('REVNET').style.visibility = 'visible';
    
}
else if(CatRev==3){
    $("#inRevenu").attr("placeholder", "Revenu annuel brut imposable (TND)");
    document.getElementById('REVNET').innerHTML = "Revenu annuel brut imposable (TND)";
    document.getElementById('REVNET').style.visibility = 'visible';
    
}
else if(CatRev==4){
    $("#inRevenu").attr("placeholder", "Revenu annuel brut imposable (TND)");
    document.getElementById('REVNET').innerHTML = "Revenu annuel brut imposable (TND)";
    document.getElementById('REVNET').style.visibility = 'visible';
    
    
}
else if(CatRev==""){
    $("#inRevenu").attr("placeholder", "Revenu imposable (En Dinars)");
    
    
}});
///////////////////////// Valeur acquise objectif ///////////////////////////////////////////////
////////////////////////////////// VP //////////////////////////////////////////////////////////
function Calcul_EC(Pe0,Pej,ipnet,Date0,Freq,Dure,Ech){
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
            
            
        }
        return Vka;
    }
////////////////////////////////// VL //////////////////////////////////////////////////////////
function Calcul_EC_VL(Pe0,ipnet,Date0,Dure,Ech){
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
        
         k = k0 + 12/1;
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
                Vka_n = Vka_n +(Pe0*(Math.pow((1+ipnet) ,(Math.max(0,(njc-(j+15)+1))/nja))));
                k = k + 12/1;
                
            }
            Vka  = Vka*(Math.pow((1+ipnet),(njc/nja)))+Vka_n;
            
        }
        
        return Vka;
    }
////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////// Rente Certaine ////////////////////////////////////////////
function Rente_certaine(i , g, n, m, PM){
        
    i_f= Math.pow((1+i),(1/m))-1;
    Coef_rente_certaine = (1+g)*(1-(Math.pow((1+i_f),(-n*m))))/i_f;
    rente_certaine = PM / Coef_rente_certaine;
    return rente_certaine;


}
//////////////////////////////////////////////////////////////////////////////////

////////////////////////Rente Sur une tete////////////////////////////////////////
function Dx_TGEN99(gen,x,i){
    
     z = Math.min(gen,1993) - 1887 + 2;

    y = Object.values(TGEN99[x-1])[z-1];
    
    lx = y/(Math.pow((1+i),x));
    
    return lx;
} 

function Nx_TGEN99(gen,x,i){
    w = 118;
    var Nx = 0 ;
    for(k=0;k<=w-x;k++){
        Nx = Nx + Dx_TGEN99(gen,x+k,i);
    }
    return Nx;

}
function ax_TGEN99(gen,x,i){
    ax = Nx_TGEN99(gen,x+1,i)/Dx_TGEN99(gen,x,i);
    return ax;

}
function Coef_rente_sur_tete(gen,x,i,g,m){
    Coef = ( ax_TGEN99(gen,x,i) + (m-1) /2*m)*(1+g);
   // Coef_rente_sur_tete = (ax_TGEN99(gen, x, i) + (m - 1) / 2 * m) * (1 + g)

    return Coef;
}

function Rente_sur_tete(gen,x,i,g,m,PM){
    RT_sur_tete = PM/Coef_rente_sur_tete(gen,x,i,g,m);
    return RT_sur_tete;

}
////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////RENTE REVERSIBLE///////////////////////////////////////////
function axy_TGEN99(genx, x, geny, y, i){
    w = 118;
    axy = 0;
    z1 = Math.min(genx,1993) - 1887 + 2;
    lx = Object.values(TGEN99[x-1])[z1-1];

    z2 = Math.min(geny,1993) - 1887 + 2;
    ly = Object.values(TGEN99[y-1])[z2-1];
   
    for(k=0;k<=w-(Math.max(y,x));k++){
        

        lxk = Object.values(TGEN99[(x + k)-1])[z1-1]; 
        lyk = Object.values(TGEN99[(y + k)-1])[z2-1];
        axy = axy + (((lxk * lyk)/(lx * ly))/(Math.pow((1 + i),k)));


    }
    
    return axy;
   }

    function Coef_rente_reversible(genx, x, geny, y, i, g, m , TxR){
        a = ax_TGEN99(genx, x, i);
        b = ax_TGEN99(geny, y, i);
        c =  axy_TGEN99(genx, x, geny, y, i)
        Coef = ((((a+ (m - 1) / 2 * m)+ TxR * (b - c+((m - 1) / m))) * (1 + g)));

        return Coef;
    }
    
    function Rente_reversible(genx, x, geny, y, i, g, m, TxR, PM){
        RTREV = PM / Coef_rente_reversible(genx, x, geny, y, i, g, m, TxR);
        return RTREV;

    }
    
////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById('bcal').addEventListener("click", vv);
function vv(){
    
    
    //premiere fonction
    var Name = document.getElementById('Name').value;
    localStorage.setItem("Name", Name); 

    var f = document.getElementById('VersInit').value;
    localStorage.setItem("VersInit", f);

    var TR = document.getElementById('inRevenu').value;
    //var select = document.getElementById('TrRev');
    //var TrRev = select.options[select.selectedIndex].text;

   // var TrRev = select.options[TR];
    localStorage.setItem("inRevenu", TR);

    var c = document.getElementById('VersProg').value;
    localStorage.setItem("VersProg", c);

    var d = document.getElementById('durObj').value;
    localStorage.setItem("durObj", d);

    var v = document.getElementById('freqvers').value;
    if(v==12){
        Freq="Mensuelle";
    }
    else if(v==4)
    {
        Freq="Trimestrielle";
    }else if(v==2){
        Freq="Semestrielle";
    }else{
        Freq="Annuelle";
    }
  
    localStorage.setItem("freqvers", Freq);

    var P = document.getElementById('PerRt').value;
    
    var D1 = document.getElementById('DurRtC').value;
    localStorage.setItem("DurRtC", D1);


    document.getElementById("a1").style.display = "inline";
    document.getElementById("a2").style.display = "inline";
    if ((v==1 && f<300)||VerL<100){
        alert("Pour le versement Annuel la valeur min du versement initial est de 300dt");
        document.getElementById("table2").style.display = "none";

    }
    else if ((v==1 && c<300)||VerL<100){
        alert("Pour le versement Annuel la valeur min du versement programmé est de 300dt");
        document.getElementById("table2").style.display = "none";

    }
    else if ((v==2 && f<150)||VerL<100){
        alert("Pour le versement semestriel la valeur min du versement initial est de 150dt");
        document.getElementById("table2").style.display = "none";

    }
    else if ((v==2 && c<150)||VerL<100){
        alert("Pour le versement semestriel la valeur min du versement programmé est de 150dt");
        document.getElementById("table2").style.display = "none";

    }
    else if ((v==4 && f<75)||VerL<100){
        alert("Pour le versement trimestriel la valeur min du versement initial est de 75dt");
        document.getElementById("table2").style.display = "none";

    }
    else if ((v==4 && c<75)||VerL<100){
        alert("Pour le versement trimestriel la valeur min du versement programmé est de 75dt");
        document.getElementById("table2").style.display = "none";

    }
    else if ((v==12 && f<25)||VerL<100){
        alert("Pour le versement mensuel la valeur min du versement initial est de 25dt");
        document.getElementById("table2").style.display = "none";

    }
    else   if ((v==12 && c<25)||VerL<100){
        alert("Pour le versement mensuel la valeur min du versement programmé est de 25dt");
        document.getElementById("table2").style.display = "none";


       
    }
    else{
        document.getElementById("table2").style.display = "inline";
    }

var sommeee = localStorage.getItem('SomVer');
document.getElementById('SOMME1').innerHTML = formatMillier(parseFloat(sommeee))+' TND';
document.getElementById('SOMME2').innerHTML = formatMillier(parseFloat(sommeee))+' TND';


    var f = document.getElementById('VersInit').value;
    var c = document.getElementById('VersProg').value;
    var d = parseInt(document.getElementById('durObj').value);
    var v = document.getElementById('freqvers').value;
    var P = document.getElementById('PerRt').value;
    var D1 = document.getElementById('DurRtC').value;
    var D1 = document.getElementById('DurRtC').value;
    var TypeVer= document.getElementById('TypeV').value;
    console.log(TypeVer);
    localStorage.setItem("TypeV",TypeVer);
    var VerL = document.getElementById('Verss').value;
    var Ech = 1;
   
    var Dsous = new Date(document.getElementById('inDateSous').value);

    var Dat = Dsous.getMonth() + 1;
    var DatRes = 12 - Dat;
    var vv = parseInt(v);
    if(DatRes>0)
    {
    switch(vv)
    {
        case 12:
            {
                if(DatRes>0)
                    var NverRes = DatRes;
                break;
            }
        case 4:
            {
                if(Math.trunc(DatRes / 3)==1)
                    var NverRes = 1;
                else
                if(Math.trunc(DatRes / 3)==2)
                    var NverRes = 2;
                else
                    var NverRes = 0;
                break;
            }
        case 2:
            {
                if(Math.trunc(DatRes / 6)==1)
                    var NverRes = 1;
                else
                    var NverRes = 0;
                break;
            }
        default: 
            {
                // Handle unexpected cases
                var NverRes = 0;
                console.log('Unexpected value:', vv);
            }
    }
    }
    else
        var NverRes = 0;


   if(TypeVer==0)
   {
    //testt
    var res1 = VerL;
    var res = VerL;
    var res1An = VerL;
    console.log("Versement libre");
   }
   else if(TypeVer==1)
   {
    var res = v * c * d - (-(f - c));
    var res1 = c * v;
    var res1An = parseFloat(c*NverRes)+parseFloat(f);
   }

   


    if(isNaN(res)){
        res = 0;
    }
    if(isNaN(res1)){
        res1 = 0;
    }
    if(isNaN(res2)){
        res2 = 0;
    }
    //document.getElementById('SomVer').innerHTML = formatMillier(res)+' TND';
    if(TypeVer==0)
        localStorage.setItem("SomVer", VerL);
    else
        localStorage.setItem("SomVer", res);

    

   
    
    


    var D2 = document.getElementById("inDate").value;
    localStorage.setItem("DateNaissance", D2);

    var d3 = D2.toString();

    var d4 = d3.replace("-", "");
    var d5 = d4.replace("-", "");
    var year = Number(d5.substr(0, 4));
    var month = Number(d5.substr(4, 2)) - 1;
    var day = Number(d5.substr(6, 2));
    var today = new Date();
    var age = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
        age--;
    }
    var ageObjectif = parseInt(age) + parseInt(d);
   
    
    if ((age<=0)||(age>100)){
        document.getElementById('alert5').style.visibility = 'visible';
        document.getElementById('alert1').style.borderColor = 'red';
        document.getElementById('alert2').style.borderColor = 'red';

        age=0;
        ageObjectif = 0;
        
    }
    else{
        document.getElementById('alert5').style.visibility = 'hidden';
        document.getElementById('alert1').style.borderColor = 'green';
        document.getElementById('alert2').style.borderColor = 'green';
        
    }
  
    if(isNaN(ageObjectif)){
        
        ageObjectif = age;
    }
   
    
    document.getElementById("Age").innerHTML = age + ' ans';
    localStorage.setItem("age", age);

    document.getElementById('AgeObj').innerHTML = ageObjectif + ' ans';
    localStorage.setItem("ageObjectif", ageObjectif);

    
    
    var frais = parseFloat(localStorage.getItem("TxFrRt"))/100;
    var TxIndex = 0;
    var tx1 = parseFloat(localStorage.getItem("HypRev1")) / 100;
    var tx2 = parseFloat(localStorage.getItem("HypRev2")) / 100;


    ///////// CALCUL VALEUR ACQ OBJ (ANCIENNE VERSION)///////////////////
    //var va1 = (c * (1 - frais)) * (Math.pow((1 + tx1), (1 / v))) * tx1 / ((Math.pow((1 + tx1), (1 / v))) - 1) * ((Math.pow((1 + TxIndex), d) - Math.pow((1 + tx1), d)) / (TxIndex - tx1)) - (-(f - c) * (Math.pow((1 + tx1), d)));
    //var va2 = (c * (1 - frais)) * (Math.pow((1 + tx2), (1 / v))) * tx2 / ((Math.pow((1 + tx2), (1 / v))) - 1) * ((Math.pow((1 + TxIndex), d) - Math.pow((1 + tx2), d)) / (TxIndex - tx2)) - (-(f - c) * (Math.pow((1 + tx2), d)));
    
    
   
   Dsous.setMonth(Dsous.getMonth()+1);
    
   if(TypeVer==1)
   {
    var va1 = Calcul_EC(f,c,tx1,Dsous,v,d,Ech);
  
    var va2 = Calcul_EC(f,c,tx2,Dsous,v,d,Ech);
   }
   else
   {
    var va1 = Calcul_EC_VL(VerL,tx1,Dsous,d,Ech);
  
    var va2 = Calcul_EC_VL(VerL,tx2,Dsous,d,Ech);
   }
    
    
   
    var sommeee = localStorage.getItem('SomVer');
document.getElementById('SOMME1').innerHTML = formatMillier(parseFloat(sommeee))+' TND';
document.getElementById('SOMME2').innerHTML = formatMillier(parseFloat(sommeee))+' TND';

    document.getElementById('ValAcqObj').innerHTML = formatMillier(parseFloat(va1.toFixed(3)))+' TND';

    va11=va1;
    localStorage.setItem("va1",va11);
    document.getElementById('ValAcqObj1').innerHTML = formatMillier(parseFloat(va2.toFixed(3)))+' TND';
    va22=va2;
    localStorage.setItem("va2",va22);
    
    ////////////////////////////////////////////////////////////////////////////
   
    
    document.getElementById('HypRev11').innerHTML = localStorage.getItem("HypRev1")+' %';
    document.getElementById('HypRev22').innerHTML = localStorage.getItem("HypRev2")+' %';
    //var Nva1 = Calcul_EC(f,c,tx1,Dsous,v,d,Ech);
    
    //////////////////////////////CALCUL RENTE CERTAINE (ANCIENNE VERSION)//////////////////////////////////////
    var TxTech = parseFloat(localStorage.getItem("TxTech")) / 100;
  /*  var txtecS = Math.pow((1 + txtecA), (1 / 2)) - 1;
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
    for (i = 2; i < 101; i++) {
        TT[i] = (((1 + 0.03) * (1 + (1 - (Math.pow((1 + txtecT), -(i * 4 - 1)))) / (txtecT))) / 1);
    }
    var TM = Array(100);
    for (i = 2; i < 101; i++) {
        TM[i] = (((1 + 0.03) * (1 + (1 - (Math.pow((1 + txtecM), -(i * 12 - 1)))) / (txtecM))) / 1);
    }


    if (P == 12) {
        var rt1 = (va1 / TM[D1]).toFixed(3);
        var rt2 = (va2 / TM[D1]).toFixed(3);
    } else if (P == 4) {
        var rt1 = (va1 / TT[D1]).toFixed(3);
        var rt2 = (va2 / TT[D1]).toFixed(3);
    } else if (P == 2) {
        var rt1 = (va1 / TS[D1]).toFixed(3);
        var rt2 = (va2 / TS[D1]).toFixed(3);
    } else if (P == 1) {
        var rt1 = (va1 / TA[D1]).toFixed(3);
        var rt2 = (va2 / TA[D1]).toFixed(3);
    }
    if(isNaN(rt1)){
        rt1 = 0;
    }
    if(isNaN(rt2)){
        rt2 = 0;
    }
*//////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////CALCUL RENTE CERTAINE////////////////////////////////////////
var D1 = parseInt(document.getElementById('DurRtC').value);
var P = parseInt(document.getElementById('PerRt').value);


////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////CALCUL RENTE SUR UNE TETE////////////////////////////////////////
var gen = new Date(document.getElementById("inDate").value).getFullYear();
//ar m = document.getElementById('PerRt').value;



/////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////CALCUL RENTE REVERSIBLE/////////////////////////////////////////
    
    var D2 = document.getElementById("inDate2T").value;

    var d3 = D2.toString();

    var d4 = d3.replace("-", "");
    var d5 = d4.replace("-", "");
    var year = Number(d5.substr(0, 4));
    var month = Number(d5.substr(4, 2)) - 1;
    var day = Number(d5.substr(6, 2));
    var today = new Date();
    var age2 = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
        age2--;
    }
    
   
var ageObjectif2 = parseInt(age2) + parseInt(d);
var geny = new Date(document.getElementById("inDate2T").value).getFullYear();
TxR = parseFloat(localStorage.getItem('TxR'))/100;


/////////////////////////////////////////////////////////////////////////////////////////////
//document.getElementById('RtCt').innerHTML = rt1.toFixed(3)+' TND';



if(isNaN(rt1,rt2,rtSt1,rtSt2,RTREV1,RTREV2)){
     
    document.getElementById('RtCt').innerHTML = '0 TND';
    document.getElementById('RtCt1').innerHTML = '0 TND';
}

var Type = document.getElementById('TypeRT').value;
localStorage.setItem('TypeRT',Type);
   if(Type==1){
       
    var rt1 =Rente_certaine(TxTech,frais,D1,P,va1);
    var rt2 =Rente_certaine(TxTech,frais,D1,P,va2);
    localStorage.setItem('RenteCertaine1',rt1);
    localStorage.setItem('RenteCertaine2',rt2);

    localStorage.setItem('RenteSurTete1','');
    localStorage.setItem('RenteSurTete2','');

    localStorage.setItem('RenteReversible1','');
    localStorage.setItem('RenteReversible2','');

    document.getElementById('RtCt').innerHTML = formatMillier(rt1.toFixed(3))+' TND';
    document.getElementById('RtCt1').innerHTML = formatMillier(rt2.toFixed(3))+' TND';
    }
     else if(Type==2){
        
        var rtSt1= Rente_sur_tete(gen,ageObjectif,TxTech,frais,P,va1);
        //document.getElementById('RtCt').innerHTML = rtSt1.toFixed(3)+' TND';
        
        
        var rtSt2= Rente_sur_tete(gen,ageObjectif,TxTech,frais,P,va2);
        localStorage.setItem('RenteSurTete1',rtSt1);
        localStorage.setItem('RenteSurTete2',rtSt2);

        localStorage.setItem('RenteCertaine1','');
        localStorage.setItem('RenteCertaine2','');

        localStorage.setItem('RenteReversible1','');
        localStorage.setItem('RenteReversible2','');
         document.getElementById('RtCt').innerHTML = formatMillier(rtSt1.toFixed(3))+' TND';
   // localStorage.setItem("RenteCert1",rt1);
        document.getElementById('RtCt1').innerHTML = formatMillier(rtSt2.toFixed(3))+' TND';
    //localStorage.setItem("RenteCert2",rt2);
    }
    else if(Type==3){
        var RTREV1 = Rente_reversible(gen, ageObjectif, geny, ageObjectif2, TxTech,frais,P, TxR, va1);
        var RTREV2 = Rente_reversible(gen, ageObjectif, geny, ageObjectif2, TxTech,frais,P, TxR, va2);
        localStorage.setItem('RenteReversible1',RTREV1);
        localStorage.setItem('RenteReversible2',RTREV2);

        localStorage.setItem('RenteCertaine1','');
        localStorage.setItem('RenteCertaine1','');

        localStorage.setItem('RenteSurTete1','');
        localStorage.setItem('RenteSurTete2','');

        document.getElementById('RtCt').innerHTML = formatMillier(RTREV1.toFixed(3))+' TND';
        //localStorage.setItem("RenteCert1",rt1);
        document.getElementById('RtCt1').innerHTML = formatMillier(RTREV2.toFixed(3))+' TND';
        //localStorage.setItem("RenteCert2",rt2);
        }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Controle de Saisie Date de Naissance
    if (age<18){
       alert("Age inferieur à 18");
    }
    // Controle de saisie Versements
    
////////////////////////// CALCUL TAUX DE RENDEMENT //////////////////////////////////
var TR = document.getElementById('inRevenu').value;
if((TR>0)&&(TR<=5000)){
    var Per = 0;
}
else if((TR>5000)&&(TR<=20000)){
    var Per = 26;
}
if((TR>20000)&&(TR<=30000)){
    var Per = 28;
}
if((TR>30000)&&(TR<=50000)){
    var Per = 32;
}
if(TR>50000){
    var Per = 35;
}

var RedMAX = 100000*(Per/100);
if(isNaN(RedMAX)){
    RedMAX = 0;
}
if(isNaN(Per)){
    Per = 0;
}

var res2 = (res1 * (Per/100)).toFixed(2);



document.getElementById('RedMax').innerHTML = formatMillier(RedMAX)+' TND';
document.getElementById('thi').innerHTML = Per+' %';
localStorage.setItem("TRHIMP",Per);

////////////////////////////////// C23
var d1 = document.getElementById('durObj').value;
var L = d1*12;

var C = Array(96);
if(TypeVer==1)
{
C[0]=f;
var FV = document.getElementById('freqvers').value;
var maxdedfr = (1000000/v).toFixed(3);
}
else
{
C[0]=VerL;
var FV = 1;
var maxdedfr = (1000000/1).toFixed(3);
}
switch(parseInt(FV)) {
    case 12:
        for (i = 1; i < 96; i++){
  
            C[i]=c;
        }
      break;
    case 4:
        for (i = 1; i < 96; i++){
            if ((i % 3)==0){
                C[i]=c; 
            }else{
                C[i]=0;
            }
        }
      break;
      case 2:
        for (i = 1; i < 96; i++){
            if ((i % 6)==0){
                C[i]=c; 
            }else{
                C[i]=0;
            }
        }
      break;
      case 1:
        for (i = 1; i < 96; i++){
            if ((i % 12)==0){
                if(TypeVer==1)
                C[i]=c; 
                else
                C[i]=VerL; 
            }else{
                C[i]=0;
            }
        }
        console.log(C);
      break;
    default:
      // code block
  }

//////////////////////////////////////////
///////////////////////////////////// D23
var SommeD = 0;
var D = Array(96);
for (i = 0; i <96; i++){
    if((parseFloat(C[i]))>maxdedfr){
        D[i]=C[i]-(maxdedfr*(Per/100));
    }
    else if((parseFloat(C[i]))<maxdedfr){
        D[i]=C[i]-C[i]*(Per/100);
    }
  
}

for (var i=0; i < D.length;i++) {
 SommeD += Number(D[i]);
}
////////////Gain Realiseable 
var L = d1*12;
var CG = Array(L);
CG[0]=f;
switch(parseInt(FV)) {
    case 12:
        for (i = 1; i < L; i++){
  
            CG[i]=c;
        }
      break;
    case 4:
        for (i = 1; i < L; i++){
            if ((i % 3)==0){
                CG[i]=c; 
            }else{
                CG[i]=0;
            }
        }
      break;
      case 2:
        for (i = 1; i < L; i++){
            if ((i % 6)==0){
                CG[i]=c; 
            }else{
                CG[i]=0;
            }
        }
      break;
      case 1:
        for (i = 1; i < L; i++){
            if ((i % 12)==0){
                CG[i]=c; 
            }else{
                CG[i]=0;
            }
        }
      break;
    default:
      // code block
  }

  var SommeDG = 0;
  var DG = Array(L);
  for (i = 0; i <L; i++){
      if((parseFloat(CG[i]))>maxdedfr){
          DG[i]=CG[i]-(maxdedfr*(Per/100));
      }
      else if((parseFloat(CG[i]))<maxdedfr){
          DG[i]=CG[i]-CG[i]*(Per/100);
      }
    
  }
  
  for (var i=0; i < DG.length;i++) {
   SommeDG += Number(DG[i]);
  }
var GainReal1 = Math.round(va11 - SommeDG);
var GainReal2 = Math.round(va22 - SommeDG);
localStorage.setItem("GainReal1",GainReal1);
localStorage.setItem("GainReal2",GainReal2);










/////////////////////////// E23
var E = Array(96);
for (i = 0; i < 96; i++){
    E[i]=(C[i]*Math.pow((1+tx1),(((96+1)-(i+1))/12))).toFixed(2);
}
///////////// E23Tx2
var E1 = Array(96);
for (i = 0; i < 96; i++){
    E1[i]=C[i]*Math.pow((1+tx2),(((96+1)-(i+1))/12));
}
///////////////////////////
///// F23
var F = Array(96);
for (i = 0; i < 96; i++){
    
    F[i]=(E[i]-D[i]).toFixed(2);
    
    
}
var tot = 0;
for (var i=0; i < F.length;i++) {
 tot += Number(F[i]);
}
var sommeF = tot.toFixed(2);


/////F23Tx2
var F1 = Array(96);
for (i = 0; i < 96; i++){
    
    F1[i]=(E1[i]-D[i]).toFixed(2);
    
    
}
var tot23 = 0;
for (var i=0; i < F1.length;i++) {
 tot23 += Number(F1[i]);
}
var sommeF1 = tot23.toFixed(2);


////// G23

var G = Array(96);
for (i = 0; i < 96; i++){
    G[i]=E[i]*(96+1-(i+1))/96;

}
var tot1 = 0;
for (var i=0; i < G.length;i++) {
 tot1 += Number(G[i]);
}
var sommeG = tot1.toFixed(2);


////// G23 Tx2
var G1 = Array(96);
for (i = 0; i < 96; i++){
    
    G1[i]=E1[i]*(96+1-(i+1))/96;

}
var tot19 = 0;
for (var i=0; i < G1.length;i++) {
 tot19 += Number(G1[i]);
}
var sommeG1 = tot19.toFixed(2);
/////////////I23


////////////////////



var E6 = sommeF;
var F6 = sommeG;
var EstInt = ((1+(E6/F6))-1)*(1/10);

var E7 = sommeF1;
var F7 = sommeG1;
var EstInt1 = ((1+(E7/F7))-1)*(1/10);



var int = EstInt;
var int1 = EstInt1;


var TotCalc1 = 0;



var H = Array(96);
var TotCalc = 0;
function TtotCalc(a){
    for (i = 0; i < 96; i++){
    
    
        H[i]=D[i]*Math.pow((1+a),((96+1-(i+1))/12))-D[i];
             
    
    }
    var tot3 = 0;
    for (var i=0; i < H.length;i++) {
     tot3 += Number(H[i]);
    }
return tot3;
}
var H1 = Array(96);
function TtotCalc1(a){
    for (i = 0; i < 96; i++){
    
    
        H1[i]=D[i]*Math.pow((1+a),((96+1-(i+1))/12))-D[i];
             
    
    }
    var tot31 = 0;
    for (var i=0; i < H1.length;i++) {
     tot31 += Number(H1[i]);
    }
return tot31;
}
//console.log(TtotCalc(EstInt));




var TotRendement1 = sommeF1;
var TotRendement = sommeF;
  


do {
    var diff = (TotRendement-TtotCalc(int))/TotRendement;

    int = int * (1 + diff);
    
    
    
}while(parseFloat(Math.abs(TtotCalc(int)-TotRendement))<0.1 );

localStorage.setItem('TAUX1',int*100)

do {
    var diff1 = (TotRendement1-TtotCalc1(int1))/TotRendement1;

    int1 = int1 * (1 + diff1);
    
    
    
}while(parseFloat(Math.abs(TtotCalc1(int1)-TotRendement1))<0.1 );
localStorage.setItem('TAUX2',int1*100)



var Rdmt1 = parseFloat(localStorage.getItem('TAUX1')).toFixed(2);
var Rdmt2 = parseFloat(localStorage.getItem('TAUX2')).toFixed(2);  
if(isNaN(Rdmt1)){
    Rdmt1 = 0;
}
if(isNaN(Rdmt2)){
    Rdmt2 = 0;
}

document.getElementById('TRDM1').innerHTML = Rdmt1+' %';
document.getElementById('TRDM2').innerHTML = Rdmt2+' %';
/// les rendements    




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////// AVANTAGE FISCAL PLACEMENT PROJET AVENIR /////////////////////////////////////////////////

    var Chef = document.getElementById('ChFam').value;
    var CatRev = document.getElementById('catrev1').value;
    var AssVie;
	var AssVie2=res1;
    if(res1<100000)
    {
    AssVie = res1;
    }
    else{
        AssVie = 100000;
    }
    var Revenu = document.getElementById('inRevenu').value;
    //if((Chef!="")&&(CatRev!="")&&(AssVie<=10000)&&(Revenu!="")){
    if(TypeVer==1)
    {
        if ((v==1 && f<300)){
            alert("Pour le versement Annuel la valeur min du versement initial est de 300dt");
            document.getElementById("table").style.display = "none";

        }
        else if ((v==1 && c<300)){
            alert("Pour le versement Annuel la valeur min du versement programmé est de 300dt");
            document.getElementById("table").style.display = "none";

        }
        else if ((v==2 && f<150)){
            alert("Pour le versement semestriel la valeur min du versement initial est de 150dt");
            document.getElementById("table").style.display = "none";

        }
        else if ((v==2 && c<150)){
            alert("Pour le versement semestriel la valeur min du versement programmé est de 150dt");
            document.getElementById("table").style.display = "none";

        }
        else if ((v==4 && f<75)){
            alert("Pour le versement trimestriel la valeur min du versement initial est de 75dt");
            document.getElementById("table").style.display = "none";

        }
        else if ((v==4 && c<75)){
            alert("Pour le versement trimestriel la valeur min du versement programmé est de 75dt");
            document.getElementById("table").style.display = "none";

        }
        else if ((v==12 && f<25)){
            alert("Pour le versement mensuel la valeur min du versement initial est de 25dt");
            document.getElementById("table").style.display = "none";

        }
        else   if ((v==12 && c<25)){
            alert("Pour le versement mensuel la valeur min du versement programmé est de 25dt");
            document.getElementById("table").style.display = "none";
    
           
        }  
        else{    document.getElementById("table").style.display = "inline";
    }
    }
    else
    {
        document.getElementById("table").style.display = "inline";
    }

    
    

        var Chef = document.getElementById('ChFam').value;
        //Revenu Imposable
        var CatRev = document.getElementById('catrev1').value;
        if(CatRev==1){
            $("#inRevenu").attr("placeholder", "Résultat fiscal (En Dinars)");
            
        }else if(CatRev==2){
            $("#inRevenu").attr("placeholder", "Recettes globales brutes TTC (En Dinars)");
            
        }
        else if(CatRev==3){
            $("#inRevenu").attr("placeholder", "Revenu annuel brut imposable (En Dinars)");
            
        }
        else if(CatRev==4){
            $("#inRevenu").attr("placeholder", "Revenu annuel brut imposable (En Dinars)");
            
        }
        
        
       // document.getElementById('PaAssV1').innerHTML = 'PA de '+formatMillier(AssVie)+' TND';
        
       
        

		
        // Revenu net imposable 
        var CatRevenu = document.getElementById('catrev1').value;
        localStorage.setItem("CategorieDeRevenu",CatRevenu);

        var Revenu = document.getElementById('inRevenu').value;
        //testt
        if (CatRevenu==1){
            var x = Revenu*0;
        }
        else if(CatRevenu==2){
            var x = Revenu*0.2;
        }
        else if(CatRevenu==3){
            
            var x = Revenu*0.1;
        }
        else if(CatRevenu==4){
            var x = Revenu*0.25;
        }
        var ChefFam = document.getElementById('ChFam').value;
        if(ChefFam=="oui"){
            var y = 300;
        }
        else if(ChefFam=="non"){
            var y = 0;
        }
        var EN1 = document.getElementById('Enf1').value;
        var EN2 = document.getElementById('Enf2').value;

        
        var EN3 = document.getElementById('Enf3').value;
        var EN4 = document.getElementById('Enf4').value;
        

        function Reduction(a){
            
                if(a==5){
                    var x = 2000;
                }
                else if(a==4){
                    var x = 1000;
                }
                else if(a==3){
                    var x = 100;
                }
                else{
                    var x = 0;
                }
                return x;
            
        }
        var reduction = Reduction(EN1)+Reduction(EN2)+Reduction(EN3)+Reduction(EN4);
        var outRevenu;
        if((CatRevenu==3) && (Revenu*0.1)>2000){
            outRevenu = Revenu-2000-y-reduction;
        }else{
            outRevenu = Revenu-x-y-reduction;
        }
		

         // revenu Net imposable sans PA
         if(isNaN(outRevenu)){
            outRevenu = 0;
        }

        /*
        if(outRevenu<res1)
        {
                alert("Pour le versement Programmé la valeur ne doit pas passer le revenu");
                document.getElementById("table2").style.display = "none";
                document.getElementById("table").style.display = "none";
        }

        */
        document.getElementById('RevNetImpo').innerHTML = formatMillier(outRevenu)+' TND';
        document.getElementById('RevNetImpo1An').innerHTML = formatMillier(outRevenu)+' TND';
        
        // revenu Net imposable avec PA
       
        document.getElementById('RevNetImpoPA').innerHTML = formatMillier(outRevenu)+' TND';
        
		
		 // revenu Net imposable avec PA optimale
		 
		document.getElementById('RevNetImpoPAOpt').innerHTML = formatMillier(outRevenu)+' TND';

		
        //Revenu net imposable après placement sans PA
        
        document.getElementById('RevNetApPl').innerHTML = formatMillier(parseFloat(outRevenu.toFixed(3)))+' TND';

        // revenu Net imposable avec PA 1ére année
        /*
        if(TypeVer==1)
            if(outRevenu<res1An)
            {
                var netImpApPlPA1An= ;
            }
            else
                var netImpApPlPA1An=outRevenu-res1An;
        else
        var netImpApPlPA1An=outRevenu;
    */

                
        //Revenu net imposable après placement avec PA
        
        var netImpApPlPA = outRevenu-AssVie;
        if((isNaN(netImpApPlPA)) ||(netImpApPlPA<0) ){
            netImpApPlPA = 0;
        }
		
            if(TypeVer==0)
			document.getElementById('vdeff').innerHTML = formatMillier(VerL);
            else
            document.getElementById('vdeff').innerHTML = formatMillier(res1);

			localStorage.setItem("VersAnnDed",res1);
		
		// var netImpApPlPAopt = formatMillier(Math.round((parseFloat(impotdu.toFixed(3)))*0.45));


        // Impot du sans PA
        // VP

        if (outRevenu>=0 && outRevenu<5000){
            var impotdu = (outRevenu-0)*0+0;
        }
        else if (outRevenu>=5000 && outRevenu<20000){  // (sup - inf)*pourcentage + prev
            var impotdu = (outRevenu-5000)*0.26+0;
        }
        else if (outRevenu>=20000 && outRevenu<30000){
            var impotdu = (outRevenu-20000)*0.28+3900;
        }
        else if (outRevenu>=30000 && outRevenu<50000){
            var impotdu = (outRevenu-30000)*0.32+6700;
        }
        else if (outRevenu>=50000){
            var impotdu = (outRevenu-50000)*0.35+13100;
        }
        if(isNaN(impotdu)){
            impotdu = 0;
        }
        document.getElementById('ImpDu').innerHTML = formatMillier(parseFloat(impotdu.toFixed(3)))+' TND';


        // Impot du PA
        if (netImpApPlPA>=0 && netImpApPlPA<5000){
            var impotduPa = (netImpApPlPA-0)*0+0;
        }
        else if (netImpApPlPA>=5000 && netImpApPlPA<20000){
            var impotduPa = (netImpApPlPA-5000)*0.26+0;
        }
        else if (netImpApPlPA>=20000 && netImpApPlPA<30000){
            var impotduPa = (netImpApPlPA-20000)*0.28+3900;
        }
        else if (netImpApPlPA>=30000 && netImpApPlPA<50000){
            var impotduPa = (netImpApPlPA-30000)*0.32+6700;
        }
        else if (netImpApPlPA>=50000)
		{
            var impotduPa = (netImpApPlPA-50000)*0.35+13100;
        }
        if(isNaN(impotduPa)){
            impotduPa = 0;
        }

        // Impot du PA 1 année
            {
                if(outRevenu<res1An)
                    {
                        var netImpApPlPA1An=res1An;
                    }
                    else
                        var netImpApPlPA1An=outRevenu-res1An;

            if (netImpApPlPA1An>=0 && netImpApPlPA1An<5000){
                var impotduPa1An = (netImpApPlPA1An-0)*0+0;
            }
            else if (netImpApPlPA1An>=5000 && netImpApPlPA1An<20000){
                var impotduPa1An = (netImpApPlPA1An-5000)*0.26+0;
            }
            else if (netImpApPlPA1An>=20000 && netImpApPlPA1An<30000){
                var impotduPa1An = (netImpApPlPA1An-20000)*0.28+3900;
            }
            else if (netImpApPlPA1An>=30000 && netImpApPlPA1An<50000){
                var impotduPa1An = (netImpApPlPA1An-30000)*0.32+6700;
            }
            else if (netImpApPlPA1An>=50000)
            {
                var impotduPa1An = (netImpApPlPA1An-50000)*0.35+13100;
            }
            if(isNaN(impotduPa1An)){
                impotduPa1An = 0;
            }
            }
            if(impotdu<=impotduPa1An)
                impotduPa1An=Math.round((parseFloat(impotdu.toFixed(3)))*0.45);

		var ImpDuPaOptS =formatMillier(Math.round(parseFloat(impotdu.toFixed(3))));

		var ImpDuPaOptV ;
		ImpDuPaOptV=impotdu*0.45;
		
		
		
		
		var netImpApPlPAopt=ImpDuPaOptV;
				
		   if (ImpDuPaOptV>=0 && ImpDuPaOptV<50){
            var impotduPaO = 0;
			var trancheO=0;
        }
        else if (ImpDuPaOptV>=50 && ImpDuPaOptV<4100){
            var impotduPaO = 50;
			var trancheO=5000;
        }
        else if (ImpDuPaOptV>=4100 && ImpDuPaOptV<7000){
            var impotduPaO = 4100;
			var trancheO=20000;
        }
        else if (ImpDuPaOptV>=7000 && ImpDuPaOptV<13600){
            var impotduPaO = 7000;
			var trancheO=30000;
        }
        else if (ImpDuPaOptV>=13600)
		{
            var impotduPaO = 13600;
			var trancheO=50000;
        }
		 if(isNaN(ImpDuPaOptV)){
            impotduPaO = 0;
        }
		
		if (impotduPaO>=0 && impotduPaO<50){
            var TrancheRev =0.01;
        }
        else if (impotduPaO>=50 && impotduPaO<4100){
            var TrancheRev = 0.27;
        }
        else if (impotduPaO>=4100 && impotduPaO<7000){
            var TrancheRev =0.29;
        }
        else if (impotduPaO>=7000 && impotduPaO<13600){
            var TrancheRev = 0.33;
        }
        else if (impotduPaO>=13600){
            var TrancheRev = 0.36;
        }
        
		
		 var netImpApPlPAopt = parseFloat(trancheO)+((parseFloat(ImpDuPaOptV)-parseFloat(impotduPaO))/TrancheRev);
		
		var MtntPa2 = formatMillier(AssVie);
		
		
		

		var MtntPaOpt2 = 0;
				
		if (parseFloat(outRevenu)-parseFloat(netImpApPlPAopt)<100000)
		{
			MtntPaOpt2=formatMillier(Math.round((parseFloat(outRevenu.toFixed(3))-parseFloat(netImpApPlPAopt.toFixed(3)))));
		}
		else 

		{
			MtntPaOpt2=formatMillier(100000);
		}	
		
		
		
	
		
		
				
		//document.getElementById('MtntPaOpt').innerHTML = formatMillier(Math.round((parseFloat(outRevenu.toFixed(3))-parseFloat(netImpApPlPAopt.toFixed(3)))))+' TND';
		document.getElementById('MtntPaOpt').innerHTML = MtntPaOpt2+' TND';
        localStorage.setItem('VerOp',MtntPaOpt2);
	
		var AssVieOPt=outRevenu-netImpApPlPAopt;
		
		
       
		
		// Gain d'impot total
            var GainImpotTotal = (impotdu-impotduPa)*d;

        if(isNaN(GainImpotTotal))
            {
            GainImpotTotal = 0;
        }

        // Gain d'impot 1 ere année
            var GainImpot1An = impotdu-impotduPa1An;
        
        if(isNaN(GainImpot1An))
        {
            GainImpot1An = 0;
        }

        // Gain d'impot annuel
        var GainImpotAn = impotdu-impotduPa;

        if(isNaN(GainImpotAn)){
            GainImpotAn = 0;
        }
        
        // Gain d'impot Mensuel 1 ére année
        if(TypeVer==0)
        var GainImpotMens1An = (GainImpot1An/12).toFixed(3);
        else
        {
        if(NverRes==0)
            var GainImpotMens1An = (GainImpot1An/12).toFixed(3);
        else
            var GainImpotMens1An = (GainImpot1An/NverRes).toFixed(3);
        }
        if(isNaN(GainImpotMens1An)){
            GainImpotMens1An = 0;
        }


        // Gain d'impot Mensuel
    
        var GainImpotMens = (GainImpotAn/12).toFixed(3);
        if(isNaN(GainImpotMens)){
            GainImpotMens = 0;
        }
        
        // Gain d'impot de la 1ére année en %
        var GainImpotPA1An = ((GainImpot1An/impotdu)*100).toFixed(1);
        if(isNaN(GainImpotPA1An)){
            GainImpotPA1An = 0;
        }

        // Gain d'impot en %
        var GainImpotPA = ((GainImpotAn/impotdu)*100).toFixed(1);
        if(isNaN(GainImpotPA)){
            GainImpotPA = 0;
        }
        
        //Gain d'impôt en % du placement PA 1ére année
        //VP
        if(TypeVer==1)
            var GainImpPla1An = ((GainImpot1An/res1An)*100).toFixed(1);
        //VL
        else
            var GainImpPla1An = ((GainImpot1An/VerL)*100).toFixed(1);
    
        if(isNaN(GainImpPla1An)){
            GainImpPla1An = 0;
        }


        //Gain d'impôt en % du placement PA
        //VP
        if(TypeVer==1)
        var GainImpPla = ((GainImpotAn/AssVie)*100).toFixed(1);
        //VL
        else
        var GainImpPla = ((GainImpotAn/VerL)*100).toFixed(1);

        if(isNaN(GainImpPla)){
            GainImpPla = 0;
        }
        
    
//////////////////////////////////////////////////////////// Optimale

		  // Gain d'impot Total
          var GainImpotTotalOpt = (impotdu-ImpDuPaOptV)*d;
          if(isNaN(GainImpotTotalOpt)){
            GainImpotTotalOpt = 0;
          }
        
          document.getElementById('GainImpTotalOpt').innerHTML = formatMillier(Math.round(GainImpotTotalOpt))+' TND';

		  // Gain d'impot annuel
        var GainImpotAnOpt = impotdu-ImpDuPaOptV;
        if(isNaN(GainImpotAnOpt)){
            GainImpotAnOpt = 0;
        }
		
        document.getElementById('GainImpAnOpt').innerHTML = formatMillier(Math.round(GainImpotAnOpt))+' TND';
		
		// Gain d'impot Mensuel
		var GainImpotMensOpt = (GainImpotAnOpt/12).toFixed(3);
        if(isNaN(GainImpotMensOpt)){
            GainImpotMensOpt = 0;
        }
	
        document.getElementById('GainImpMensOpt').innerHTML = formatMillier(Math.round(GainImpotMensOpt))+' TND';
		
		// Gain d'impot en %
		var GainImpotPAOpt = ((GainImpotAnOpt/impotdu)*100).toFixed(1);
        if(isNaN(GainImpotPAOpt)){
            GainImpotPAOpt = 0;
        }
	
       document.getElementById('GainImpPAOpt').innerHTML = GainImpotPAOpt+' %';
		
		 
		var GainImpPlaOpt = ((GainImpotAnOpt/AssVieOPt)*100).toFixed(1);
        if(isNaN(GainImpPlaOpt)){
            GainImpPlaOpt = 0;
        }
		
		document.getElementById('GainImpPlaOpt').innerHTML = GainImpPlaOpt+' %';
		
		var GainImpPlaOptS = ((GainImpotAnOpt/AssVie2)*100).toFixed(1);
        if(isNaN(GainImpPlaOptS)){
            GainImpPlaOptS = 0;
        }
		
		
var mntdeduct =AssVie;
		
		
		var MtntPa3;
	
		
		if (parseFloat(res1)<1000)
		{MtntPa3=parseFloat(MtntPa2)*100 ;}
		else {MtntPa3=parseFloat(MtntPa2)*100000} ;


        if(TypeVer==1)
            if(outRevenu<res1An)
            {
                var netImpApPlPA1An = netImpApPlPAopt;
            }
            else
                var netImpApPlPA1An = outRevenu-res1An;
        else
        var netImpApPlPA1An = outRevenu-res1An;
		
		//optimal
		if (MtntPa3 >= parseFloat(MtntPaOpt2)*100000)
		{	
		if(outRevenu==res1)
            document.getElementById('RevNetApPlPa').innerHTML = formatMillier(0)+' TND';
        else
	    document.getElementById('RevNetApPlPa').innerHTML = formatMillier(Math.round((parseFloat(netImpApPlPAopt.toFixed(3)))))+' TND';

        if(netImpApPlPA1An<=netImpApPlPAopt)
        {
        document.getElementById('RevNetApPl1An').innerHTML = formatMillier(Math.round((parseFloat(netImpApPlPAopt.toFixed(3)))))+' TND';
        document.getElementById('ImpDu1An').innerHTML = formatMillier(Math.round((parseFloat(impotdu.toFixed(3)))*0.45))+' TND';
        document.getElementById('GainImp1An').innerHTML = formatMillier(Math.round(GainImpotAnOpt))+' TND';
        localStorage.setItem("GainImpot1An", GainImpotAnOpt); 
        document.getElementById('GainImpMens1An').innerHTML = formatMillier(Math.round(GainImpotMensOpt))+' TND';
        document.getElementById('GainImpPA1An').innerHTML = GainImpotPAOpt+' %';
        document.getElementById('GainImpPla1An').innerHTML = GainImpPlaOptS+' %';
        }
        else
        {
        document.getElementById('RevNetApPl1An').innerHTML = formatMillier(Math.round((parseFloat(netImpApPlPA1An.toFixed(3)))))+' TND';
        document.getElementById('ImpDu1An').innerHTML = formatMillier(Math.round((parseFloat(impotduPa1An.toFixed(3)))))+' TND';
        document.getElementById('GainImp1An').innerHTML = formatMillier(Math.round(GainImpot1An))+' TND';
        localStorage.setItem("GainImpot1An", GainImpot1An); 
        document.getElementById('GainImpMens1An').innerHTML = formatMillier(Math.round(GainImpotMens1An))+' TND';
        document.getElementById('GainImpPA1An').innerHTML = GainImpotPA1An+' %';
        document.getElementById('GainImpPla1An').innerHTML = GainImpPla1An+' %';
        }

	    document.getElementById('ImpDuPa').innerHTML = formatMillier(Math.round((parseFloat(impotdu.toFixed(3)))*0.45))+' TND';
		document.getElementById('GainImpAn').innerHTML =formatMillier(Math.round(GainImpotAnOpt))+' TND';
        localStorage.setItem('GainImpANDev',Math.round(GainImpotAnOpt));	
        document.getElementById('GainImpTotal').innerHTML = formatMillier(Math.round(GainImpotTotalOpt))+' TND';
		document.getElementById('GainImpMens').innerHTML = formatMillier(Math.round(GainImpotMensOpt))+' TND';
		document.getElementById('GainImpPA').innerHTML = GainImpotPAOpt+' %';
		document.getElementById('GainImpPla').innerHTML = GainImpPlaOptS+' %';
		document.getElementById('vdeff').innerHTML = formatMillier(MtntPaOpt2)+' TND';

		localStorage.setItem("VersAnnDed",MtntPaOpt2);
		document.getElementById('RedAnn').innerHTML = formatMillier(GainImpotAnOpt)+' TND';
		localStorage.setItem("EcoImp",GainImpotAnOpt);
		mntdeduct=formatMillier(MtntPaOpt2);

        if(TypeVer==0)
        if(VerL<=localStorage.getItem('VersAnnDed'))
            document.getElementById('edi').innerHTML = formatMillier(VerL)+'TND';
        else
            document.getElementById('edi').innerHTML = formatMillier(localStorage.getItem(MtntPaOpt2))+'TND';
        if(outRevenu==res1)
            document.getElementById('edi').innerHTML = formatMillier(outRevenu)+'TND';
        else
		    document.getElementById('edi').innerHTML = formatMillier(localStorage.getItem('VersAnnDed'))+'TND';

        document.getElementById('Annees').innerHTML = Math.round(d);
		/*if (GainImpotAnOpt>=36000)
		{document.getElementById('edi').innerHTML = '100 000 TND';}*/
		}
		else		
	 	{
			
			 document.getElementById('RevNetApPlPa').innerHTML = formatMillier(parseFloat(netImpApPlPA.toFixed(3)))+' TND';
             document.getElementById('RevNetApPl1An').innerHTML = formatMillier(Math.round((parseFloat(netImpApPlPA1An.toFixed(3)))))+' TND';
 		     document.getElementById('ImpDuPa').innerHTML = formatMillier(Math.round(impotduPa))+' TND';
             document.getElementById('ImpDu1An').innerHTML = formatMillier(Math.round(impotduPa1An))+' TND';
			 document.getElementById('GainImp1An').innerHTML = formatMillier(Math.round(GainImpot1An))+' TND';
             localStorage.setItem("GainImpot1An", GainImpot1An); 
             document.getElementById('GainImpAn').innerHTML = formatMillier(Math.round(GainImpotAn))+' TND';
             localStorage.setItem('GainImpANDev',Math.round(GainImpotAn));
             document.getElementById('GainImpTotal').innerHTML = formatMillier(Math.round(GainImpotTotal))+' TND';
             document.getElementById('GainImpMens1An').innerHTML = formatMillier(Math.round(GainImpotMens1An))+' TND';
			 document.getElementById('GainImpMens').innerHTML = formatMillier(Math.round(GainImpotMens))+' TND';
             document.getElementById('GainImpPA1An').innerHTML = GainImpotPA1An+' %';
			 document.getElementById('GainImpPA').innerHTML = GainImpotPA+' %';
             document.getElementById('GainImpPla1An').innerHTML = GainImpPla1An+' %';
			 document.getElementById('GainImpPla').innerHTML = GainImpPla+' %';
			document.getElementById('vdeff').innerHTML = formatMillier(res1)+' TND';

			localStorage.setItem("VersAnnDed",res1);
			document.getElementById('RedAnn').innerHTML = (formatMillier(Math.round(res2)))+' TND';
			localStorage.setItem("EcoImp",res2);
			mntdeduct=formatMillier(res1);

            if(TypeVer==0)
                if(VerL<=localStorage.getItem('VersAnnDed'))
                    document.getElementById('edi').innerHTML = formatMillier(VerL)+' TND';
                else
                {
                    document.getElementById('edi').innerHTML = formatMillier(MtntPaOpt2)+' TND';
                }
            else
                if(outRevenu==res1)
                    document.getElementById('edi').innerHTML = formatMillier(outRevenu)+'TND';
                else
			        document.getElementById('edi').innerHTML = formatMillier(localStorage.getItem('VersAnnDed'))+'TND';
			
			
			
			
			var outRevenuMaxi = ((parseFloat(outRevenu)*1)-(parseFloat(100000)*1));
		
			
			  if (outRevenuMaxi>=0 && outRevenuMaxi<5000){
            var impotduMAxi = (outRevenuMaxi-0)*0.01+0;
        }
        else if (outRevenuMaxi>=5000 && outRevenuMaxi<20000){
            var impotduMAxi = (outRevenuMaxi-5000)*0.27+50;
        }
        else if (outRevenuMaxi>=20000 && outRevenuMaxi<30000){
            var impotduMAxi = (outRevenuMaxi-20000)*0.29+4100;
        }
        else if (outRevenuMaxi>=30000 && outRevenuMaxi<50000){
            var impotduMAxi = (outRevenuMaxi-30000)*0.33+7000;
        }
        else if (outRevenuMaxi>=50000){
            var impotduMAxi = (outRevenuMaxi-50000)*0.36+13600;
        }
        if(isNaN(impotduMAxi)){
            impotduMAxi = 0;
        }

 var GainImpotAnOptMaxi = impotdu-impotduMAxi;
        if(isNaN(GainImpotAnOptMaxi)){
            GainImpotAnOptMaxi = 0;
        }
	
	
				var GainImpotPAOptks = ((GainImpotAnOptMaxi/impotdu)*100).toFixed(1);
        if(isNaN(GainImpotPAOptks)){
            GainImpotPAOptks = 0;

        }
					
			document.getElementById('GainImpMensOpt').innerHTML = formatMillier(Math.round(GainImpotAnOptMaxi/12))+' TND';	
			if (GainImpotAnOptMaxi>=36000)
			{

				document.getElementById('GainImpPAOpt').innerHTML = GainImpotPAOptks+' %';}
		}
		
		document.getElementById('RevNetApPlPaOpt').innerHTML = formatMillier(Math.round((parseFloat(netImpApPlPAopt.toFixed(3)))))+' TND';		       		
		
		document.getElementById('ImpDuPaOpt').innerHTML = formatMillier(Math.round((parseFloat(impotdu.toFixed(3)))*0.45))+' TND';
        if(TypeVer==0)
        {
        document.getElementById('MtntPa').innerHTML = formatMillier(VerL)+' TND';
        document.getElementById('MtntPa1An').innerHTML = formatMillier(VerL)+' TND';
        localStorage.setItem('MtntPaDev',0);
        }
        else
        {
		document.getElementById('MtntPa').innerHTML = formatMillier(AssVie2)+' TND';
        document.getElementById('MtntPa1An').innerHTML = res1An+' TND';
        localStorage.setItem('MtntPaDev',AssVie2);
        }

		document.getElementById('MaxDed').innerHTML = formatMillier(MtntPaOpt2)+' TND';
		localStorage.setItem("VersMaxAnn",MtntPaOpt2);
		
		
		
		
		//Max opt 
	
		var T =formatMillier(Math.round((parseFloat(outRevenu.toFixed(3))-parseFloat(netImpApPlPAopt.toFixed(3)))));
		
		if(parseFloat(T)*10000>parseFloat(100)*10000) 
		{	
		
					var outRevenuMax = ((parseFloat(outRevenu)*1)-(parseFloat(100000)*1));
				
					document.getElementById('RevNetApPlPaOpt').innerHTML = formatMillier(outRevenuMax) +' TND';
					
						      // Impot du  PAopt MAX
        if (outRevenuMax>=0 && outRevenuMax<5000){
            var impotduMAx = (outRevenuMax-0)*0.01+0;
        }
        else if (outRevenuMax>=5000 && outRevenuMax<20000){
            var impotduMAx = (outRevenuMax-5000)*0.27+50;
        }
        else if (outRevenuMax>=20000 && outRevenuMax<30000){
            var impotduMAx = (outRevenuMax-20000)*0.29+4100;
        }
        else if (outRevenuMax>=30000 && outRevenuMax<50000){
            var impotduMAx = (outRevenuMax-30000)*0.33+7000;
        }
        else if (outRevenuMax>=50000){
            var impotduMAx = (outRevenuMax-50000)*0.36+13600;
        }
        if(isNaN(impotduMAx)){
            impotduMAx = 0;
        }
		document.getElementById('ImpDuPaOpt').innerHTML = formatMillier(impotduMAx)+' TND';
		 var GainImpotAnOptMax = impotdu-impotduMAx;
        if(isNaN(GainImpotAnOptMax)){
            GainImpotAnOptMax = 0;
        }
        var GainImpotTotalOptMax = GainImpotAnOptMax*d;
		document.getElementById('GainImpAnOpt').innerHTML = formatMillier(Math.round(GainImpotAnOptMax))+' TND';
        document.getElementById('GainImpTotalOpt').innerHTML = formatMillier(Math.round(GainImpotTotalOptMax))+' TND';

		}
		//var res22  = formatMillier(Math.round(parseFloat(res1.toFixed(3))));	
		
		var res24  = res1;

		
		var res23;

		if (parseFloat(res1)<1000)
		{res23=parseFloat(res24) ;}
		else {res23=parseFloat(res24)*10} ;	
		
	
		
		if (res23>=(parseFloat(100)*10000))	
		{	
	
		document.getElementById('RedAnn').innerHTML = (formatMillier(Math.round(GainImpotAnOptMax)))+' TND';
			localStorage.setItem("EcoImp",GainImpotAnOptMax);
		var GainImpotMensOptMax = (GainImpotAnOptMax/12).toFixed(3);
        if(isNaN(GainImpotMensOptMax)){
            GainImpotMensOptMax = 0;
        }
					
			var GainImpotPAOptk = ((GainImpotAnOptMax/impotdu)*100).toFixed(1);
        if(isNaN(GainImpotPAOptk)){
            GainImpotPAOptk = 0;
        }
		
			var GainImpPlaOptSw = ((GainImpotAnOptMax/res1)*100).toFixed(1);
        if(isNaN(GainImpPlaOptSw)){
            GainImpPlaOptSw = 0;
        }
		
		/*document.getElementById('GainImpPA').innerHTML = GainImpPlaOptSw+' %';
		alert(2);
		alert(GainImpPlaOptSw);
		alert(GainImpotPAOptk);
		document.getElementById('GainImpPAOpt').innerHTML = GainImpotPAOptk+' %';*/
		
		
	
		if (GainImpotMensOptMax==0)
		{		
	var scfr;
	
	//document.getElementById('RevNetApPlPa').innerHTML = formatMillier(Math.round((parseFloat(netImpApPlPAopt.toFixed(3)))))+' TND';
		}	
		else {
		
        document.getElementById('GainImpMensOpt').innerHTML = formatMillier(Math.round(GainImpotMensOptMax))+' TND';	
		
		
		
		document.getElementById('RevNetApPlPa').innerHTML = formatMillier(outRevenuMax) +' TND';
		
		document.getElementById('ImpDuPa').innerHTML = formatMillier(impotduMAx)+' TND';
		
		document.getElementById('GainImpAn').innerHTML = formatMillier(Math.round(GainImpotAnOptMax))+' TND';
        
        localStorage.setItem('GainImpANDev',Math.round(GainImpotAnOptMax));

		 document.getElementById('GainImpMens').innerHTML = formatMillier(Math.round(GainImpotMensOptMax))+' TND';
		 
		 document.getElementById('GainImpPA').innerHTML = GainImpotPAOptk+' %';

		 document.getElementById('GainImpPAOpt').innerHTML = GainImpotPAOptk+' %';
		 
		 var GainImpPlaOptz = ((GainImpotAnOptMax/AssVie2)*100).toFixed(1);
        if(isNaN(GainImpPlaOptz)){
            GainImpPlaOptz = 0;
        }
		
		 document.getElementById('GainImpPla').innerHTML = GainImpPlaOpt+' %';
		}
		}
		else 
		{
			var tsw;
		}
		
	
			
		if (GainImpotAnOpt<=36000)
		{
		document.getElementById('GainImpMensOpt').innerHTML = formatMillier(Math.round(GainImpotAnOpt/12))+' TND';}
		
		
	
		

		
		
		
        return false;


    
    }


    
