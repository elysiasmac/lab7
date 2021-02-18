var projects = require('../projects.json');

/*
 * GET home page.
 */



exports.view = function(request, response){
  	response.render('index', projects);
};

exports.view = function(request,response) {
	projects["viewAlt"] = false; 
	res.render('index',projects); 
}; 

exports.viewAlt = function(request,response) {
	projects["viewAlt"] = true; 
	res.render('index',projects); 
};