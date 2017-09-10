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
    company_url: null,
    description: null,
    location_id: null
  });
  return cloned.fetch()
    .then(function(result, err) {
      if (result === null) { 
        isNew = true;
        return cloned.save()
          .then(result =>{
            return result;
          })
          .catch(err=>{
            console.log(err);
          });
      }
      return result;
    })
    .then(result => {
      if (isNew) {
        return models.Company.getGlassdoorInfo(req, res, result);
      }
      return result;
    })
    .then(result => {
      res.sendStatus(201);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

models.Company.getGlassdoorInfo = function (req, res, company) {
  return Glassdoor.findOneCompany(company.attributes.name, 
    {
      country: 'US'
    })
    .then(function (data) {
      return company.save ({          
        industry: data.industryName,
        logo_url: data.squareLogo,
        company_url: data.website,
        description: data.featuredReview.headline
      })
        .then(result =>{
          console.log(result);
          card.create(req, res, result);
        });
    })
    .catch(err => {
      console.error(err);
    });
};


module.exports.create = (req, res) => {
  return models.Company.findOrCreate(req, res);
};

module.exports.getGlassdoorInfo = models.Company.getGlassdoorInfo;

