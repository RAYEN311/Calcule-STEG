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

var curr_page ;
var scrol_unit = window.screen.width
let nav_bo = Array.from(document.getElementsByClassName('nav_child'))
nav_bo.map(but =>{
    but.addEventListener('click',(e)=>{
       window.scrollTo(scrol_unit * e.target.id - scrol_unit , 0)
       console.log(e.target.id)  
    })
})
