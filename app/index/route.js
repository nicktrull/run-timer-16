import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const url = `http://tiny-tn.herokuapp.com/collections/runs-nt`;

    return fetch(url)
    .then((results) => results.json());
  },
});
