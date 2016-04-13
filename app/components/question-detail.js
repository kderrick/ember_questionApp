import Ember from 'ember';

export default Ember.Component.extend({
  fullQuestionInfo: Ember.computed('question.title', 'question.author','question.details', function() {
    return this.get('question.title') + 'by: ' + this.get('question.author') + 'the deets' + this.get('question.details');
  }),
  actions: {
    delete(question) {
      if(confirm("Would you like to delete this question?")) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
