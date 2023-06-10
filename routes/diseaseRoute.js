// import {getAllDiseases, getDiseaseById} from '../controllers/disease';
const {getAllDiseases, getDiseaseById} = require('../controllers/diseaseController.js');

const express = require('express');
const router = express.Router();

router.get('/', getAllDiseases);
router.get('/:id', getDiseaseById);

module.exports = router;
