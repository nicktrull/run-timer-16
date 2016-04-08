import Ember from 'ember';

export default Ember.Controller.extend({
  newRun() {
    const attributes = {
      date: this.date,
      time: this.time,
      notes: this.notes,
    };
    const url = `http://tiny-tn.herokuapp.com/collections/runs-nt`;

    fetch(url, {
      method: `POST`,
      headers: {
        Accept: `application/json`,
        'Content-type': `application/json`,
      },
      body: JSON.stringify(attributes),
    }).then((results) => results.json())
    .then(() => {
    this.transitionToRoute(`index`);
    this.clearForm();
    });
  },

  clearForm() {
    this.set(`date`, ``);
    this.set(`time`, ``);
    this.set(`notes`, ``);
  },
});
