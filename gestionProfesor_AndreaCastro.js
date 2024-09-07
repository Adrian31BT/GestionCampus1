let profesores=[];
crearProfesor=function(){
    let nombre=recuperarTexto("txtNombre")
    let edad=recuperarInt("txtEdad");
    let email=recuperarTexto("txtEmail")
    let profesor={};
    profesor.nombre=nombre;
    profesor.edad=edad;
    profesor.gmail=email;
    return profesor;
}
agregarProfesor=function(){
    let profesor=crearProfesor();
    profesores.push(profesor);
    console.log(profesores);
}
refrescarProfesor=function(){
    let cmpTabla=document.getElementById("lblTabla");
    let contenido="<table id=\"Tabla\"><tr>"+
    "<th>NOMBRE</th>"+
    "<th>EDAD</th>"+
    "<th>GMAIL</th>"+
    "</tr>"
    let elemento;
    for(let i=0;i<profesores.length;i++){
        elemento=profesores[i];
        contenido+=
        "<tr><td>"+elemento.nombre+"</td>"+
        "<td>"+elemento.edad+"</td>"+
        "<td>"+elemento.gmail+"</td>"+
        "</tr>"
    }
    contenido+="</table>"
    cmpTabla.innerHTML=contenido;
}

buscarProfesor=function(nombre){
    let elemento;
    let encontrado=false
    for(let i=0;i<profesores.length;i++){
        elemento=profesores[i];
        if(elemento.nombre+elemento.edad==nombre){
                alert("PROFESOR ENCONTRADO")
                encontrado=true; 

        }
    }
    if(encontrado==false){
        alert("PROFESOR NO ENCONTRADO");
    }
}
ejecutarProfesor=function(){
    let nombre=recuperarTexto("txtBuscar")
    buscarProfesor(nombre);
    mostrarTextoEnCaja("txtNombre","")
    mostrarTextoEnCaja("txtEdad","");
    mostrarTextoEnCaja("txtEmail","")
}