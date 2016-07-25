import Ember from 'ember';

export default Ember.Controller.extend({
  info: {},

  mondayform: false,




  actions: {

    poster() {
      let inf = this.get('info');
      let sched = this.store.createRecord('schedule', {
       day: inf.day,
       open: inf.open,
       close: inf.close
     });
     sched.save();
   },

    monday() {
      this.toggleProperty('mondayform');
    }
  }
});
