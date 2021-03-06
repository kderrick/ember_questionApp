import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  votes: DS.attr(),
  timestamp: DS.attr(),
  question: DS.belongsTo('question', {async:true})
});
