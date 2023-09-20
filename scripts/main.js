const button_aj = document.getElementById('buj');
const button_de = document.getElementById('bud');
const table_puiss = document.getElementById('table-puisannce')

var total = 0 ;
var puissance = 0;

var ref = 0 ;
var refer = "A"

button_aj.addEventListener('click',()=>{
puissance = document.getElementById('SB').value * document.getElementById('CUF').value * 100 * 0.34 ;
var puissancekw = puissance / 1000
total = total + puissance ;
console.log(total)
var totalkw = total / 1000 ;
document.getElementById('tot').innerHTML = totalkw.toString() ; 
ref++  ;
function create_row(){
let tr  = document.createElement('tr')
tr.innerHTML = '<td id=SP>&nbsp;&nbsp;'+ refer + ref +'&nbsp;&nbsp;</td><td>'+ document.getElementById('SB').value +' </td><td>&nbsp;&nbsp;&nbsp;'+ document.getElementById('CUF').value +'&nbsp;&nbsp;&nbsp;</td><td>'+ document.getElementById('SB').value * document.getElementById('CUF').value +'</td><td>&nbsp;'+ puissancekw +'&nbsp; </td><td>&nbsp;'+ totalkw +'&nbsp; </td>'
return tr ;
}
table_puiss.appendChild(create_row())
})
button_de.addEventListener('click',()=>{
    table_puiss.removeChild(document.getElementById('SP'))
})
const tableI_but = document.getElementById('table-I_but')

var PTIT = 0 ;

tableI_but.addEventListener('click',()=>{
    var ada = document.getElementById('ada').value; 
    var ndf = document.getElementById('ndf').value;
    var cal_d  = document.getElementById('cal_d').value;
    var nb_com  = document.getElementById('nb_com').value;
    var surfm2 = document.getElementById('surfm2').value;
    var adl  = document.getElementById('adl').value;
    const tableI  = document.getElementById('table_I');
    PTIT = PTIT + (cal_d * 420 / 1000) ;
    function create_row_I(){
    let tr  = document.createElement('tr')
    tr.innerHTML = '<tr style="background-color:white ;"><td>&nbsp;&nbsp;&nbsp; '+ ada +'  &nbsp;&nbsp;</td><td>&nbsp;  '+ ndf +'*'+cal_d+'A  &nbsp;</td><td>&nbsp;  '+ nb_com +'  &nbsp;</td><td>&nbsp;&nbsp; '+ surfm2 +'  &nbsp;&nbsp;</td><td>&nbsp;  '+ cal_d * 420 / 1000 +'  &nbsp;</td><td>&nbsp;  '+ adl +'  &nbsp;</td></tr>'
    return tr ;
    }
    tableI.appendChild(create_row_I())
    document.getElementById('ptt').innerText = 'puissance total = ' + PTIT.toString() + ' KW'
})

var curr_page ;
var scrol_unit = window.screen.width
let nav_bo = Array.from(document.getElementsByClassName('nav_child'))
nav_bo.map(but =>{
    but.addEventListener('click',(e)=>{
       window.scrollTo(scrol_unit * e.target.id - scrol_unit , 0)
       console.log(e.target.id)  
    })
})


