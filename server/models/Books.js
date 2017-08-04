module.exports = (sequelizer, Datatypes) => {
	const Books = sequelizer.define("Books", {
		ISBN: {
			type: Datatypes.STRING,
			allowNull: false
		},

		title: {
			type: Datatypes.STRING,
			allowNull: false
		},

		author: {
			type : Datatypes.STRING,
			allowNull : false
		},

		publisher: {
			type : Datatypes.STRING,
			allowNull : false
		},

		year: {
			type : Datatypes.STRING,
			allowNull : false
		},

		summary : {
			type : Datatypes.STRING,
			allowNull : true
		},

		status : {
			type : Datatypes.STRING,
			allowNull: false
		},

		quantity : {
			type : Datatypes.INTEGER,
			allowNull : false

		}
	});

	return Books;
}