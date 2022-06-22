const fetch = require('node-fetch');
const constants = require('../common/Constants');
const { PeopleDTO } = require('../dtos/PeopleDTO');

/**
 * Servicio de personajes de Star Wars
 */
let peopleService = {
    /**
     * Devuelve todos los personajes de Star Wars registrados
     * @return {[any]}      Retorna un array de personajes
     */
    getAll: async function () {
        try {
            const response = await fetch(`${constants.SWAPI_BASE_URL}/people?format=${constants.SWAPI_FORMAT_JSON}`);
            if (response.ok) {
                const jsonResponse = await response.json();
                let { results } = jsonResponse;
                const people = results.map(p => new PeopleDTO(p));
                return people;
            }
            return Promise.reject(new Error('Ha fallado la llamada al SWAPI'));
        } catch (error) {
            return Promise.reject(error);
        }
    },
    /**
     * Guarda un registro de personaje de Star Wars
     * @param  {[any]} peopleSaveDTO Recibe un objeto de la clase PeopleSaveDTO
     * @return {[any]} Retorna el personaje registrado
     */
    save: async function (peopleSaveDTO) {
        throw new Error("Not implemented");
    }
}

module.exports = peopleService;