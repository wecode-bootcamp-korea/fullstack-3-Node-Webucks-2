const usersDao = require('../models/usersDao')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const signIn = async (email, password) => {
	console.log('email in services: ', email)
	
	const [user] = await usersDao.getUserByEmail(email)

	console.log('user in service: ', user)

	if (!user) {
		const error = new Error ('INVALID_USER')
		error.statusCode = 400

		throw error
	}
	const validPassword = await bcrypt.compare(password, user.password);
	if (!validPassword) {
		const error = new Error ('INCORRECT_USER')
		error.statusCode = 400
		throw error
	}

    if (validPassword) {
      const token = jwt.sign({ id: user.id }, 'minsu', { expiresIn: '1h' });
      return token;
    }
}

const signUp = async (email, username, password, address, phone_number, policy_agreed) => {

	const [user] = await usersDao.getUserByEmail(email)

	if(user){
		const error = new Error ('existing_USER')
		error.statusCode = 409

		throw error;
	}

	else{
		const hashed = await bcrypt.hash(password,10);
		console.log(hashed);
		return 	await usersDao.createUser(email, username, password=hashed, address, phone_number, policy_agreed)
	}
}





module.exports = { signIn, signUp }