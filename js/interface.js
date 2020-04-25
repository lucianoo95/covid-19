class Interface {

  constructor() {

    this.init();

  }

  init() {

    this.printInfo();
  }

  printInfo() {
    const infoStats = virusApi.getALlStats()
      .then(data => {
        //Seleccionar el thead de la tabla.
        const thead = document.querySelector('#thead');
        const tbody = document.querySelector('#tbody');
        const tr = document.createElement('tr');
        //Recorrer el objeto con estadisticas. 
        for (let stat of Object.entries(data)) {
          //Obtener los nombres y los valores de las estadisticas, excluyendo el objeto source
          if (!stat[0].startsWith('source')) {
            const name_stat = stat[0].split('_').reduce((a, b) => (a + ' ' + b).toUpperCase()).slice(6);
            const value_stat = stat[1];
            //Crear un th para cada nombre de la estadistica
            const th = document.createElement('th');
            th.innerHTML = `${name_stat}`;
            thead.appendChild(th);

            tr.innerHTML += `<td>${value_stat}</td>`;
          }

        }

        tbody.appendChild(tr);
      })
  }

}