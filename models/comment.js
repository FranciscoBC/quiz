module.exports = function(sequelize, DataTypes) {
	return sequelize.define (
		'Comment',
		{ texto: {
			type: DataTypes.STRING,
			VALIDATE: {notEmpty: {msg: "-> Falta comentario"}}
			},
		  publicado: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
			}
		}
	);
}