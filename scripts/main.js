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
