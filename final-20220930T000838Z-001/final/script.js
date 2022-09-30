let correo, contraseña
let formulario = document.getElementById('form')

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    LeerDatos()
})

function LeerData(correo, contraseña){
    nombre = document.getElementById('correo').value
    nombre = document.getElementById('contraseña').value

    ValidarDatos(correo, contraseña)
}

function ValidarData(correo,contraseña){
    if(correo.length==0 || contraseña.length==0) {
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
          });
    }

    else{
        swal("Your imaginary file is safe!");
    }
    guardarLocalStorage(correo,contraseña)
}

function guardarLocalStorage(correo, contraseña){
    localStorage.setItem('correo',correo);
    localStorage.setItem('contraseña',contraseña);
}


