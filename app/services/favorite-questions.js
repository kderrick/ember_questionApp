import Ember from 'ember';

export default Ember.Service.extend({
  favQuestions: [],

  add(question) {
    this.get('questions').pushObject(question);
  }
});
