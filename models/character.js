const mongoose = require('mongoose');
const Joi = require('joi');

const Character = mongoose.model('Character', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 12
    },
    class: {
        type: String,
        required: true
    },
    dkp: {
        type: Number
    }
}));

function validateCharacter(character) {
    const schema = {
        name: Joi
            .string()
            .min(2)
            .max(12)
            .required(),
        class: Joi
            .string()
            .required(),
        dkp: Joi
            .number()
    };
    return result = Joi.validate(character, schema);
}

exports.Character = Character;
exports.validate = validateCharacter;