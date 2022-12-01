const { Sequelize, DataTypes } = require("sequelize");

//postgres://<USUARIO>:<PASSWORD>@<URL_HOST_BD>:<PUERTO_BD>/<NOMBRE_BD>

const CADENA_CONEXION = 
    "postgresql://usuarios:usuarios@localhost:5432/usuariosdb"

const sequelize = new Sequelize(CADENA_CONEXION)


const Usuario = sequelize.define("usuarios", {

    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    nombre: {

        type: DataTypes.STRING(150),
        allowNull: false

    },
    contra: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    ciudad: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    piso: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    postal: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    celular: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    
},{
    timestamps : false,
    freezeTableName : true

})

const ListaComponentes = sequelize.define("listacompras",{

    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    imagen: {

        type: DataTypes.STRING(300),
        allowNull: false

    },
    descripcion: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    precio: {

        type: DataTypes.INTEGER,
        allowNull: false

    },
    bote: {
        type: DataTypes.STRING(300),
        allowNull: false
    },

},{
    timestamps : false,
    freezeTableName : true

})

const Producto = sequelize.define("Producto",{
    Producto_ID: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    Nombre: {

        type: DataTypes.STRING(25),
        allowNull: false

    },
    Precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Descripcion: {

        type: DataTypes.STRING(150),
        allowNull: false

    },
    Categoria: {

        type: DataTypes.STRING(30),
        allowNull: false

    },
    imagen: {

        type: DataTypes.STRING(400),
        allowNull : false

    },
},{
    timestamps : false,
    freezeTableName : true

})

module.exports={
    Usuario,ListaComponentes, Producto
}