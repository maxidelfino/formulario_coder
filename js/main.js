let condition = prompt(`¿Que acción desea realizar?
    1: Ingresar nuevo usuario
    0: Salir
    
    (Recuerde el núemro de usuario asignado, este le servirá en un futuro)`
);
let usuarios = [];
let i = 0;
while (condition != 0) {
    if (condition == 1) {
        usuarios[i] = {
            nombre: prompt(`Ingrese nombre del usuario ${i + 1}`),
            consulta: prompt(`Detalle su consulta`),
        };
       
        let isValidEmail = false;
        let email = prompt("Ingrese el email del usuario");
        while (isValidEmail === false) {
            if (email.toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )) {
                usuarios[i].email = email;
                isValidEmail = true;
            } else {
                email = prompt("Ingrese un mail valido");
            }
        }
        // let comparaNombre = usuarios[i].nombre;
        // console.log (usuarios.indexOf(comparaNombre));
        i++
    }

    else if (condition == 2) {
        let verUsuario = prompt(`Ingrese numero de usuario que desea ver`);
        
        alert(`
        Nombre: ${usuarios[(verUsuario - 1)].nombre}
        Email: ${usuarios[(verUsuario - 1)].email}
        Consulta: ${usuarios[(verUsuario - 1)].consulta}`)
    }

    else if (condition == 3) {
        borrarUsuario = prompt(`¿Que usuario desea eliminar?
        (Ingrese número de usuario a eliminar)`);
        usuarios.splice(usuarios[(borrarUsuario - 1), 1])
    }

    condition = prompt(`¿Que acción desea realizar?
        1: Ingresar nuevo usuario
        2: Ver información de usuario
        3: Borrar información de un usuario determinado
        0: Salir
        
        (Recuerde el núemro de usuario asignado, este le servirá en un futuro)`
    );
}
