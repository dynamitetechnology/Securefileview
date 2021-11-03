const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const fs = require('fs');


const port = 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));


app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, '../uploads')));
app.use(express.static(__dirname + '../uploads'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(cookieParser('your-secret-dontknow'));

;(async function () {

	app.listen(port, function () {
		console.log('server started at ', port);
	})
})();


app.get('/',function(req, res, next){
	return res.render("index.ejs")
})


app.get('/showImage',function(req, res, next){
	
	let obj = ["lily-6388593_1920.jpg","logo2.png","logocolor.png","love-4696210_1920.jpg"]
	
	//let filepath  =  path.resolve(__dirname,'../uploads/')
	

	
	
	let paths = [];
	obj.forEach(function(item){
			
		let filepath  =  path.resolve(__dirname,'../uploads/'+item)
	
		paths.push(filepath)
	})
	
	console.log('filepath::::::::::>',paths)
	return res.json({status:true,filepath:paths});
})







