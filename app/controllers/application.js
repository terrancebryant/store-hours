import Ember from 'ember';

export default Ember.Controller.extend({
  info: {},

  actions: {
    delete(schedule) {
      let confirmation = confirm('Are you sure?');
      if (confirmation) {
        schedule.deleteRecord();
        console.log(schedule.get('isDeleted'));
        schedule.save();
      }
    }
  }
});
