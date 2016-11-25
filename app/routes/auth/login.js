import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    doLogin() {
      alert("Login attempted");
    }
  },
  model() {
    return {
      email: '',
      password: ''
    };
  }
});
