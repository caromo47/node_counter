var express = require('express');
var path = require('path');
var session = require('express-session');


var app = express();

app.use(session({secret: 'codingdojorocks'}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
	if (!req.session.count){
		req.session.count = 0;
	}
	console.log(req.session.count);
	req.session.count++;
	console.log(req.session.count);
	var count = req.session.count
	console.log(count);
	res.render('index.ejs', {session: count});
})
app.post('/addtwo', (req,res)=>{
	if (!req.session.count){
		req.session.count = 0;
	}
	req.session.count ++;
	res.redirect('/');
});
app.post('/delete', (req,res)=>{
	if (!req.session.count){
		req.session.count = 0;
	}
	req.session.count = 0;
	res.redirect('/');
});
app.listen(7777, () => {
	console.log('listening on port 7777');
});
