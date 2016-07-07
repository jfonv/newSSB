/* eslint-disable new-cap */

import express from 'express';
import Weapon from '../models/weapon';
const router = module.exports = express.Router();

// create
router.post('/', (req, res) => {
  Weapon.create(req.body, (err, weapon) => {
    res.send({ weapon });
  });
});

// delete
router.get('/', (req, res) => {
  Weapon.find({}, (err, weapon) => {
    res.send({ weapon });
  });
});
