//const models = require('../models');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        { id: 1,
          position: 'UI Developer',
          position_url: 'https://boards.greenhouse.io/vlocity/jobs/781103',
          description: 'Vlocity is a leading industry cloud software company that delivers award winning industry-specific applications on the Salesforce platform.',
          notes: null,
          company_id: 1,
          user_id: 1
        }
        { id: 2,
          position: 'Front End Developer',
          position_url: 'https://www.linkedin.com/jobs/view/430047268/',
          description: 'RHLA Technology is a leading provider of technology professionals on a project and full-time basis.',
          notes: 'Recruiter reached out to me.',
          company_id: 3,
          user_id: 1
        },
        { id: 3,
          position: 'Front End UI Developer',
          position_url: 'https://www.linkedin.com/jobs/view/380992731/',
          description: 'Ladeeda is the leader in cloud security. ',
          notes: null,
          company_id: 2,
          user_id: 1
        }
      ]);
    });
};
