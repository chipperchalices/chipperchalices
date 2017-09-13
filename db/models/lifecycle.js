const db = require('../');

const Lifecycle = db.Model.extend({
  tableName: 'lifecycle',
  hasTimestamps: true,
  card: function() {
    return this.belongsTo('Card');
  },
  company: function() {
    return this.belongsTo('Company').through('Card');
  }
});

module.exports = db.model('Lifecycle', Lifecycle);