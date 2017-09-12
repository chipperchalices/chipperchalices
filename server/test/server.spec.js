'use strict';
const request = require('supertest');
const express = require('express');
const expect = require('chai').expect;
const app = require('../app.js');
const models = require('../../db/models');
var chai = require("chai");
var sinonChai = require("sinon-chai");
const config = require ('../../config/glassdoor.js');
const Glassdoor = require('node-glassdoor').initGlassdoor({
  partnerId: config.config.partnerId,
  partnerKey: config.config.key
});
const CompanyController = require('../controllers').Companies;

chai.use(sinonChai);


describe('basic server', function() {
  it('sends back hello world', function(done) {
    request(app)
      .get('/api')
      .expect(200)
      .expect(function(res) {
        expect(res.text).to.equal('Hello World!');
      })
      .end(done);
  });

  it('accepts POST request', function(done) {
    request(app)
      .post('/api')
      .expect(201)
      .expect(function(res) {
        expect(res.body.data).to.equal('Posted!');
      })
      .end(done);
  });
});

describe('/card', function() {
  it('accepts POST requests', function(done) {
    request(app)
      .post('/card')
      .send({ 
        job: {
          title: 'swe',
          company: 'google',
          notes: 'talk to James b/c he works there',
          url: 'www.example.com/job'
        },
        status: {
          date: '05/16/2017',
          status: 'Applied'
        }
      })
      .expect(200)
      .expect(function(res) {
        expect(res.body).to.exist;
      })
      .end(done);
  });

  it('saves a new company to the database', function(done) {
    var cloned = new models.Company({        
      name: 'google',
      industry: null,
      logo_url: null,
      company_url: null,
      description: null,
      location_id: null
    });
    request(app)
      .post('/card')
      .send({ 
        job: {
          title: 'swe',
          company: 'google',
          notes: 'talk to James b/c he works there',
          url: 'www.example.com/job'
        },
        status: {
          date: '05/16/2017',
          status: 'Applied'
        }
      });
    cloned.fetch()
      .then(function(result, err) {
        expect(result.name).to.equal('google');
      })
      .end(done);
  });

  it('does not create a new company if one already exists in database', function(done) {
    var cloned = new models.Company({        
      name: 'google',
      industry: null,
      logo_url: null,
      company_url: null,
      description: null,
      location_id: null
    });
    request(app)
      .post('/card')
      .send({ 
        job: {
          title: 'swe',
          company: 'google',
          notes: 'talk to James b/c he works there',
          url: 'www.example.com/job'
        },
        status: {
          date: '05/16/2017',
          status: 'Applied'
        }
      });
    cloned.fetch()
      .then(function(result, err) {
        expect(result.name).to.equal('google');
      })
      .end(done);
  });

  it('saves a new card to the database', function(done) {
    var cloned = new models.Card({
      position: 'swe',
      position_url: 'www.example.com/job',
      description: null,
      notes: 'talk to James b/c he works there',
      company_id: 1,
      user_id: 1
    });
    request(app)
      .post('/card')
      .send({ 
        job: {
          title: 'swe',
          company: 'google',
          notes: 'talk to James b/c he works there',
          url: 'www.example.com/job'
        },
        status: {
          date: '05/16/2017',
          status: 'Applied'
        }
      });
    cloned.fetch()
      .then(function(result, err) {
        expect(result.position).to.equal('swe');
        expect(result.company).to.equal('google');
        expect(result.position_url).to.equal('www.example.com/job');
      })
      .end(done);
  });

  it('saves a new lifecycle to the database', function(done) {
    var cloned = new models.Lifecycle({
      status: 'Applied',
      status_start_date: '05/16/2017',
      card_id: 1
    });
    request(app)
      .post('/card')
      .send({ 
        job: {
          title: 'swe',
          company: 'google',
          notes: 'talk to James b/c he works there',
          url: 'www.example.com/job'
        },
        status: {
          date: '05/16/2017',
          status: 'Applied'
        }
      });
    cloned.fetch()
      .then(function(result, err) {
        expect(result.status).to.equal('Applied');
        expect(result.status_start_date).to.equal('05/16/2017');
      })   
      .end(done);
  });

});
//   it('retrieves data from the Glassdoor API', function(done){
//     CompanyController.getGlassDoorInfo({}, {}, { attributes.name: 'google'})
//   })

// });
