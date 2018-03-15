// ===== TEAM.JS ======
// ===== date:       ======
// define Schema
const mongoose   = require('mongoose');
const Schema     = mongoose.Schema; 

const TeamSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "name is required"], 
        unique: true, 
        minlength: 2 },
    position: {
        type: String },
    game: {
        1: {
            action: {
                playing: {type: Boolean, default: false},
                notplaying: {type: Boolean, default: false},
                undefined: {type: Boolean, default: true}
            }},
        2: {
            action: {
                playing: {type: Boolean, default: false},
                notplaying: {type: Boolean, default: false},
                undefined: {type: Boolean, default: true}
            }},
        3: {
            action: {
                playing: {type: Boolean, default: false},
                notplaying: {type: Boolean, default: false},
                undefined: {type: Boolean, default: true}
            }},
    } 
}, {timestamps: true });

// set model by passing his Schema
mongoose.model('Team',TeamSchema);

// stored model in variable
const Team = mongoose.model('Team');