import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  // fullQuestionDetails: Ember.computed('question.title', 'question.author', function() {
  //   return this.get('question.title') + " " + this.get('question.author') + " " + this.get('question.details');
  // }),
  //
  // fullResponse: Ember.computed('question.answers.title', 'question.answers.author', function() {
  //   this.get('question').get('answers').map(function(answer) {
  //     return answer.get('title');
  //   });
  // }),
  //
  // fullLocation: Ember.computed('answer.title', function() {
  //   return this.get('answer.title');
  // }),
  // sortBy: ['votes:asc'],
  //
  // sortedAnswers: Ember.computed.sort('question.answers.votes', 'sortBy'),
  //
  // timeCreated: Ember.computed('question.answer.timestamp', function() {
  //   var currentTime = new Date();
  //   var answerTime = new Date(this.get('question.answer.timestamp')) ;
  //   var timeCreated = currentTime - answerTime;
  //   return parseInt(timeCreated/60000);
  // },

  actions: {
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question');
    },
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },
    destroyQuestion(question) {
      var answer_deletions = question.get('answers').map(function(answer){
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function(){
        return question.destroyRecord();
      });
       this.transitionTo('index');
    },
    deleteAnswer(answer) {
      answer.destroyRecord();
    },
    upVoteAnswer(answer) {
      console.log(answer);
      console.log(answer.votes);
      answer.save();
    }
  }
});
