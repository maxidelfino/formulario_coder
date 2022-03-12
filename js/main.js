let condition = prompt(`¿Que acción desea realizar?

    1: Ingresar nuevo usuario
    0: Salir
    (Recuerde el núemro de usuario asignado, este le servirá en un futuro)`
);

const usuarios = [];
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
        i++
    }

    else if (condition == 2) {
        if (usuarios.length < 1) {
            confirm("No hay usuarios")
            prompt(`¿Que acción desea realizar?

                1: Ingresar nuevo usuario
                0: Salir
                (Recuerde el núemro de usuario asignado, este le servirá en un futuro)`
            );
            
        }
        let userPointer = prompt(`Ingrese numero de usuario que desea ver`);
        while (userPointer > usuarios.length) {
            userPointer = prompt(`Ingrese numero de usuario valido`);
        }
        console.log(usuarios[i]);
        alert(`
        Nombre: ${usuarios[(userPointer - 1)].nombre}
        Email: ${usuarios[(userPointer - 1)].email}
        Consulta: ${usuarios[(userPointer - 1)].consulta}`);
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
