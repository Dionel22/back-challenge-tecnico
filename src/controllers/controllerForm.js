const { Form } = require("../db")

const getForms = async () => {
    const forms = await Form.findAll();
    return forms; 
};

const putForms = async (id, name, phone, startDate, preferredLanguage, howFound, newsletterSubscription) => {
    const forms = await Form.findByPk(id);
    if(!forms){
        throw Error("no enncotrado.")
    }
    await forms.update({
        name, 
        phone, 
        startDate, 
        preferredLanguage, 
        howFound, 
        newsletterSubscription
    });
    return forms;
};

const postForms = async (name, phone, startDate, preferredLanguage, howFound, newsletterSubscription) => {
    const forms = await Form.create({name, phone, startDate, preferredLanguage, howFound, newsletterSubscription});
    return forms;
};

module.exports = {
    getForms,
    putForms,
    postForms
}