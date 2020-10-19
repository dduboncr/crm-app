const { userDAO } = require('../dao/index');
const bcryptjs = require('bcryptjs');
const { SECRET } = require('../config');
const jwt = require('jwt');

const crearToken = (user, secret, expiresIn) => {
	const { email } = user;
	return jwt.sign({ email }, secret, { expiresIn });
};
const createUser = async (_, { input }) => {
	const { password } = input; // check if user exist
	try {
		const salt = await bcryptjs.genSalt(10);
		input.password = await bcryptjs.hash(password, salt);
		const user = await userDAO.create(input);
		return user;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const getUsers = async () => {
	try {
		const users = await userDAO.find();
		return users;
	} catch (error) {
		throw error;
	}
};

const authenticateUser = async (_, { input }) => {
	const { email, password } = input;

	const userExist = await userDAO.findOne({ email });

	if (!userExist) {
		throw new Error('wrong password or email');
	}

	const isPasswordOk = await bcryptjs.compare(password, userExist.password);

	if (!isPasswordOk) {
		throw new Error('wrong password or email');
	}

	return token;
};

module.exports = {
	getUsers,
	createUser,
	authenticateUser,
};
