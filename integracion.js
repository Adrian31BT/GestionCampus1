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