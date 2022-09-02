const todas = document.getElementById("all");
const listaPendientes = document.getElementById("pending");
const listaCompletadas = document.getElementById("completed");

let pendientes = [];
let completadas = [];

const tareas = [
    {
        nombre: "Sacar las perritas",
        estado: false
    },
    {
        nombre: "Preparar clase de la electiva",
        estado: false
    },
    {
        nombre: "Tarea de web",
        estado: false
    },
    {
        nombre: "Comprar alimentos de la semana",
        estado: false
    },
    {
        nombre: "Sacar dinero",
        estado: false
    },
    {
        nombre: "Pagar plan de datos",
        estado: false
    },
    {
        nombre: "Hacer envío de dineros",
        estado: false
    },
    {
        nombre: "Presentación de arte y tecnología",
        estado: false
    },
    {
        nombre: "Lectura de electiva",
        estado: false
    }
]


let dato;
let c = '';

tareas.forEach(element => {
    c += `<li class = "todas">${element.nombre}</li>`;
});

todas.innerHTML = `<ul>
${c}
</ul>`;

const listaElementos = document.getElementsByClassName('todas');

for(let i = 0; i < listaElementos.length; i++) {
    listaElementos[i].addEventListener("click", () => {
        pendientes = [];
        completadas = [];
        if (listaElementos[i].className === "pendientes") {
            listaElementos[i].className = "completadas"
            dato = listaElementos[i].innerHTML;
        } else {
            listaElementos[i].className = "pendientes"
            dato = listaElementos[i].innerHTML;
        }
        todas.forEach(element => {
            if (dato === element.nombre){
                element.estado = !element.estado
            }
            if(!element.estado){
                pendientes.push(element);
            } else {
                completados.push(element);
            }
        })

        pintarListas();
    })
}

function pintarListas() {

    let pintarCompletadas = '';
    let pintarPendientes = '';

    pendientes.forEach(element => {
        pintarPendientes += `<li class = "pendientes">${element.nombre}</li>`
    });

    completadas.forEach(element => {
        pintarCompletadas += `<li class = "completadas">${element.nombre}</li>`
    });

    listaCompletadas.innerHTML = `<ul>
    ${pintarCompletadas}
    </ul>`;

    listaPendientes.innerHTML = `<ul>
    ${pintarPendientes}
    </ul>`;
}



