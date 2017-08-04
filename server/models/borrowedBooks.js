module.exports = (sequelizer, Datatypes) => {
	const BorrowingHistory = sequelizer.define("BorrowingHistory", {
		borrowId: {
			type: Datatypes.INTEGER,
			allowNull: false
		},

		email: {
			type: Datatypes.STRING,
			allowNull: false
		},

		ISBN: {
			type : Datatypes.STRING,
			allowNull : false
		},

		date: {
			type : Datatypes.DATE,
			allowNull : false
		},

		returnDate: {
			type : Datatypes.DATE,
			allowNull : false
		}
	});

	return BorrowingHistory;
}