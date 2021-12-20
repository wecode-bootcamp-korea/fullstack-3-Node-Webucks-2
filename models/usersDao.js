const prisma = require("./index")

const getUserByEmail = async (email) => {
	console.log('email in dao: ', email)
	const user = await prisma.$queryRaw`
	  SELECT email, password FROM users WHERE email = ${email}
	`
	console.log('user in dao: ', user)
	return user
}
const createUser = async (email, username, password, address, phone_number, policy_agreed) => {
	await prisma.$queryRaw`
INSERT INTO users(email, username, password, address, phone_number, policy_agreed) VALUES (${email},${username},${password},
${address},${phone_number}, ${policy_agreed});`
}

module.exports = { getUserByEmail, createUser }