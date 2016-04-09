import Ember from 'ember';

export default Ember.Route.extend({
  model(url) {
    return fetch(`http://tiny-tn.herokuapp.com/collections/runs-nt/${url._id}`)
    .then((results) => results.json());
  },
});
