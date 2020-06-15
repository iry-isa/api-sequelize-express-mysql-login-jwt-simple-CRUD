module.exports = (sequelize, type) => {
    return sequelize.define('producto', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: type.STRING,
        precio: type.INTEGER,
        descripcion: type.STRING,
        categoria: type.STRING,
        score: type.STRING,

    });

}