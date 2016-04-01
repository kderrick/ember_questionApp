import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(question,params) {
      this.sendAction('update', question, params);
    },
    delete(question) {
      if(confirm("Would you like to delete this question?")) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
