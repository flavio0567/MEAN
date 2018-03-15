// ===== ROUTES.JS ===========//
// ======date: 03-05-2018 ====//
// 
const path = require('path');
const team = require('../controllers/team.js');

module.exports = function(app){
    app
    .get('', (req, res) => {
        team.index(req, res)})
    .get('/players/list', (req, res) => {
        team.list(req, res)})
    .get('/player/show/:id', (req, res) => {
        team.show(req, res)})
    .post('/players/addplayer', (req, res) => {
        team.addplayer(req, res)})
    .post('/status/game/:id', (req, res) => {
        team.status(req, res)})
    .put('/player/update', (req, res) => {
        team.update(req, res)})
    .delete('/player/delete/:id', (req, res) => {
        team.destroy(req, res)})
    .all("*", (req, res) => { 
        res.sendFile(path.resolve('../team-manager/public/dist/index.html'))})
}