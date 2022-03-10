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
            email: prompt(`Ingrese su email`),
            consulta: prompt(`Detalle su consulta`),
        };
        //console.log(usuarios[i]);
        i++
    } else if (condition == 2) {
        verUsuario = prompt(`Ingrese numero de usuario que desea ver`);
        console.log(usuarios[(verUsuario - 1)]);
    }
    condition = prompt(`¿Que acción desea realizar?
        1: Ingresar nuevo usuario
        2: Ver información de usuario
        0: Salir`
    );
}
