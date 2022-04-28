let formulario = document.getElementById("formulario");

formulario.addEventListener("submit",subirFormuario =(e)=>{
    e.preventDefault();
    let nombre = e.target.nombre.value;
    let comentario = e.target.comentario.value;
    console.log(nombre,comentario);
    // mostrarComentario(nombre, comentario);
} )


// function mostrarComentario(e,nombre, comentario){
//     const divContenedor = document.getElementsByClassName("mosComen");

//     const nom = document.createElement("p");
//     nom.className = "mosNombre";
//     nom.textContent = nombre;
    
//     const com = document.createElement("p");
//     com.className = "mosComentario";
//     com.textContent = comentario;

//     document.divContenedor.append(nom);
//     document.divContenedor.append(com)
    
// }