const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userServices = require("../services/userServices");

function hashing(password) {
  const startTime = new Date();

  const hashed = bcrypt.hashSync(password, 10);

  const endTime = new Date();

  console.log((endTime - startTime) / 100 + "s 걸림 (hashing 시간)");

  return hashed;
}

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const REQUIRED_KEYS = { email, password };

    for (let key in REQUIRED_KEYS) {
      if (!REQUIRED_KEYS[key]) {
        return res.status(400).json({ message: "KEY_ERROR" });
      }
    }

    const user = await userServices.signIn(email, password);
    const token = jwt.sign({ id: 1 }, email, { expiresIn: "30m" });
    console.log("email jwt : ", token);
    return res
      .status(200)
      .json({ message: "LOGIN_SUCCEES", user, "email jwt token": token });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const signUp = async (req, res) => {
  try {
    const { email, password, username, address, phone_number } = req.body;

    const hashedPassword = hashing(password); // 비밀번호 hashing

    const user = await userServices.signUp(
      email,
      hashedPassword,
      username,
      address,
      phone_number
    );
    console.log("Controller / hashed password : ", hashedPassword);

    console.log("user in controller: ", user);

    return res.status(200).json({ message: "REGISTER_SUCCEES", user });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = { signIn, signUp };
