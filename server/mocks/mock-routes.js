/**
 * Stubbed Application routes
 */

'use strict';

var express = require('express');

var routerStub = express.Router();

function mockMongoId() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + s4() + s4() + s4() + s4();
}

routerStub.get('/todos', function (req, res) {
  // add timeout to test loading styles
  setTimeout(function () {
    return res.status(200).send([
      {"title": "Learn some stuff about Jenkins", "_id": mockMongoId(), "completed": true},
      {"title": "Completed lab 1", "_id": mockMongoId(), "completed": false}
    ]);
  }, 650);
});

routerStub.get('/todos/:id', function (req, res) {
  setTimeout(function () {
    var id = req.params.id;
    return res.status(200).send({
      "title": "Learn some stuff about Jenkins", "_id": id, "completed": true
    });
  }, 150);
});

routerStub.post('/todos', function (req, res) {
  setTimeout(function () {
    req.body._id = mockMongoId();
    return res.status(201).send(req.body);
  }, 170);
});

routerStub.put('/todos/:id', function (req, res) {
  setTimeout(function () {
    req.body._id = req.params.id;
    return res.status(200).send(req.body);
  }, 130);
});

routerStub.delete('/todos/:id', function (req, res) {
  setTimeout(function () {
    return res.status(204).send();
  }, 100);
});

module.exports = function(app) {
  app.use('/api', routerStub)
};
