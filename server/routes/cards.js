const express = require('express');
const router = express.Router();
const CardController = require('../controllers').Cards;

router.route('/card')

  //handle get request from client to retrieve all job cards from db
  .get(CardController.getAll)

  //handle post request from client to create new job card
  .post(CardController.create)
  ;

router.route('/card/update')

  //handle post request from client to update status on a job card
  .post(CardController.update)
  ;


module.exports = router;