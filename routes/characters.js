const { Character, validate } = require('../models/character');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/', async (req, res) => {
    const characters = await Character.find()
        .sort('name');
    res.send(characters);
});

router.put('/', async (req, res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    var character = new Character({
        name: req.body.name,
        class: req.body.class,
        dkp: (typeof req.body.dkp !== 'undefined') ? req.body.dkp : 0,
    });

    character = await character.save();
    res.send(character);
});

module.exports = router;