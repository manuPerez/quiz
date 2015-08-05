var models = require('../models/models.js');

// GET /quizes/:quizId/comments/new
exports.new = function(req, res){
	res.render('comments/new.ejs', { quizid: req.params.quizId, errors: [] });
};

// POST /quizes/:quizId/comments
exports.create = function(req, res){
	var comment = models.Comment.build(
		{ texto: req.body.comment.texto,
		  QuizId: req.params.quizId }
		);

	var errors = comment.validate();

	if(errors){
		var i=0; 
		var errores = new Array();
		for (var prop in errors)
			errores[i++] = {message: errors[prop]};
		res.render('comments/new.ejs', { comment: comment, quizid: req.params.quizId, errors: errores });
	} else {
		//guarda en BD los campos pregunta y respuesta de quiz
		comment
		.save()
		.then(function(){res.redirect('/quizes/'+req.params.quizId);}); 
	} // redirección HTTP (URL relativo) lista de preguntas	
};