import Ember from 'ember';

export default Ember.Route.extend({
  model(url) {
    const myUrl = `http://tiny-tn.herokuapp.com/collections/runs-nt/${url._id}`;

    return fetch(myUrl)
    .then((results) => results.json());
  },
});
