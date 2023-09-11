const { Form, User } = require("../db")

const getForms = async (UserId) => {
    const forms = await Form.findAll({
        where: { UserId }
    })
    return forms; 
};

const putForms = async (id, name, phone, date, preferredLanguage, howFound, newsletterSubcription) => {
    const forms = await Form.findByPk(id);
    if(!forms){
        throw Error("no enncotrado.")
    }
    await forms.update({
        name, 
        phone, 
        date, 
        preferredLanguage, 
        howFound, 
        newsletterSubcription
    });
    return forms;
};

const postForms = async (userId ,name, phone, date, preferredLanguage, howFound, newsletterSubcription) => {
    const forms = await Form.create({name, phone, date, preferredLanguage, howFound, newsletterSubcription});
    await forms.setUser(userId);
    return forms;
};

module.exports = {
    getForms,
    putForms,
    postForms
}