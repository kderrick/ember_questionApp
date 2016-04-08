import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),
  actions: {
    update(question,params) {
      this.sendAction('update', question, params);
    },
    addQuestionToFavorites(question) {
      this.get('favoriteQuestions').add(question);
    }
  }
});
