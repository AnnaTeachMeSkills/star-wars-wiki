export default class SwapiService {

  _baseUrl = 'https://swapi.dev/api';

    async getData  (url)  {
        const response = await fetch(`${this._baseUrl}${url}`);

        if(!response.ok){
            throw new Error(`we have a problem with fetch ${url}`);
        }

        return await response.json();
    }

    getAllPeople = async  () => {
        const responce = await this.getData('/people/');
        return responce.results.map((this.transformPerson));
    }

    
    getPerson = async (id) => {
        const person = await this.getData(`/people/${id}/`)
        return this.transformPerson(person);
    }

    getAllPlanet = async () => {
            const responce = await this.getData('/planets/');
            return responce.results.map(this.transformPlanet);
    }

    getPlanet = async (id) => {
        const planet = await this.getData(`/planets/${id}/`);
        return this.transformPlanet(planet);
    }

    getAllStarships = async  () => {
        const responce = await this.getData('/starships/');
        return responce.results.map(this.transformStarships);
    }

    getStarship= async (id) => {
        const starships = await this.getData(`/starships/${id}/`);
        return this.transformStarships(starships);
    }

    getId (item) {
        return item.url.match(/\/([0-9]*)\/$/)[1];
    }

    transformPlanet = (planet) => {

        return {
            id: this.getId(planet),
            name: planet.name,
            diameter: planet.diameter,
            population: planet.population,
            gravity: planet.gravity,
            climate: planet.climate,
            rotationPeriod: planet.rotation_period,

        }
    }
    
    transformPerson = (person) => {

        return ({
            id: this.getId(person),
            name: person.name,
            gender: person.gender,
            mass: person.mass,
            birthDate: person.birth_year,
            hairColor: person.hair_color,
            height: person.height,
            skinColor: person.skin_color,
        })
    }


    transformStarships = (starships) => {

        return {
            id: this.getId(starships),
            name: starships.name,
            model: starships.model,
            manufacturer: starships.manufacturer,
            length: starships.length,
            maxSpeed: starships.max_atmosphering_speed,
            passengers: starships.passengers,
            consumables: starships.consumables,
            crew: starships.crew,
        }
    }



}





