'use strict';
const express = require('express');
const router = express.Router();
const CardController = require('../controllers').Cards;
const CompanyController = require('../controllers').Companies;
const LifecycleController = require('../controllers').Lifecycles;

router.route('/')

  //handle get request from client to retrieve all job cards from db
  .get(CardController.getAll)

  //handle post request from client to create new job card
  .post(CompanyController.create);

router.route('/update')

  //handle post request from client to update status on a job card
  .put(CardController.update);


module.exports = router;

