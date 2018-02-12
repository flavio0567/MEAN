// ===== ROUTES.JS ======
// ===== date:     ======
//
const path = require('path');
let task = require('../controllers/tasks.js');

module.exports = function(app) {
    app
    .get('/tasks', function(req, res){
        task.index(req, res)})
    .get('/tasks/:id', function(req, res){
        task.show(req, res, req.params.id)})
    .post('/tasks/:id', function(req, res){
        task.new(req, res)})
    .put('/tasks/:id', function(req, res){
        task.update(req, res)})
    .delete('/tasks/:id', function(req, res){
        task.delete(req, res, req.params.id)})

}