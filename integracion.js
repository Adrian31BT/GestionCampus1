let materias =[
    
]
mostrarPaginaMaterias=function(){

    mostrarComponente("divMaterias");
    ocultarComponente("divGestionEstudiante");
    ocultarComponente("divGestionAulas");
    ocultarComponente("divGestionProfesores")

}
mostrarPaginaProfesores=function(){
    mostrarComponente("divGestionProfesores");
    ocultarComponente("divMaterias");
    ocultarComponente("divGestionAulas");
    ocultarComponente("divGestionEstudiante")

}

mostrarPaginaAulas=function(){
    mostrarComponente("divGestionAulas");
    ocultarComponente("divMaterias");
    ocultarComponente("divGestionEstudiante");
    ocultarComponente("divGestionProfesores")

}

mostrarPaginaEstudiantes=function(){
    mostrarComponente("divGestionEstudiante");
    ocultarComponente("divMaterias");
    ocultarComponente("divGestionAulas");
    ocultarComponente("divGestionProfesores")
}

crearMateria=function(
){
    let materia={}
    let nombreMateria=recuperarTexto("txtNombreMaterias")
    let codigo=recuperarTexto("txtCodigo")
    let descripcion=recuperarTexto("txtDescripcion")
    materia.nombreMateria=nombreMateria
    materia.codigo=codigo
    materia.descripcion=descripcion
    return materia
}

agregarMateria=function(){
    materiaCreada=crearMateria()
    materias.push(materiaCreada)
    console.log(materiaCreada)
}



refrescarMaterias=function(){
    let cmpTabla=document.getElementById("tblMaterias")
    let contenidoTabla="<table><tr>"+
    "<th>NOMBRE</th>"+
    "<th>CODIGO</th>"+
    "<th>DESCRIPCION</th>"+
    "</tr>";
    let resultado
    for (let i=0;i<materias.length;i++){
        resultado=materias[i];
        contenidoTabla+=
        "<tr><td>"+resultado.nombreMateria
        +"</td><td>"+resultado.codigo
        +"</td><td>"+resultado.descripcion+"</td></tr>"
    } 
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;

    
}


buscarMateria=function(identificador){
    identificador=recuperarTexto("txtBuscar")    
    for (let i=0;i<materias.length;i++){
        resultado=materias[i];
        let codigo=resultado.codigo
        if(identificador==codigo){              
            alert("MATERIA ENCONTRADA")
            break}

        else{
            alert("MATERIA NO ENCONTRADA")
        }
    }
}


let estudiantes = [];

crearEstudiante = function(){
    let cmpNombre = recuperarTexto("txtNombre");
    let cmpCurso = recuperarTexto("txtCurso");
    let cmpMatricula = recuperarTexto("txtMatricula");
    let cmpIdEstudiante = recuperarTexto("txtIdEstudiante");

    let Estudiante = {
        id: cmpIdEstudiante,
        nombre: cmpNombre,
        curso: cmpCurso,
        matricula: cmpMatricula
    };

    return Estudiante;
}

agregarEstudiante = function(){
    let elementoEstudiante = crearEstudiante();
    estudiantes.push(elementoEstudiante);
    console.log(estudiantes);
}

refrescarEstudiante = function(){
    let cmpTabla = document.getElementById("tablaEstudiantes");
    let contenidoTabla = "<table><tr>"+
    "<th>ID</th>"+
    "<th>NOMBRE</th>"+
    "<th>CURSO</th>"+
    "<th>MATRICULA</th>"+
    "</tr>";
    let elementoEstudiante;
    for(let i=0; i<estudiantes.length; i++){
        elementoEstudiante = estudiantes[i];
        contenidoTabla+=
        "<tr><td>"+elementoEstudiante.id+"</td>"
        +"<td>"+elementoEstudiante.nombre+"</td>"
        +"<td>"+elementoEstudiante.curso+"</td>"
        +"<td>"+elementoEstudiante.matricula+"</td>"
        +"</td>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML = contenidoTabla;
}

buscarEstudante = function(){
    let cmpBuscarIdEstudiante = recuperarTexto("txtBuscar");
    let encontrado = false;
    for(let i=0; i<estudiantes.length; i++){
        if(estudiantes[i].id == cmpBuscarIdEstudiante){
            alert("Estudiante encontrado");
            encontrado = true;
            break;
        }
    }
    if(encontrado == false){
        alert("Estudiante no encontrado");
    }
}



//---------------------------------------------------------------------------------------------------------------

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


//--------------------------------------------------------------------------------------------------------------------




