import Ember from 'ember';

export default Ember.Controller.extend({
  removeRun(run) {
    const url = `http://tiny-tn.herokuapp.com/collections/runs-nt/${run._id}`;

    return fetch(url, {
      method: `DELETE`,
    });
  },
});
