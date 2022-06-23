const knex = require('../database/knex');

/**
 * Repositorio de personajes de Star Wars
 */
const peopleRepository = {
    /**
     * Devuelve todos los personajes de Star Wars almacenados en la base de datos
     * @return {[any]}      Retorna un array de personajes
     */
    async getAll() {
        try {
            const queryBuilder = knex
                .select('nombre', 'estatura', 'peso', 'color_cabello', 'color_ojos', 'genero', 'anio_nacimiento')
                .from('people');
            const rows = await queryBuilder;
            return rows;
        } catch (error) {
            return Promise.reject(error);
        }
    },

    /**
     * Registra un personaje de Star Wars en la base de datos
     * @return {[any]}      Retorna los datos registrados
     */
    async save(data) {
        try {
            await knex.insert(data)
                .insert(data)
                .into('people');
            return data;
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

module.exports = peopleRepository;