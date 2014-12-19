//var Pizza= require ('../../api/models/Pizza');

var PizzaController = require('../../api/controllers/PizzaController'),
  sinon = require('sinon'),
  assert = require('assert');

describe('The About Controller', function () {
  describe('when we load the about page', function () {
    it ('should render the view', function () {
      var view = sinon.spy();
      PizzaController.index(null, {
        view: view
      });
      assert.ok(view.called);
    });
  });
});
