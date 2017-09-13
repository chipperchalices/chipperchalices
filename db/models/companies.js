const db = require('../');

const Company = db.Model.extend({
  tableName: 'companies',
  hasTimestamps: true,
  location: function() {
    return this.hasOne('Location');
  },
  card: function() {
    return this.hasMany('Card');
  },
  lifecycle: function() {
    return this.hasMany('Lifecycle').through('Card')
  }
});

module.exports = db.model('Company', Company);