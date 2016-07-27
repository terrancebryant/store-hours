import Ember from 'ember';

export default Ember.Controller.extend({
  info: {},

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
       this.transitionToRoute('application');
       this.set('info', {});
     });
    }
  }
});