document.getElementById('tbc').addEventListener('click',()=>{
var puiss_com_val = document.getElementById('puissance-compteur').value / 1000 ;
if(puiss_com_val <= 2.2){
    console.log('c10')
    document.getElementById('img-compteurs').style.display = 'none';
    document.getElementById('img-compteur').style.display = 'block';
    document.getElementById('img-compteur').innerHTML = '<img src="./compteur/c10.jpg" alt="compteur c10" style="height: 80vh; width:40vw; border-radius:5px; object-fit:cover;">'
    document.getElementById('justification-a-copie').innerHTML = "Le choix de <span style='color:red' >compteur électrique monophasé <b>C10</b></span> est justifié par la puissance de l'installation et qui egale a <span style='color:green;'>" + puiss_com_val + " KVA </span > ,<span style='color:red;'> un budget limité de 470 dt </span> , la simplicité d'installation <span style='color:green'>2 cable entree (phase et neutre) et <span style='color:blue'> 2 cable sortie (phase et neutre) </span> </span> , une consommation électrique peu élevée, l'utilisation d'appareils monophasés et la possibilité d'évoluer à l'avenir <span style='color:red'>s'il depase la limite de courant ( I = 40 ampere ) </span>.";
    
}
else if(puiss_com_val > 2.2 && puiss_com_val <= 4.4){
    console.log('c20')
    document.getElementById('img-compteurs').style.display = 'none';
    document.getElementById('img-compteur').style.display = 'block';
    document.getElementById('img-compteur').innerHTML = '<img src="./compteur/c20.jpg" alt="compteur c20" style="height: 80vh; width:40vw; border-radius:5px; object-fit:cover;">'
    
    document.getElementById('justification-a-copie').innerHTML = "Le choix de <span style='color:red' >compteur électrique monophasé <b>C20</b></span> est justifié par la puissance de l'installation et qui egale a <span style='color:green;'>" + puiss_com_val + " KVA </span > ,<span style='color:red;'> un budget limité de 640 dt </span> , la simplicité d'installation <span style='color:green'>2 cable entree (phase et neutre) et <span style='color:blue'> 2 cable sortie (phase et neutre) </span> </span> , une consommation électrique peu élevée, l'utilisation d'appareils monophasés et la possibilité d'évoluer à l'avenir <span style='color:red'>s'il depase la limite de courant ( I = 40 ampere ) </span>.";
}
else if(puiss_com_val > 4.4 && puiss_com_val <= 6.6){
    console.log('c30')
    document.getElementById('img-compteurs').style.display = 'none';
    document.getElementById('img-compteur').style.display = 'block';
    document.getElementById('img-compteur').innerHTML = '<img src="./compteur/c30.webp" alt="compteur c30" style="height: 80vh; width:40vw; border-radius:5px; object-fit:cover;">'
    
    document.getElementById('justification-a-copie').innerHTML = "Le choix de <span style='color:red' >compteur électrique monophasé <b>C30</b></span> est justifié par la puissance de l'installation et qui egale a <span style='color:green;'>" + puiss_com_val + " KVA </span > ,<span style='color:red;'> un budget limité de 790 dt </span> , la simplicité d'installation <span style='color:green'>2 cable entree (phase et neutre) et <span style='color:blue'> 2 cable sortie (phase et neutre) </span> </span> , une consommation électrique peu élevée, l'utilisation d'appareils monophasés et la possibilité d'évoluer à l'avenir <span style='color:red'>s'il depase la limite de courant ( I = 50 ampere ) </span>.";
}
else if(puiss_com_val > 6.6 && puiss_com_val <= 8.8){
    console.log('c40')
    document.getElementById('img-compteurs').style.display = 'none';
    document.getElementById('img-compteur').style.display = 'block';
    document.getElementById('img-compteur').innerHTML = '<img src="./compteur/c40.webp" alt="compteur c40" style="height: 80vh; width:40vw; border-radius:5px; object-fit:cover;">'
    
    document.getElementById('justification-a-copie').innerHTML = "Le choix de <span style='color:red' >compteur électrique monophasé <b>C40</b></span> est justifié par la puissance de l'installation et qui egale a <span style='color:green;'>" + puiss_com_val + " KVA </span > ,<span style='color:red;'> un budget limité de 1040 dt </span> , la simplicité d'installation <span style='color:green'>2 cable entree (phase et neutre) et <span style='color:blue'> 2 cable sortie (phase et neutre) </span> </span> , une consommation électrique peu élevée, l'utilisation d'appareils monophasés et la possibilité d'évoluer à l'avenir <span style='color:red'>s'il depase la limite de courant ( I = 60 ampere ) </span>.";
}
else if(puiss_com_val > 8.8 && puiss_com_val <= 11){
    console.log('c50')
    document.getElementById('img-compteurs').style.display = 'none';
    document.getElementById('img-compteur').style.display = 'block';
    document.getElementById('img-compteur').innerHTML = '<img src="./compteur/c50.jpg" alt="compteur c50" style="height: 80vh; width:40vw; border-radius:5px; object-fit:cover;">'
    
    document.getElementById('justification-a-copie').innerHTML = "Le choix de <span style='color:red' >compteur électrique monophasé <b>C50</b></span> est justifié par la puissance de l'installation et qui egale a <span style='color:green;'>" + puiss_com_val + " KVA </span > ,<span style='color:red;'> un budget limité de 1300 dt </span> , la simplicité d'installation <span style='color:green'>2 cable entree (phase et neutre) et <span style='color:blue'> 2 cable sortie (phase et neutre) </span> </span> , une consommation électrique peu élevée, l'utilisation d'appareils monophasés et la possibilité d'évoluer à l'avenir <span style='color:red'>s'il depase la limite de courant ( I = 80 ampere ) </span>.";
}
else if(puiss_com_val > 11 && puiss_com_val <= 13.2){
    console.log('c60')
    document.getElementById('img-compteurs').style.display = 'none';
    document.getElementById('img-compteur').style.display = 'block';
    document.getElementById('img-compteur').innerHTML = '<img src="./compteur/c60.jpg" alt="compteur c60" style="height: 80vh; width:40vw; border-radius:5px; object-fit:cover;">'
    document.getElementById('justification-a-copie').innerHTML = "Le choix de <span style='color:red' >compteur électrique monophasé <b>C60</b></span> est justifié par la puissance de l'installation et qui egale a <span style='color:green;'>" + puiss_com_val + " KVA </span > ,<span style='color:red;'> un budget limité de 1620 dt </span> , la simplicité d'installation <span style='color:green'>2 cable entree (phase et neutre) et <span style='color:blue'> 2 cable sortie (phase et neutre) </span> </span> , une consommation électrique peu élevée, l'utilisation d'appareils monophasés et la possibilité d'évoluer à l'avenir <span style='color:red'>s'il depase la limite de courant ( I = 100 ampere ) </span>.";
    
}


})
