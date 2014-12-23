//var Pizza= require ('../../api/models/Pizza');

var SiteController = require('../../api/controllers/SiteController'),
    request = require('supertest'),
    sinon = require('sinon'),
    assert = require('assert');
var agent = request.agent('http://127.0.0.1:3003');


describe('New Stream', function () {

//    before(function(done){
//        agent
//            .post('/stream')
//            .send({name: 'test', description: 'test'})
//            .end(function(err, res) {
//                if (err) return done(err);
//
//                done();
//            });
//    })

    describe('when we create new stream', function () {
        it ('should create stream', function (done) {

            agent
                .post('/site/create')
                .send({name: 'test', desc: 'test'})
                .end(function(err, res) {
                    if (err) return done(err);

                    done();
//                    StreamController.show(null, {
////                        id`
//                        view: view
//                    });
//                    assert.ok(view.called);
                });
//            var view = sinon.spy();
//            StreamController.create({param: {name : 'test', description : 'test'}}, {
//                view: view
//            });
//            assert.ok(view.called);
        });
    });
});

describe('The Site Controller', function () {
  describe('when we load the about page', function () {
    it ('should render the view', function () {
      var view = sinon.spy();
      SiteController.index(null, {
        view: view
      });
      assert.ok(view.called);
    });
  });
});
