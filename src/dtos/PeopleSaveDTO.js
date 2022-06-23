
/**
 * @class
 * Esta clase recibe en el constructor una instancia del modelo People y devuelve una nueva instancia que contiene únicamente los campos que se desean mostrar
 */
 class PeopleSaveDTO {
    constructor(requestBody) {
        this.nombre = requestBody.nombre;
        this.estatura = +requestBody.estatura;
        this.peso = +requestBody.peso;
        this.color_cabello = requestBody.color_cabello;
        this.color_ojos = requestBody.color_ojos;
        this.genero = requestBody.genero;
        this.anio_nacimiento = requestBody.anio_nacimiento;
    }
}

module.exports = {
    PeopleSaveDTO
}