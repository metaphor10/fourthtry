/**
 * PizzasController
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
    Pizzas.create(paramObj, function pizzasCreated(err, pizzas) {

      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        }
        return res.redirect('/pizzas/new');
      }

      // res.json(pizzas);
      res.redirect('/pizzas/show/' + pizzas.id);

    });
  },

  show: function(req, res, next) {
    Pizzas.findOne(req.param('id'), function foundPizzas(err, pizzas) {
      if (err) return next(err);
      if (!pizzas) return next();

      // res.json(pizzas);
      res.view({
        pizzas: pizzas
      });
    });
  },

  index: function(req, res, next) {
    Pizzas.find(function foundPizzass(err, pizzass) {
      if (err) return next(err);
      
      res.view({
        pizzass: pizzass
      });
    });
  },

  edit: function(req, res, next) {

    Pizzas.findOne(req.param('id'), function foundPizzas(err, pizzas) {
      if (err) return next(err);
      if (!pizzas) return next('pizzas doesn\'t exist.');

      res.view({
        pizzas: pizzas
      });
    });
  },

  update: function(req, res, next) {

    var paramObj = {

      name: req.param('name'),

      desc: req.param('desc'),

    }

    Pizzas.update(req.param('id'), paramObj, function pizzasUpdated(err) {
      if (err) {
        console.log(err);

        req.session.flash = {
          err: err
        }

        return res.redirect('/pizzas/edit/' + req.param('id'));
      }

      res.redirect('/pizzas/show/' + req.param('id'));
    });
  },

  destroy: function(req, res, next) {

    Pizzas.findOne(req.param('id'), function foundPizzas(err, pizzas) {
      if (err) return next(err);

      if (!pizzas) return next('Pizzas doesn\'t exist.');

      Pizzas.destroy(req.param('id'), function pizzasDestroyed(err) {
        if (err) return next(err);
    });        

      res.redirect('/pizzas');

    });
  }
 

};

