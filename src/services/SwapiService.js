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
        return responce.results;
    }

    getPerson(id) {
        return this.getData(`/people/${id}/`);
    }
    
}

