let radiografia = [
    { hora: "11:00", especialista: "IGNACIO SCHULZ", paciente: "FRANCISCA ROJAS", rut: "9878782-1", prevision: "FONASA" },
    { hora: "11:30", especialista: "FEDERICO SUBERCASEAUX", paciente: "PAMELA ESTRADA", rut: "15345241-3", prevision: "ISAPRE" },
    { hora: "15:00", especialista: "FERNANDO WURTHZ", paciente: "ARMANDO LUNA", rut: "16445345-9", prevision: "ISAPRE" },
    { hora: "15:30", especialista: "ANA MARIA GODOY", paciente: "MANUEL GODOY", rut: "17666419-0", prevision: "FONASA" },
    { hora: "16:00", especialista: "PATRICIA SUAZO", paciente: "RAMON ULLOA", rut: "14989389-K", prevision: "FONASA" }
];

let traumatologia = [
    { Hora: "8:30", especialista: "MARIA PAZ ALTUZARRA", paciente: "PAULA SANCHEZ", rut: "15554774-5", prevision: "FONASA" },
    { Hora: "10:00", especialista: "RAUL ARAYA", paciente: "ANGÉLICA NAVAS", rut: "15444147-9", prevision: "ISAPRE" },
    { Hora: "10:30", especialista: "MARIA ARRIAGADA", paciente: "ANA KLAPP", rut: "17879423-9", prevision: "ISAPRE" },
    { Hora: "11:00", especialista: "ALEJANDRO BADILLA", paciente: "FELIPE MARDONES", rut: "1547423-6", prevision: "ISAPRE" },
    { Hora: "11:30", especialista: "CECILIA BUDNIK", paciente: "DIEGO MARRE", rut: "16554741-K", prevision: "FONASA" },
    { Hora: "12:00", especialista: "ARTURO CAVAGNARO", paciente: "CECILIA MENDEZ", rut: "9747535-8", prevision: "ISAPRE" },
    { Hora: "12:30", especialista: "ANDRES KANACRI", paciente: "MARCIAL SUAZO", rut: "11254785-5", prevision: "ISAPRE" }
];

let dental = [
    { Hora: "8:30", especialista: "ANDREA ZUÑIGA", paciente: "MARCELA RETAMAL", rut: "11123425-6", prevision: "ISAPRE" },
    { Hora: "11:00", especialista: "MARIA PIA ZAÑARTU", paciente: "ANGEL MUÑOZ", rut: "9878789-2", prevision: "ISAPRE" },
    { Hora: "11:30", especialista: "SCARLETT WITTING", paciente: "MARIO KAST", rut: "7998789-5", prevision: "FONASA" },
    { Hora: "13:00", especialista: "FRANCISCO VON TEUBER", paciente: "KARIN FERNANDEZ", rut: "18887662-K", prevision: "FONASA" },
    { Hora: "13:30", especialista: "EDUARDO VIÑUELA", paciente: "HUGO SANCHEZ", rut: "17665461-4", prevision: "FONASA" },
    { Hora: "14:00", especialista: "RAQUEL VILLASECA", paciente: "ANA SEPULVEDA", rut: "14441281-0", prevision: "ISAPRE" }
];

// Mostrar primera y última atención
document.getElementById("radiografia").textContent = `Primera atención: ${radiografia[0].paciente} - ${radiografia[0].prevision} | Última atención: ${radiografia[radiografia.length - 1].paciente} - ${radiografia[radiografia.length - 1].prevision}`;
document.getElementById("traumatologia").textContent = `Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}`;
document.getElementById("dental").textContent = `Primera atención: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}`;

// Crear tablas
let tablaRadiografia = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr>";
radiografia.forEach(item => {
    tablaRadiografia += `<tr>
        <td>${item.hora}</td>
        <td>${item.especialista}</td>
        <td>${item.paciente}</td>
        <td>${item.rut}</td>
        <td>${item.prevision}</td>
    </tr>`;
});
document.getElementById("tablaRadiografia").innerHTML = tablaRadiografia;

let tablaTraumatologia = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr>";
traumatologia.forEach(item => {
    tablaTraumatologia += `<tr>
        <td>${item.Hora}</td>
        <td>${item.especialista}</td>
        <td>${item.paciente}</td>
        <td>${item.rut}</td>
        <td>${item.prevision}</td>
    </tr>`;
});
document.getElementById("tablaTraumatologia").innerHTML = tablaTraumatologia;

let tablaDental = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr>";
dental.forEach(item => {
    tablaDental += `<tr>
        <td>${item.Hora}</td>
        <td>${item.especialista}</td>
        <td>${item.paciente}</td>
        <td>${item.rut}</td>
        <td>${item.prevision}</td>
    </tr>`;
});
document.getElementById("tablaDental").innerHTML = tablaDental;

// Agregar horas a Traumatología
traumatologia.push(
    { Hora: "09:00", especialista: "RENÉ POBLETE", paciente: "ANA GELLONA", rut: "13123329-7", prevision: "ISAPRE" },
    { Hora: "09:30", especialista: "MARIA SOLAR", paciente: "RAMIRO ANDRADE", rut: "12221451-K", prevision: "FONASA" },
    { Hora: "10:00", especialista: "RAUL LOYOLA", paciente: "CARMEN ISLA", rut: "10112348-3", prevision: "ISAPRE" },
    { Hora: "10:30", especialista: "ANTONIO LARENAS", paciente: "PABLO LOAYZA", rut: "13453234-1", prevision: "ISAPRE" },
    { Hora: "12:00", especialista: "MATIAS ARAVENA", paciente: "SUSANA POBLETE", rut: "14345656-6", prevision: "FONASA" }
);

// Eliminar primer y último elemento del arreglo de Radiografía
radiografia.shift(); // Elimina el primer elemento
radiografia.pop();   // Elimina el último elemento

// Resultados en consola
console.log("Traumatología actualizada:", traumatologia);
console.log("Radiografía actualizada:", radiografia);

// 4. Imprimir un listado total de todos los pacientes que se atendieron en el centro médico.
function listarPacientes() {
    const todosPacientes = [
        ...radiografia.map(item => item.paciente),
        ...traumatologia.map(item => item.paciente),
        ...dental.map(item => item.paciente)
    ];

    const listadoDiv = document.createElement("div");
    todosPacientes.forEach(paciente => {
        const p = document.createElement("p");
        p.textContent = paciente;
        listadoDiv.appendChild(p);
    });
    document.body.appendChild(listadoDiv);
}

// 5. Filtrar pacientes de ISAPRE en Dental
function filtrarIsapreDental() {
    const isapreDental = dental.filter(item => item.prevision === "ISAPRE");
    const isapreDiv = document.createElement("div");
    isapreDental.forEach(item => {
        const p = document.createElement("p");
        p.textContent = `${item.paciente} - ${item.prevision}`;
        isapreDiv.appendChild(p);
    });
    document.body.appendChild(isapreDiv);
}

// 6. Filtrar pacientes de FONASA en Traumatología
function filtrarFonasaTraumatologia() {
    const fonasaTraumatologia = traumatologia.filter(item => item.prevision === "FONASA");
    const fonasaDiv = document.createElement("div");
    fonasaTraumatologia.forEach(item => {
        const p = document.createElement("p");
        p.textContent = `${item.paciente} - ${item.prevision}`;
        fonasaDiv.appendChild(p);
    });
    document.body.appendChild(fonasaDiv);
}

// Llamar a las funciones
listarPacientes();
filtrarIsapreDental();
filtrarFonasaTraumatologia();