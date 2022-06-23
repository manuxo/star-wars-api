
/**
 * @class
 * Esta clase recibe en el constructor el body del request y devuelve una nueva instancia que contiene únicamente los campos que se desean guardar
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