/**
 * PizzaController
 *
 * @description :: Server-side logic for managing Pizzas
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  'new': function(req,res){
    res.view();
  },

  create: function(req, res) {

    var paramObj = {

      name: req.param('name'),

      desc: req.param('desc'),

    }

    // Create a User with the params sent from
    // the sign-up form --> new.ejs
    Pizza.create(paramObj, function pizzaCreated(err, pizza) {

      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        }
        return res.redirect('/pizza/new');
      }

      // res.json(pizza);
      res.redirect('/pizza/show/' + pizza.id);

    });
  },

  show: function(req, res, next) {
    Pizza.findOne(req.param('id'), function foundPizza(err, pizza) {
      if (err) return next(err);
      if (!pizza) return next();

      // res.json(pizza);
      res.view({
        pizza: pizza
      });
    });
  },

  index: function(req, res, next) {
    Pizza.find(function foundPizzas(err, pizzas) {
      if (err) return next(err);

      res.view({
        pizzas: pizzas
      });
    });
  },

  edit: function(req, res, next) {

    Pizza.findOne(req.param('id'), function foundPizza(err, pizza) {
      if (err) return next(err);
      if (!pizza) return next('hello');

      res.view({
        pizza: pizza
      });
    });
  },

  update: function(req, res, next) {

    var paramObj = {

      name: req.param('name'),

      desc: req.param('desc'),

    }

    Pizza.update(req.param('id'), paramObj, function pizzaUpdated(err) {
      if (err) {
        console.log(err);

        req.session.flash = {
          err: err
        }

        return res.redirect('/pizza/edit/' + req.param('id'));
      }

      res.redirect('/pizza/show/' + req.param('id'));
    });
  },

  destroy: function(req, res, next) {

    Pizza.findOne(req.param('id'), function foundPizza(err, pizza) {
      if (err) return next(err);

      if (!pizza) return next('Pizza doesn\'t exist.');

      Pizza.destroy(req.param('id'), function pizzaDestroyed(err) {
        if (err) return next(err);
    });

      res.redirect('/pizza');

    });
  }


};

