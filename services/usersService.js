const usersDao = require('../models/usersDao')

const signIn = async (email, password) => {
	console.log('email in services: ', email)
	
	const [user] = await usersDao.getUserByEmail(email)

	console.log('user in service: ', user)

	if (!user) {
		const error = new Error ('INVALID_USER')
		error.statusCode = 400

		throw error
	}

	if (user.password !== password) {
		const error = new Error ('INVALID_USER')
		error.statusCode = 400

		throw error
	}

	const token = '1111'

	return token
}

const signUp = async (email, username, password, address, phone_number, policy_agreed) => {

	const [user] = await usersDao.getUserByEmail(email)

	if(user){
		const error = new Error ('existing_USER')
		error.statusCode = 400

		throw error;
	}
	else{
		return 	await usersDao.createUser(email, username, password, address, phone_number, policy_agreed)

	}
	// return 	await usersDao.createUser(email, username, password, address, phone_number, policy_agreed)
}
	// console.log('user in service: ', user)





module.exports = { signIn, signUp }