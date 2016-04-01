import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    save() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        details: this.get('details')
      };
      this.set('addNewQuestion', false);
      this.sendAction('save', params);
    }
  }
});
