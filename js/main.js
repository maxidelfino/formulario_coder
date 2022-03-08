let condition = prompt(`¿Que acción desea realizar?
    1: Ingresar nuevo usuario
    0: Salir`
);
let usuarios = [];
let i = 0;
while(condition != 0) {
    if (condition == 1) {
        
        usuarios[i] = {
            nombre: prompt(`Ingrese nombre del usuario ${i + 1}`),
            consulta: prompt(`Detalle su consulta`),
        };
        console.log(usuarios[i]);
        i++
    }
    condition = prompt(`¿Que acción desea realizar?
        1: Ingresar nuevo usuario
        0: Salir`
        );
}