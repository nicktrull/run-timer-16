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

  removeRun(run) {
    debugger;
    const url = `http://tiny-tn.herokuapp.com/collections/runs-nt/${run._id}`;
    if (window.confirm(`Are you sure you want to delete your run from ${run.date}?`)) {
      return fetch(url, {
        method: `DELETE`,
      }).then(() => {
        this.transitionToRoute(`index`);
        this.deleteRun();
      });
    }
  },

  deleteRun(run) {
    this.set(`model`, this.model.filter((curr) => {
      return curr !== run;
    }));
  },

  clearForm() {
    this.set(`date`, ``);
    this.set(`time`, ``);
    this.set(`notes`, ``);
  },
});
