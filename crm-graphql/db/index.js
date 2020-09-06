const mongoose = require('mongoose');

const { DB_URI } = require('../config/');

const connect = async () => {
	try {
		await mongoose.connect(DB_URI, {
			createIndexes: true,
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		console.log('db connected');
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connect;
