const { User } = require("../db");
const bcrypt = require("bcryptjs");
const generaJsonWebToken = require("../jwt/Jwt");

const loginHandleUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      where: { email },
    });
console.log(user)
    if (!user) {
      return res.status(400).json({ error: "No Hay Usuario Con Ese Email" });
    }

    // comparo contraseña ingresada con existente
    const passwordValid = await bcrypt.compare( password, (await user).password);

    if (!passwordValid) {
      //contraseña incorrecta
      return res.status(401).json({ error: "Esta Mal La Contraseña" });
    }

    const token = await generaJsonWebToken(user.id, email);

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ error: error.message });
  }
};

const posthandleUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const exist = await User.findOne({
      where: { email },
    });
    if (exist) {
      throw new Error("Email ya existe");
    }

    if (!email || !password) {
      return res.status(400).json({ error: "faltan datos a completar" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const response = await User.create({ email, password: hashedPassword });

    return res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  posthandleUser,
  loginHandleUser,
};
