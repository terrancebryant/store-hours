import Ember from 'ember';

export default Ember.Controller.extend({

  info: {},
  actions: {
    updateDay() {
      console.log('save user');
      let day = this.get('model');
      day.save().then(() => {
        this.transitionToRoute('application');
      });
    },

    clear() {
      this.set('info', {});
      this.transitionToRoute('application');
    }
  }
});
