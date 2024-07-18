////////////////////////////////////// TABLES DE MORTALITES/////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// RENTE CERTAINE ///////////////////////////////////////////////////////
function Calcul_EC(Pe0,Pej,ipnet,Date0,Freq,Durée,Ech){
    D1 = new Date();
    D2 = new Date();
    a0 = Date0.getFullYear();
    
    
     
     m_ref = Date0.getMonth();
        //a0 = Date0.getFullYear();
        var Vka=0 ;
         
         var an = a0+Durée;
         j_sous = Date0.getDate();
         m_ref = Date0.getMonth();
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
        return Vka.toFixed(3);
    }
    
    
    TPe0 = 320;
    TPej = 120;
    Tipnet = 0.036;
    TDate0 = new Date();
    TDate0.setFullYear(2019,9,14);
    TFreq = 12;
    TDurée = 10;
    TEch = 1;
    
    console.log("valeur acquise",Calcul_EC(TPe0,TPej,Tipnet,TDate0,TFreq,TDurée,TEch));
    ///////////////////////// Rente Certaine ///////////////////////////
    function Rente_certaine(i , g, n, m, PM){
        
        i_f= Math.pow((1+i),(1/m))-1;
        Coef_rente_certaine = (1+g)*(1-(Math.pow((1+i_f),(-n*m))))/i_f;
        rente_certaine = PM / Coef_rente_certaine;
        return rente_certaine;
    
    
    }
    
    TxTech = 0.025;
    Frais = 0.03;
    DurRt = 10;
    Per = 12;
    console.log("Rente certaine",Rente_certaine(TxTech,Frais,DurRt,Per,Calcul_EC(TPe0,TPej,Tipnet,TDate0,TFreq,TDurée,TEch)).toFixed(3));
    ////////////////////////////////////////////////////////////////////

    //////////////////////////////////// TABLES DE MORTALITE /////////////////////////////////////////////
    var xlsx = require("xlsx");
    var wb = xlsx.readFile("TD99.xlsx");
    var ws = wb.Sheets["Sheet1"];
    var TD99 = xlsx.utils.sheet_to_json(ws);
    //console.log(data[0]);
    var x =  TD99[0].A;
    //var a =x.A;
    //console.log(x);
    var wb1 = xlsx.readFile("TGEN99.xlsx");
    var ws1 = wb1.Sheets["Sheet1"];
    var TGEN99 = xlsx.utils.sheet_to_json(ws1);
    //console.log(TGEN99[60-1].A105);
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    
    
    //////////////////////////////////////////// RENTE SUR TETE ////////////////////////////////////////
    function Dx_TGEN99(gen,x,i){
    
        z = Math.min(gen,1993) - 1887 + 2;
        
        y = Object.values(TGEN99[x-1])[z-1];
        
        lx = y/(Math.pow((1+i),x));
        
        return lx;
    } 
    //console.log(Object.values(TGEN99[x-1])[z-1];);
    
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
    
    //Test
    
    genX = 1984;
    genY= 1985;
    xR = 47;
    yR = 46;
    iR = 0.025;
    gR = 0.03;
    m = 12;
    Txr = 0.60;
    
    
    //console.log(Dx_TGEN99(genX,xR,iR));
    //console.log(Nx_TGEN99(genX,xR,iR));
    //console.log(ax_TGEN99(genX,xR,iR));
    //console.log(Coef_rente_sur_tete);
    //console.log(Coef_rente_sur_tete(genX,xR,iR,gR,m));

   console.log("Rente sur Tete",Rente_sur_tete(genX,xR,iR,gR,m,Calcul_EC(TPe0,TPej,Tipnet,TDate0,TFreq,TDurée,TEch)).toFixed(3));
    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    /////////////////////////////////// RENTE REVERSIBLE /////////////////////////////////////////////////////
  function axy_TGEN99(genx, x, geny, y, i){
    w = 118;
    axy = 0;
    z1 = Math.min(genx,1993) - 1887 + 2;
    lx = Object.values(TGEN99[x-1])[z1-1];

    z2 = Math.min(geny,1993) - 1887 + 2;
    ly = Object.values(TGEN99[y-1])[z2-1];
   
    for(k=0;k<=w-(Math.max(y,x));k++){
        

        lxk = Object.values(TGEN99[(x + k)-1])[z1-1]; //25,5629150546756
        lyk = Object.values(TGEN99[(y + k)-1])[z2-1];
        //axy_TGEN99 = axy_TGEN99 + (((lxk * lyk) / (lx * ly)) / (1 + i) ^ k);
        axy = axy + (((lxk * lyk)/(lx * ly))/(Math.pow((1 + i),k)));
       // axy_TGEN99 = axy_TGEN99 + (((lxk * lyk) / (lx * ly)) / (1 + i) ^ k)


    }
    
    return axy;
   }
   //console.log("axy",axy_TGEN99(genX, xR, genY, yR, iR));

    function Coef_rente_reversible(genx, x, geny, y, i, g, m , TxR){
       // ((ax_TGEN99(genx, x, i) + (m - 1) / 2 * m) + TxR * (ax_TGEN99(geny, y, i) - axy_TGEN99(genx, x, geny, y, i) + ((m - 1) / m))) * (1 + g);
       a = ax_TGEN99(genx, x, i);
       
       b = ax_TGEN99(geny, y, i);
       c =  axy_TGEN99(genx, x, geny, y, i)
       
        Coef = ((((a+ (m - 1) / 2 * m)+ TxR * (b - c+((m - 1) / m))) * (1 + g)));

        return Coef;
    }
   // console.log(Coef_rente_reversible(genX, xR, genY, yR, iR, gR, m , Txr));
    

    function Rente_reversible(genx, x, geny, y, i, g, m, TxR, PM){
        RTREV = PM / Coef_rente_reversible(genx, x, geny, y, i, g, m, TxR);
        return RTREV;

    }
    
  var  RTREV = Rente_reversible(genX,xR,genY,yR,iR,gR,m,Txr,Calcul_EC(TPe0,TPej,Tipnet,TDate0,TFreq,TDurée,TEch)).toFixed(3);
    console.log("Rente Reversible",RTREV);
    /////////////////////////////////////////////////////////////////////////////////////


    ////////////////////////////  GARANTIE BONNE FIN//////////////////////
    n = 10;
    x = 35;
    i = 0.035;
    DurGBF = 10;
    VPa = TPej*DurGBF;
    minMNT = 10000;
    maxMNT = 40000;
    g = 0.03/100;
    thetaGBF = 0.2;
    
    function Cx_TD99(x,i){
        lx = Object.values(TD99[x-1]);
        lx1 = Object.values(TD99[(x+1)-1]);
        cx = (lx - lx1)/(Math.pow((1+i),(x+0.5)));
        return cx;
    }

    function Dx_TD99(x,i){
        lx = Object.values(TD99[x-1]);
        dx = lx/Math.pow((1+i),x);
        return dx;
        }
    function Nx_TD99(x,i){
       w = 106
       nx = 0;
       for(k=0;k<=w-x;k++){
           nx = nx + Dx_TD99(x+k,i);
       } 
       return nx;
    }

    function GBF_pp(n, x, i, VPa, minMNT, maxMNT){
       ppn = 0;
       ppnk = 0;
       var gbf = 0;
       for(k=0;k<=n-1;k++){
           sk = Math.min(Math.max((n - k) * VPa, minMNT),maxMNT);
           ppnk = sk * Cx_TD99(x+k,i);
           ppn = ppn + ppnk;


       } 
       gbf = ppn/(Nx_TD99(x,i) - Nx_TD99(x+n,i));
       return gbf;

    }
    //var test = Object.values(TD99[0]);
    //////// TEST GBF_pp////////
    /*console.log(Cx_TD99(n,i));
    console.log(Dx_TD99(n,i));
    console.log(Nx_TD99(n,i));*/
    console.log("Prime annuelle de base pure Garantie de bonne fin: ",GBF_pp(n,x,i,VPa,minMNT,maxMNT).toFixed(3));
    ////////////////////////////
    

    function GBF_pi(n, x, i, VPa, g, minMNT, maxMNT){
        pin = 0;
        for(k=0;k<=n-1;k++){
            sk = Math.min(Math.max((n - k) * VPa, minMNT),maxMNT);
            pink = g * sk * Dx_TD99(x+k,i);
            pin = pin + pink;
        }
        gbfpi = GBF_pp(n, x, i, VPa, minMNT, maxMNT) + pin / (Nx_TD99(x, i) - Nx_TD99(x + n, i));
        return gbfpi;
    }
    

    /////////////// TEST GBF_pi//////////////////////
    console.log("Prime annuelle d'inventaire Garantie de bonne fin: ",GBF_pi(n,x,i,VPa,g,minMNT,maxMNT).toFixed(3));
    ///////////////////////////////////////////////////

    function GBF_pc(n, x, i, VPa, g, thetaGBF, minMNT, maxMNT){
        gbfpc = GBF_pi(n, x, i, VPa, g, minMNT, maxMNT) / (1 - thetaGBF);
        return gbfpc;

    }

    ///////////////////////// TEST GBF_pc/////////////
    console.log("Prime annuelle commerciale  Garantie de bonne fin: ",GBF_pc(n, x, i, VPa, g, thetaGBF, minMNT, maxMNT).toFixed(3));
    console.log(Object.values(TGEN99[81])[81]);
