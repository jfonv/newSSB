/* eslint-disable new-cap */
/* eslint-disable no-unused-expressions */

import express from 'express';
import Fighter from '../models/fighter';
const router = module.exports = express.Router();

// create
router.post('/', (req, res) => {
  console.log('Got here: ', req.body);
  Fighter.create(req.body, (err, fighter) => {
    console.log('Got here, too: ', err);
    console.log('Got here, too: ', fighter);
    res.send({ fighter });
  });
});

// delete
router.get('/', (req, res) => {
  Fighter.find({}, (err, fighter) => {
    console.log('Got here, too: ', fighter);
    res.send({ fighter });
  });
});
