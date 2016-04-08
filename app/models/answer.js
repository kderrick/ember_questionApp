import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  votes: 0,
  question: DS.belongsTo('question', {async:true})
});
