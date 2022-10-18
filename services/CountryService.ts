export default class CountryService {
<<<<<<< HEAD
  getCountries() {
    return fetch('/data/countries.json').then(res => res.json()).then(d => d.data);
=======
  getCountries () {
    return fetch('/data/countries.json').then(res => res.json()).then(d => d.data)
>>>>>>> 2d5dea2 (Initial commit)
  }
}
