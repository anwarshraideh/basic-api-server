'use strict';


const express = require('express');



const validator = require('../middleware/validator.js');

const Clothes = require('../models/clothes.js');
const clothes = new Clothes();
const router = express.Router();

//create 

router.post('/', createClothes);

function createClothes(req, res) {
  const clothesObject = req.body;
  const resObj = clothes.create(clothesObject);
  res.status(201).json(resObj);
}

//Get All Record //read 

router.get('/', getClothes);
function getClothes(req, res) {
  const resObj = clothes.read();
  res.json(resObj);

}

//Get One Record //read 

router.get('/:id', validator, getClothesById);

function getClothesById(req, res) {
  const resObj = clothes.read(req.params.id);
  res.json(resObj);

}

//Update A Record //put
router.put('/', validator, updateClothes);
router.put('/:id', validator, updateClothes);

function updateClothes(req, res) {
  const clothesObject = req.body;
  const resObj = clothes.update(req.params.id, clothesObject);
  res.json(resObj);
  
}

//Delete A Record //delete 

router.delete('/', validator, deleteClothes);
router.delete('/:id', validator, deleteClothes);

function deleteClothes(req, res) {
  const resObj = clothes.delete(req.params.id);
  res.json(resObj);
}


module.exports =router;