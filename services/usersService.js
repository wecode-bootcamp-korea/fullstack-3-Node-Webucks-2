const usersDao = require('../models/usersDao')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const token = jwt.sign({ foo: 'bar' }, 'shhhhh');



const signIn = async (email, password) => {
	console.log('email in services: ', email)
	
	const [user] = await usersDao.getUserByEmail(email)

	console.log('user in service: ', user)

	if (!user) {
		const error = new Error ('INVALID_USER')
		error.statusCode = 400

		throw error
	}
	


	const isEqualPw = await bcrypt.compare(password, user.password);
  console.log(isEqualPw);

	if (!isEqualPw) {
		const error = new Error ('INVALID_USER')
		error.statusCode = 400

		throw error
	}

	return newUserToken = jwt.sign({email}, 'server_made_secret_key', {expiresIn: '1h'})

	
	
		// const validuser= jwt.verify(newUserToken, 'server_made_secret_key')
		// if(!validuser){
		// 	const error = new Error ('INVALID_USER')
		// 	error.statusCode = 400
	
		// 	throw error
		// }// 추후 토큰 인증용 함수. 
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