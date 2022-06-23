
/**
 * @class
 * Esta clase recibe en el constructor una instancia del modelo People y devuelve una nueva instancia que contiene únicamente los campos que se desean mostrar
 */
class PeopleDTO {
    constructor(peopleModel) {
        this.nombre = peopleModel.name;
        this.estatura = +peopleModel.height;
        this.peso = +peopleModel.mass;
        this.color_cabello = peopleModel.hair_color;
        this.color_ojos = peopleModel.eye_color;
        this.genero = peopleModel.gender;
        this.anio_nacimiento = peopleModel.birth_year;
    }
}

module.exports = {
    PeopleDTO
}