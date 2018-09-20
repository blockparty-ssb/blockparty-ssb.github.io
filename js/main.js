const Handlebars = require('handlebars');
const fs = require('fs');
const jsonData = require('../content.json');
const pages = jsonData.pages;



var source = fs.readFileSync('../template/index.hbs', 'utf8', (err, htmlData) => {
	if (err) throw err;
});

function writeFiles(page) {
	var template = Handlebars.compile(source);
	var generatedHTML = template(page);
	fs.writeFileSync('../' + page.name + '.html', generatedHTML, 'utf8', (err) => {
		if (err) throw err;
		});
}

pages.forEach(function(page){
	writeFiles(page);
});






