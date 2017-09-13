exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('companies', function(table) {
      table.string('rating', 100).nullable();
      table.timestamps();
    }),
    knex.schema.table('cards', function(table) {
      table.string('current_status', 100).nullable();
      table.string('recruiter_name', 100).nullable();
      table.string('recruiter_email', 100).nullable();
      table.timestamps();
    }),
    knex.schema.table('lifecycle', function(table) {
      table.bigInteger('user_id').unsigned().index().references('id').inTable('profiles').onDelete('CASCADE');
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('companies', function(table) {
      table.dropColumn('rating');
      table.dropTimestamps();
    }),
    knex.schema.table('cards', function(table) {
      table.dropColumn('current_status');
      table.dropColumn('recruiter_name');
      table.dropColumn('recruiter_email');
      table.dropTimestamps();
    }),
    knex.schema.table('lifecycle', function(table) {
      table.dropColumn('user_id');
      table.dropTimestamps();
    })
  ]);
};