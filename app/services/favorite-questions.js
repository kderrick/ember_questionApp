import Ember from 'ember';

export default Ember.Service.extend({
  favoriteQuestions: [],

  add(question) {
    this.get('favoriteQuestions').pushObject(question);
  }
});
