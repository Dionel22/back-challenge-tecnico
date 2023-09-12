const { getForms, putForms, postForms } = require("../controllers/controllerForm");


const getHandleForm = async (req, res) => {
    try {
        const response = await getForms()
    return res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    return res.status(400).json({ error: error.message });
    }
};

const putHandleForm = async (req, res) => {
    const { id, name, phone, startDate, preferredLanguage, howFound, newsletterSubscription } = req.body;
    
    try {
        const response = await putForms(id, name, phone, startDate, preferredLanguage, howFound, newsletterSubscription)
        return res.status(200).json(response); 
    } catch (error) {
        console.log(error.message);
    return res.status(400).json({ error: error.message });
    }
};

const postHandleForm = async (req, res) => {
    const { 
        name, 
        phone, 
        startDate, 
        preferredLanguage, 
        howFound, 
        newsletterSubscription 
    } = req.body;

    try {
        const response = await postForms( name, phone, startDate, preferredLanguage, howFound, newsletterSubscription)
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