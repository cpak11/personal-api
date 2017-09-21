const express = require('express');
const bodyParser = require('body-parser');
const port = 3200;
const app = express();

app.use(bodyParser.json())
app.use((req, res, next)=>{
	req.body;
	res.body;
	next.body;
	next();
});

var main_ctrl = require('./controllers/main_ctrl')

app.get('/api/name', main_ctrl.getName)
app.get('/api/location', main_ctrl.getLocation)
app.get('/api/occupation', main_ctrl.getOccupations)
app.get('/api/occupation/:latest', main_ctrl.getOccupationsLatest)
app.get('/api/hobbies', main_ctrl.getHobbies)
app.get('/api/hobbies/:type', main_ctrl.getHobbiesType)






app.listen(port, ()=>{
	console.log(`listening at port: ${port}`);
})