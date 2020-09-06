const User = require('../models/User');

const findOne = async (filter) => {
	// TODO add options
	const user = await User.findOne(filter);

	return user;
};

const create = async (input) => {
	const { email } = input;
	const user = await findOne({ email });
	if (user) {
		throw Error('user email already registered');
	}
	const newUser = new User(input);
	return newUser.save();
};

module.exports = {
	create,
	findOne,
};
