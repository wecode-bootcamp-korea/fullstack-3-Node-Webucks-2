const users = (req, res) => {
  try {
    const createdUser = await prisma.$queryRaw`
            insert into users(email, password, username, address, phone_number) values (${email}, ${password}, ${username}, ${address}, ${phone_number});`;

    return res.status(201).json({ message: "CREATED" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};
