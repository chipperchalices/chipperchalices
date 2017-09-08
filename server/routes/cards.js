'use strict';
const express = require('express');
const router = express.Router();
const CardController = require('../controllers').Cards;
const CompanyController = require('../controllers').Companies;
const LifecycleController = require('../controllers').Lifecycles;

const dummyData = [
  {
    id: 1,
    company: {
      id: 1,
      name: 'Google',
      description: 'Do no evil',
      logoUrl: 'https://www.wired.com/wp-content/uploads/2015/09/google-logo-1200x630.jpg',
      location: 'Mountain View, CA'
    },
    position: 'UI Developer',
    applicationUrl: 'https://boards.greenhouse.io/vlocity/jobs/781103',
    currentStatus: 'Interview Scheduled',
    date: '2017-09-02',
    notes: null
  },
  {
    id: 2,
    company: {
      id: 3,
      name: 'RHLA Technology',
      description: 'RHLA Technology is a leading provider of technology professionals on a project and full-time basis.',
      logoUrl: 'https://tinyurl.com/y8z3pajs',
      location: 'San Francisco, CA'
    },
    position: 'Front End Developer',
    applicationUrl: 'https://www.linkedin.com/jobs/view/430047268/',
    currentStatus: 'Interested',
    date: '2017-08-22',
    notes: 'Recruiter reached out to me.'
  }
];

router.route('/')

  //handle get request from client to retrieve all job cards from db

  // .get(CardController.getAll)
  .get((req, res) => res.send(dummyData))

  //handle post request from client to create new job card
  .post(CompanyController.create);

router.route('/update')

  //handle post request from client to update status on a job card
  .post(CardController.update);


module.exports = router;

