export default class SwapiService {

  _baseUrl = 'https://swapi.dev/api';

    async getData (url) {
        const response = await fetch(`${this._baseUrl}${url}`);

        if(!response.ok){
            throw new Error(`we have a problem with fetch ${url}`);
        }

        return await response.json();
    }

    async getAllPeople() {
        const responce = await this.getData('/people/');
        return responce.results.map(this.transformPerson);
    }

    async getPerson(id) {
        const person = await this.getData(`/people/${id}/`)
        return this.transformPerson(person);
    }

    async getPlanet(id) {
        const planet = await this.getData(`/planets/${id}/`);
        return this.transformPlanet(planet);
    }

    getId(item) {
        return item.url.match(/\/([0-9]*)\/$/)[1];
    }

    transformPlanet(planet) {

        return {
            id: this.getId(planet),
            name: planet.name,
            diameter: planet.diameter,
            population: planet.population,
            gravity: planet.gravity,
        }
    }
    
    transformPerson = (person) => {

        return {
            id: this.getId(person),
            name: person.name,
            gender: person.gender,
            mass: person.mass,
            birthDate: person.birth_year,
        }
    }
}



