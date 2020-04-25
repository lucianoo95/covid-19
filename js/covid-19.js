class Covid_19 {

  constructor() {
    this.url = `https://api.thevirustracker.com/free-api?`;
  }

  async getALlStats() {
    const result = await fetch(`${this.url}global=stats`);
    const dataStats = await result.json();

    return dataStats.results[0];
  }




}