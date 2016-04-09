import Ember from 'ember';

export default Ember.Controller.extend({
  editRun() {
    const attributes = this.model;
    const myUrl = `http://tiny-tn.herokuapp.com/collections/runs-nt/${attributes._id}`;

    fetch(myUrl, {
      method: `PUT`,
      headers: {
        Accept: `application/json`,
        'Content-type': `application/json`,
      },
      body: JSON.stringify(attributes),
    }).then((results) => results.json())
    .then((data) => {
    this.transitionToRoute(`run-detail`, data._id);
    this.clearForm();
    });
  },

  clearForm() {
    this.set(`date`, ``);
    this.set(`time`, ``);
    this.set(`notes`, ``);
  },
});
