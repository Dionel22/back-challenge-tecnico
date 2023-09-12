const { Form, User } = require("../db")

const getForms = async (UserId) => {
    const forms = await Form.findAll({
        where: { UserId }
    })
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

const postForms = async (UserId ,name, phone, startDate, preferredLanguage, howFound, newsletterSubscription) => {
    const forms = await Form.create({name, phone, startDate, preferredLanguage, howFound, newsletterSubscription});
    await forms.setUser(UserId);
    return forms;
};

module.exports = {
    getForms,
    putForms,
    postForms
}