var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var models = {
	poke:{ 
        id:{type:String},
        name:{type:String},
        position:{type:String},
        classify: {type:String},
        strive: {type:new Array},
        egg: {type:new Array},
        period: {type:String},
        sex: {type:new Array},
        catch: {type:String},
        fullx_ex: {type:String},
        basic_ex: {type:String},
        battle_ex: {type:String},
        nature: {type:new Array},
        race : {type:new Array},
        features : {type:new Array},
        hide_features : {type:new Array},
        weight :  {type:String},
        height :  {type:String}
    }
}

for(var m in models){ 
    mongoose.model(m,new Schema(models[m]));
}

module.exports={
	getModel: function(type){
		return _getModel(type);	
	}
};


var _getModel = function(type){

    return mongoose.model(type);
};