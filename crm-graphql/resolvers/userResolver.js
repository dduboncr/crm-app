const { userDao } = require('../dao/index');
const createUser = async (_, { input }) => {
	const { email, password } = input; // check if user exist
	try {
		const user = await userDao.create(input);
		return user;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	createUser,
};
