// comprobar usuario y pass login
function comprobarContraseña() {
    var usuario = document.getElementById("usuario").value;
    var pass = document.getElementById("password").value;

    if (usuario === pass) {
        // Si los textos son iguales, envia a producto.html
        window.location.href = "/paginasPrivadas/paginaUsuario.html";
    } else {
        // Si los textos no son iguales, muestra alerta
        document.getElementById("formLogin").reset();
        alert("Usuario y/o clave Incorrecta");


    }
}

// Guardar y mostrar datos de contactos de familiares
function guardarContactoFamilia() {
    var listContactos = [];
    var objContacto = {};

    // recuperar variables del formulario para crear contacto
    let nombre = document.getElementById("nombreCompletoContacto").value;
    let telefono = document.getElementById("numTelContacto").value;
    let email = document.getElementById("emailContacto").value;
    let direccion = document.getElementById("direccionContacto").value;
    let parentesco = document.getElementById("parentescoContacto").value;

    // se añade a la lista de objContacto el contacto que se guarda del formulario
    objContacto = {
      nombre: nombre,
      telefono: telefono,
      email: email,
      direccion: direccion,
      parentesco: parentesco
    };
    listContactos.push(objContacto);

    // Llamar a la función para generar y mostrar los elementos .card
    mostrarContactos(listContactos);

    // Vaciar los valores de los campos del formulario
    document.getElementById("nombreCompletoContacto").value = "";
    document.getElementById("numTelContacto").value = "";
    document.getElementById("emailContacto").value = "";
    document.getElementById("direccionContacto").value = "";
    document.getElementById("parentescoContacto").value = "";
  }

  function mostrarContactos(contactos) {
    var listaContactosElement = document.getElementById("listaContactos");


    // Iterar sobre la lista de contactos
    for (var i = 0; i < contactos.length; i++) {
      var contacto = contactos[i];

      // Crear elementos HTML para mostrar el contacto

      var divColElement = document.createElement("div");
      divColElement.classList.add("col-lg-4", "mb-4");

      var divCarElement = document.createElement("div");
      divCarElement.classList.add("card", "h-100");

      var divCarBody = document.createElement("div");
      divCarBody.classList.add("card-body");

      var tituloCard = document.createElement("h5");
      tituloCard.classList.add("card-title", "mb-4", "border-bottom");
      tituloCard.textContent = contacto.nombre;

      var divCarText = document.createElement("div");
      divCarText.classList.add("card-text");

      var telContacto = document.createElement("p");
      telContacto.textContent = "Teléfono: " + contacto.telefono;

      var emailContacto = document.createElement("p");
      emailContacto.textContent ="Email: " + contacto.email;

      var direcContacto = document.createElement("p");
      direcContacto.textContent ="Dirección: " + contacto.direccion;

      var parentContacto = document.createElement("p");
      parentContacto.textContent ="Parentesco: " + contacto.parentesco;

      divCarText.appendChild(telContacto)
      divCarText.appendChild(emailContacto)
      divCarText.appendChild(direcContacto)
      divCarText.appendChild(parentContacto)
      divCarBody.appendChild(tituloCard)
      divCarBody.appendChild(divCarText)
      divCarElement.appendChild(divCarBody)
      divColElement.appendChild(divCarElement)

      listaContactosElement.appendChild(divColElement)

    }
  }

// Guardar y mostrar datos de enfermedades
function guardarEnfermedad() {
  var listEnfermedades = [];
  var objEnfermedad = {};

  // recuperar variables del formulario para crear contacto
  let medicoTratante = document.getElementById("medicoEnferm").value;
  let fechaConsulta = document.getElementById("fechaConsulta").value;
  let diagnosticoEnfer = document.getElementById("diagnosticoEnfer").value;
  let tratamiento = document.getElementById("tratamientoEnfer").value;
  let fechaTratamiendo = document.getElementById("fechaTratamientoEnfer").value;

  // se añade a la lista de objEnfermedad el contacto que se guarda del formulario
  objEnfermedad = {
    medicoTratante: medicoTratante,
    fechaConsulta: fechaConsulta,
    diagnostico: diagnosticoEnfer,
    tratamiento: tratamiento,
    fechaTratamiendo: fechaTratamiendo
  };
  listEnfermedades.push(objEnfermedad);

  // Llamar a la función para generar y mostrar los elementos .card
  mostrarEnfermedades(listEnfermedades);

  // Vaciar los valores de los campos del formulario
  document.getElementById("medicoEnferm").value = "";
  document.getElementById("fechaConsulta").value = "";
  document.getElementById("diagnosticoEnfer").value = "";
  document.getElementById("tratamientoEnfer").value = "";
  document.getElementById("fechaTratamientoEnfer").value = "";
}

