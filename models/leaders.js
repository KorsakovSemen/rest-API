const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var leadersSchema = mongoose.Schema({
     name:  {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    abbr:  {
        type: String,
        required: true
    },
    description:  {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    }
});


var Leaders = mongoose.model('Leader', leadersSchema);

module.exports = Leaders;