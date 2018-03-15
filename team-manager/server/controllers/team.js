// ===== TEAM.JS ======
// ===== date:       ======
//
const mongoose  = require('mongoose');
const Team   = mongoose.model('Team');

module.exports = { 

    index: (req, res) => {
        return res.redirect('/');
    },
    list: (req, res) => {
        Team.find({}).sort({ 'name': 1 }).exec((err, team) => {
            if(err){
                console.log(err);
                res.json({message: 'You got an error fetching' + err});
            }else{
                res.json(team);
            }
        })
    },
    addplayer: (req, res) => {
        Team.create(req.body.player)
            .then(team => res.json(team))
            .catch(error => console.log(error));
    },
    show: function(req, res) {
        console.log('show player: ', req.params.id);
        Team.findOne({_id: req.params.id})
        .then(player => res.json(player))
        .catch(error => console.log(error));
    },
    destroy: (req, res) => {
        Team.findByIdAndRemove({_id: req.params.id})
        .then(team => res.json(team))
        .catch(error => console.log(error));
    },
    update: (req, res) => {
        Team.findOneAndUpdate({_id: req.body._id}, { game: req.body.game } )
        .then(team => res.json(team))
        .catch(error => console.log(error));
    },
    status: (req, res) => {
        req.session._id = req.session._id;
        req.session.save;
        Team.findOne({_id: req.params.id})
        .then(team => res.json(team))
        .catch(error => console.log(error));
    }
    // likeTeam: function(req, res) {
    //     Team.update({_id: req.params.id}, { $inc: { likes: 1 } })
    //     .then(recipie => res.json(recipie))
    //     .catch(error => console.log(error));
    // }

}
