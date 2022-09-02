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
    c += `<li class = "elementos faltan">${element.nombre}</li>`;
});

todas.innerHTML = `<ul>
${c}
</ul>`;

const listaElementos = document.getElementsByClassName('elementos');

for(let i = 0; i < listaElementos.length; i++) {
    listaElementos[i].addEventListener("click", () => {
        pendientes = [];
        completadas = [];
        if (listaElementos[i].className === "elementos faltan") {
            listaElementos[i].className = "elementos hechos"
            dato = listaElementos[i].innerHTML;
        } else {
            listaElementos[i].className = "elementos faltan"
            dato = listaElementos[i].innerHTML;
        }
        tareas.forEach(element => {
            if (dato === element.nombre){
                element.estado = !element.estado
            }
            if(!element.estado){
                pendientes.push(element);
            } else {
                completadas.push(element);
            }
        })

        pintarListas();
    })
}

function pintarListas() {

    let pintarCompletadas = '';
    let pintarPendientes = '';

    pendientes.forEach(element => {
        pintarPendientes += `<li class = "elementos faltan">${element.nombre}</li>`
    });

    completadas.forEach(element => {
        pintarCompletadas += `<li class = "elementos hechos">${element.nombre}</li>`
    });

    listaCompletadas.innerHTML = `<ul>
    ${pintarCompletadas}
    </ul>`;

    listaPendientes.innerHTML = `<ul>
    ${pintarPendientes}
    </ul>`;
}



