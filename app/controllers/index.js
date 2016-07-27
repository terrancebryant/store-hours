import Ember from 'ember';

export default Ember.Controller.extend({
  info: {},

  mondayform: false,

  // fullNameChanged: Ember.observer('info.close', function() {
  //   // deal with the change
  //   console.log(`fullName changed to: ${this.get('fullName')}`);
  // })
  // numberOfUsers: Ember.computed.alias('model.users.length'),
  actions: {

    poster() {
      let inf = this.get('info');
      let sched = this.store.createRecord('schedule', {
       day: inf.day,
       open: inf.open,
       close: inf.close,
       lunchclose: inf.lunchclose,
       lunchopen: inf.lunchopen,
       closed: inf.closed
     });
     sched.save().then(() => {
       this.set('responseMessage', `Scheduled! ${this.get('info').day} -  ${this.get('info').open} to ${this.get('info').close}`);
       this.set('info', {});
     });
    },

    delete(schedule) {
      let confirmation = confirm('Are you sure?');
      if (confirmation) {
        schedule.deleteRecord();
        console.log(schedule.get('isDeleted'));
        schedule.save();
      }
    },

    monday() {
      this.toggleProperty('mondayform');
    },

    foo() {
      
    }
  }
});
