// Definición del modelo de Comment con validación

module.exports = function(sequelize, DataTypes){
	return sequelize.define('Comment',
		{ texto: {
			type: DataTypes.STRING,
			validate: {notEmpty: {msg: "-> Falta Comentario"}}
		  },
		  publicado: {
		  	type: DataTypes.BOOLEAN,
		  	defaultValue: false
		  }
		},
	  	{
	   	classMethods: {
	      	countUnpublished: function () {
        		return this.count({where: ["publicado = ?", false]}).then(function(c){return c;});
      		},
	      	countCommentedQuizes: function () {
    	    	//return this.query("SELECT DISTINCT QuizId FROM COMMENTS").success(function(myTableRows){ 
    	    	//	console.log('myTableRows = '+myTableRows); return myTableRows; });
    	    	//return this.aggregate('QuizId', 'count',{ 'distinct': true }).then('success', function(count){return count;});
    	    	//return this.count({'group': 'QuizId'}).then(function(c) {return c;});
    	    	//return this.count({ distinct: 'QuizId' }).then(function(count) {return count;});
    	    	//return this.aggregate('QuizId', 'count', { distinct: true }).then(function(result){return result.count;});
    	    	return 0;
    	  	}
    	}
    });
}