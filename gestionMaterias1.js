
let aulas=[
    {materia:"MATE" , horario:"LUNES",capacidad:10},
    { materia:"LENGUA" , horario:"MIERCOLES",capacidad:6}
]

function crearAula(){
let aula=recuperarTexto("txtNumeroAulas")
let aula1=recuperarTexto("txtHorario")
let aula2=recuperarTexto("txtCapacidadMáxima")

 

if(aula.length<3){
  mostraraTexto("lblaula","minnimo 3 letras")
  
}else
if(aula1.length<3){
  mostraraTexto("lblhorario","MINIMO 3 LETRS")
}else if(aula2<0 || aula2>100 || isNaN(aula2)){
    mostraraTexto("lblcapacidad","del 0 al 100 ")
}else{
    
   let nuevaMateria={}
   nuevaMateria.horario=aula
   nuevaMateria.materia=aula1
   nuevaMateria.capacidad=aula2
   aulas.push(nuevaMateria)
   console.log(nuevaMateria)
}
mostrarTabla()
}


function mostrarTabla(){
 let tabla1=document.getElementById("tabla")
 let tabla2="<table><tr>"+"<th>MATERIA</th>"+"<th>HORARIO</th>"+"<th>Capacidad</th>"+"</tr>"
 let nuevaMateria
 for(let i=0;i<aulas.length;i++){
      nuevaMateria=aulas[i]
     tabla2+="<tr>"+"<td>"+nuevaMateria.materia+"</td>"+"<td>"+nuevaMateria.horario+"</td>"+"<td>"+nuevaMateria.capacidad+"</td>"+"</tr>"
 }
 tabla2+="</table>"
 tabla1.innerHTML=tabla2
 
}


function buscarAula(){
    let encontrarAula=aulas[0]
    let aula
    for(let i=0;i<aulas.length;i++){
   aula=aulas[i]
   if(encontrarAula.materia<aula.capacidad){
       encontrarAula=aula
   }
    }
return encontrarAula
}



function determinarAula(){
    let encontrarAula=buscarAula()
    alert("aula encontrada")
    alert("MATERIA:"+encontrarAula.materia+"\nCAPACIDAD:"+encontrarAula.capacidad)
}





function eliminarAula() {
    let idAula = recuperarTexto("txtEliminar");
    if (!idAula) {
        alert("Por favor, ingrese el identificador del aula a eliminar.");
        return;
    }
    let indiceAula = aulas.findIndex(aula => aula.materia === idAula || aula.horario === idAula);
    if (indiceAula !== -1) {
        aulas.splice(indiceAula, 1);
        console.log("Aula eliminada:", idAula);
    } else {
        alert("Aula no encontrada.");
    }
    mostrarTabla();
}




