const models = require('../../db/models');
const card = require ('./cards.js');
const lifecycle = require ('./lifecycle.js');
const config = require ('../../config/glassdoor.js');
const Glassdoor = require('node-glassdoor').initGlassdoor({
  partnerId: config.config.partnerId,
  partnerKey: config.config.key
});


models.Company.findOrCreate = function(req, res) {
  var isNew = false;
  var cloned = new models.Company({        
    name: req.body.job.company,
    industry: null,
    logo_url: null,
    linkedin_url: null,
    description: null,
    location_id: null
  });
  return cloned.fetch()
    .then(function(result, err) {
      if (result === null) { 
        isNew = true;
        return cloned.save(); 
      }
      return result;
    })
    .then(result => {
      if (isNew) {
        console.log('going to glassdoor');
        return models.Company.getGlassdoorInfo(result);
      }
      return result;
    })
    .then(result => {
      card.create(req, res, result);
      res.sendStatus(201);    
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

models.Company.getGlassdoorInfo = function (company) {
  console.log(company);
  Glassdoor.findOneCompany(company.attributes.name, 
    {
      country: 'US'
    })
    .then(function (data) {
      console.log('success', data);
      return company.save ({          
        industry: data.industryName,
        logo_url: data.squareLogo,
        linkedin_url: data.website,
        description: data.featuredReview.headline
      });
    })
    .catch(function (err) {
      console.error(err);
    });
};


module.exports.create = (req, res) => {
  return models.Company.findOrCreate(req, res);
};

