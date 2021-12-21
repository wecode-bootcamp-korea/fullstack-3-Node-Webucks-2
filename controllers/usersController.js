const usersService = require('../services/usersService')

const signIn = async(req, res) => {
	try {
		const { email, password } = req.body // r, c, s, m // controllers
		const REQUIRED_KEYS = {email, password} 
		for (let key in REQUIRED_KEYS) {
			if (!REQUIRED_KEYS[key]) {
			  return res.status(400).json({ message: `정보를 제대로 입력하시오` })
			}
		} // controllers

		console.log('email in controller: ', email)


		const token = await usersService.signIn(email, password)

		console.log('user in controller: ', token)

		return res.status(200).json({ message: 'LOGIN_SUCCESS', token })

	} catch (err) {
		console.log(err)
		return res.status(err.statusCode || 500).json({ message: err.message })
	}
}

const signUp = async(req, res) => {
	try { // 2
    const { email, username, password, address, phone_number, policy_agreed} = req.body // 3
 // r, c, s, m // controllers
    const REQUIRED_KEYS = {email, username, password, address, phone_number, policy_agreed} 

		for (let key in REQUIRED_KEYS) {
			if (!REQUIRED_KEYS[key]) {
			  return res.status(400).json({ message: `정보를 제대로 입력하세요` })
			}
		}
		 // controllers
	
		await usersService.signUp(email, username, password, address, phone_number, policy_agreed);
		
		return res.status(200).json({ message: 'signup_SUCCESS'})
} catch (err) {
	console.log(err)
	return res.status(err.statusCode || 500).json({ message: err.message })
}
}

module.exports = { signIn ,signUp}