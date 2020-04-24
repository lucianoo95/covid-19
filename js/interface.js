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
        console.log(data);
      })
  }

}