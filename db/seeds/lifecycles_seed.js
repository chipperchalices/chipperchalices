
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lifecycles').del()
    .then(function () {
      // Inserts seed entries
      return knex('lifecycles').insert([
        { status: '1',
          status_start_date: 'August 10, 2017',
          card_id: 1
        },
        { status: '2',
          status_start_date: 'September 4, 2017',
          card_id: 1
        },
        { status: '1',
          status_start_date: 'September 7, 2017',
          card_id: 2
        },
      ]);
    });
};
