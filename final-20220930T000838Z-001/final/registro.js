let nombre, correo,coCon, contraseña, numero

let form = document.getElementById('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    LeerDatos()
})

function LeerData(nombre, correo, contraseña, coCon, numero){
    nombre = document.getElementById('nombre').value
    nombre = document.getElementById('correo').value
    nombre = document.getElementById('contraseña').value
    nombre = document.getElementById('coCon').value
    nombre = document.getElementById('numero').value

    ValidarDatos(nombre, correo, contraseña, coCon, numero)
}

function ValidarData(nombre,correo,contraseña,coCon,numero){
    if(nombre.length==0 || correo.length==0 || contraseña.length==0 || coCon.length==0 || numero.length==0) {
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
          });
    }

    else{
        swal("Your imaginary file is safe!");
    }
    guardarLocalStorage(nombre,correo,contraseña,coCon,numero)
}

function guardarLocalStorage(nombre, correo, contraseña, numero){
    localStorage.setItem('nombre',nombre);
    localStorage.setItem('correo',correo);
    localStorage.setItem('contraseña',contraseña);
    localStorage.setItem('numero',numero);
}



