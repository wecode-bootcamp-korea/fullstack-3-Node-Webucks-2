const prisma = require("./index");

const getUserByEmail = async (email) => {
  // console.log('email in dao: ', email)
  const [user] = await prisma.$queryRaw`
    SELECT 
      email, password 
    FROM 
      users WHERE email = ${email}
    `;
  // console.log('user in dao: ', user)
  return user;
};

const createUser = async (email, password, username, address, phone_number) => {
  const createData = await prisma.$queryRaw`
        INSERT INTO 
          users (email, password, username, address, phone_number) 
        VALUES 
          (${email}, ${password}, ${username}, ${address}, ${phone_number} )
        `;

  return createData;
};

module.exports = { getUserByEmail, createUser };
