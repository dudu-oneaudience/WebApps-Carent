/**
 * Created by Dudu on 30/12/2015.
 */

// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var carSchema = new Schema({
    name: String
});

// define our car model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Car', carSchema );
