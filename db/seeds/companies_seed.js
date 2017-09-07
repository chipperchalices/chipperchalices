
exports.seed = function(knex, Promise) {

  return knex('companies').del()
    .then(function () {

      return knex('companies').insert([
        { name: 'Vlocity',
          industry: 'Information Technology and Services Computer Software Internet',
          logo_url: 'https://tinyurl.com/ya54jrkq',
          linkedin_url: 'https://www.linkedin.com/company/3652724/',
          description: 'Vlocity is a leading industry cloud software company that delivers award winning industry-specific applications on the Salesforce platform.',
          location_id: 1
        },
        { name: 'RHLA Technology',
          industry: 'Information Technology and Services Computer Software Internet',
          logo_url: 'https://tinyurl.com/y8z3pajs',
          linkedin_url: 'https://www.linkedin.com/company/3652724/',
          description: 'RHLA Technology is a leading provider of technology professionals on a project and full-time basis.',
          location_id: 1
        },
        { name: 'Ladeeda',
          industry: 'Information Technology and Services Computer Software Internet',
          logo_url: 'https://tinyurl.com/y88e4djd',
          linkedin_url: 'https://www.linkedin.com/company/3652724/',
          description: 'Ladeeda is the leader in cloud security.',
          location_id: 2
        }
      ]);
    });
};
