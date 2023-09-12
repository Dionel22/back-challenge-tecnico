require("dotenv").config();
const { getForms, putForms, postForms } = require("../controllers/controllerForm");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const getHandleForm = async (req, res) => {
    const token = req.headers.authorization;
    try {
		if (!token) {
		  return res.status(401).json({ message: 'Token no proporcionado' });
		}
        // Verifica y decodifica el token para obtener el userId
		
		  const tokenParts = token.split('Bearer').pop().trim();
		  const tokenized = jwt.verify(tokenParts, JWT_SECRET);
		  let  id = tokenized.userId;
          console.log(id)
        const response = await getForms(id)
    return res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    return res.status(400).json({ error: error.message });
    }
};

const putHandleForm = async (req, res) => {
    const { id, name, phone, startDate, preferredLanguage, howFound, newsletterSubscription } = req.body;
    const token = req.headers.authorization;
    try {
		if (!token) {
		  return res.status(401).json({ message: 'Token no proporcionado' });
		}
        // Verifica y decodifica el token para obtener el userId
		
		  const tokenParts = token.split('Bearer').pop().trim();
		  const tokenized = jwt.verify(tokenParts, JWT_SECRET);
		  let  userId = tokenized.userId;
          if(!userId){
            return res.status(400).json({ error: "no tenes token" });
          }

        const response = await putForms(id, name, phone, startDate, preferredLanguage, howFound, newsletterSubscription)
        return res.status(200).json(response); 
    } catch (error) {
        console.log(error.message);
    return res.status(400).json({ error: error.message });
    }
};

const postHandleForm = async (req, res) => {
    const { name, phone, startDate, preferredLanguage, howFound, newsletterSubscription } = req.body;
    const token = req.headers.authorization;
    try {
		/*if (!token) {
		  return res.status(401).json({ message: 'Token no proporcionado' });
		}
        // Verifica y decodifica el token para obtener el userId
		
		  const tokenParts = token.split('Bearer').pop().trim();
		  const tokenized = jwt.verify(tokenParts, JWT_SECRET);
		  let  userId = tokenized.userId;*/
          let userId = 1;

        const response = await postForms(userId, name, phone, startDate, preferredLanguage, howFound, newsletterSubscription)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    return res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getHandleForm,
    putHandleForm,
    postHandleForm
}