function mostrarEnfermedades(enfermedades) {
  var listaenfermedadesElement = document.getElementById("listaenfermedades");


  // Iterar sobre la lista de enfermedades
  for (var i = 0; i < enfermedades.length; i++) {
    var enfermedad = enfermedades[i];

    // Crear elementos HTML para mostrar la enfermedad
    var divColElement = document.createElement("div");
      divColElement.classList.add("col-lg-4", "mb-4");

      var divCarElement = document.createElement("div");
      divCarElement.classList.add("card", "h-100");

      var divCarBody = document.createElement("div");
      divCarBody.classList.add("card-body");

      var tituloCard = document.createElement("h5");
      tituloCard.classList.add("card-title", "mb-4", "border-bottom");
      tituloCard.textContent = enfermedad.diagnostico;

      var divCarText = document.createElement("div");
      divCarText.classList.add("card-text");

      var medicoTratante = document.createElement("p");
      medicoTratante.textContent = "Médico Tratante: " + enfermedad.medicoTratante;

      var fechaConsulta = document.createElement("p");
      fechaConsulta.textContent ="Fecha Consulta: " + enfermedad.fechaConsulta;

      var tratamiento = document.createElement("p");
      tratamiento.textContent ="Tratamiento: " + enfermedad.tratamiento;

      var fechaTratamiendo = document.createElement("p");
      fechaTratamiendo.textContent ="Fecha Tratamiento: " + enfermedad.fechaTratamiendo;

      divCarText.appendChild(medicoTratante)
      divCarText.appendChild(fechaConsulta)
      divCarText.appendChild(tratamiento)
      divCarText.appendChild(fechaTratamiendo)
      divCarBody.appendChild(tituloCard)
      divCarBody.appendChild(divCarText)
      divCarElement.appendChild(divCarBody)
      divColElement.appendChild(divCarElement)

      listaenfermedadesElement.appendChild(divColElement)
  }
}



//LOGICA NUEVA RODRIGO DE AQUI HASTA EL FINAL
// Verificar la URL actual
const currentPage = window.location.pathname;


if (currentPage.includes('examen1.html')) {
 // Extraer datos de la tabla1
 const componentesTabla1 = document.querySelectorAll('table:nth-of-type(1) tbody tr');
 const labels1 = [];
 const resultados1 = [];

 componentesTabla1.forEach((componente, index) => {
   if (index < 2) {
     const label = componente.querySelector('td:nth-child(1)').innerText;
     const resultado = parseFloat(componente.querySelector('td:nth-child(2)').innerText);
   
     labels1.push(label);
     resultados1.push(resultado);
   }
 });

 // Crear el gráfico de barras1
 const ctx1 = document.getElementById('barChart').getContext('2d');
 new Chart(ctx1, {
   type: 'bar',
   data: {
     labels: labels1,
     datasets: [{
       label: 'Resultado',
       data: resultados1,
       backgroundColor: 'red',
       borderColor: 'black',
       borderWidth: 4
     }]
   },
   options: {
     plugins: {
       title: {
         display: true,
         text: 'Recuento (x10^9/L)', // Texto de la leyenda del eje Y
         position: 'left'
       }
     },
     scales: {
       y: {
         beginAtZero: true
       }
     }
   }
 });
}


if (currentPage.includes('examen2.html')) {

 // Extraer datos de la tabla2
 const componentesTabla2 = document.querySelectorAll('table tbody tr');
 const labels2 = [];
 const resultados2 = [];

 componentesTabla2.forEach((componente2) => {
   const label = componente2.querySelector('td:nth-child(1)').innerText;
   const resultado = parseFloat(componente2.querySelector('td:nth-child(2)').innerText);
 
   labels2.push(label);
   resultados2.push(resultado);
 });

 // Crear el gráfico de barras2
 const ctx2 = document.getElementById('barChart2').getContext('2d');
 new Chart(ctx2, {
   type: 'bar',
   data: {
     labels: labels2,
     datasets: [{
       label: 'Resultado',
       data: resultados2,
       backgroundColor: 'yellow',
       borderColor: 'black',
       borderWidth: 4
     }]
   },
   options: {
     plugins: {
       title: {
         display: true,
         text: 'Concentración (mg/dL)', // Texto de la leyenda del eje Y
         position: 'left'
       }
     },
     scales: {
       y: {
         beginAtZero: true
       }
     }
   }
 });
}

if (currentPage.includes('examen3.html')) {

  // Obtener los datos de la segunda columna de colesterol total de la tabla
  var table3 = document.querySelector('.table');
  var cholesterolData3 = [];

  for (var i = 1; i < table3.rows.length; i++) {
    var row = table3.rows[i];
    var cholesterol = parseInt(row.cells[1].textContent);
    cholesterolData3.push(cholesterol);
  }

  // Crear el gráfico de línea utilizando Chart.js
  var ctx3 = document.getElementById('chart3').getContext('2d');
  new Chart(ctx3, {
    type: 'line',
    data: {
      labels: ['01/01/2023', '21/03/2023', '15/05/2023'], // Agrega aquí las fechas correspondientes
      datasets: [{
        label: 'Colesterol Total',
        data: cholesterolData3,
        backgroundColor: 'yellow',
        borderColor: 'red',
        borderWidth: 3,
        pointRadius: 6,
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Concentración (mg/dL)', // Texto de la leyenda del eje Y
          position: 'left'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 250
        }
      }
    }
  });

 }

 if (currentPage.includes('examen5.html')) {

  // Obtener los datos de la segunda columna de pH de la tabla
  var table5 = document.querySelector('.table');
  var orinaData5 = [];

  for (var i = 1; i < table5.rows.length; i++) {
    var row = table5.rows[i];
    var orina = parseFloat(row.cells[1].textContent);
    orinaData5.push(orina);
  }

  // Crear el gráfico de línea utilizando Chart.js
  var ctx5 = document.getElementById('chart5').getContext('2d');
  new Chart(ctx5, {
    type: 'line',
    data: {
      labels: ['01/01/2023', '02/01/2023', '03/01/2023'], // Agrega aquí las fechas correspondientes
      datasets: [{
        label: 'pH de orina',
        data: orinaData5,
        backgroundColor: 'yellow',
        borderColor: 'red',
        borderWidth: 3,
        pointRadius: 6,
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'pH de orina', // Texto de la leyenda del eje Y
          position: 'left'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 14
        }
      }
    }
  });
}
