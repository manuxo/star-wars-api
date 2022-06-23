const fetch = require('node-fetch');
const constants = require('../common/Constants');
const { PeopleDTO } = require('../dtos/PeopleDTO');
const peopleRepository = require('../repositories/PeopleRepository');

/**
 * Servicio de personajes de Star Wars
 */
let peopleService = {
    /**
     * Devuelve todos los personajes de Star Wars
     * @return {[any]}      Retorna un array de personajes
     */
    getAll: async function () {
        try {
            const response = await fetch(`${constants.SWAPI_BASE_URL}/people?format=${constants.SWAPI_FORMAT_JSON}`);
            if (response.ok) {
                const jsonResponse = await response.json();
                let { results } = jsonResponse;
                const peopleFromDatabase = await peopleRepository.getAll();
                const peopleFromSwapi = results.map(p => new PeopleDTO(p))
                const people = peopleFromDatabase.concat(peopleFromSwapi);
                return people;
            }
            return Promise.reject(new Error('Ha fallado la petición HTTP al Star Wars API'));
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
        try {
            // TO DO: Agregar validación de los datos
            const people = await peopleRepository.save(peopleSaveDTO);
            return people;
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

module.exports = peopleService;
