const rudimentService = {
  base: import.meta.env.VITE_API_URL,
  endpoint: 'rudiment',

  async get(id) {
    const url = new URL(this.endpoint + '/' + id, this.base)
    console.log(url.toString())
    const res = await fetch(url.toString())
    const data = await res.json()
    return data
  }
}

export default rudimentService
