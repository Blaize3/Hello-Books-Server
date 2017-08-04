module.exports = (sequelizer, Datatypes) => {
	const Users = sequelizer.define("Users", {
		email: {
			type: Datatypes.STRING,
			allowNull: false
		},

		username: {
			type: Datatypes.STRING,
			allowNull: false
		},

		uPassword: {
			type : Datatypes.STRING,
			allowNull : false
		},

		membership: {
			type : Datatypes.STRING,
			allowNull : false
		},

		userType: {
			type : Datatypes.STRING,
			allowNull : false
		}
	});

	return Users;
}