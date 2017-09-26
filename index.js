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
app.get('/api/family', main_ctrl.getFamily)
app.get('/api/family/:gender', main_ctrl.getFamily)
app.get('/api/restaurants', main_ctrl.getRestaurants)
app.get('/api/restaurants/:name', main_ctrl.getRestaurants)
app.put("/name", main_ctrl.putName);
app.put("/location", main_ctrl.putLocation);
app.post("/hobbies", main_ctrl.postHobbies);
app.post("/occupations", main_ctrl.postOccupations);
app.post("/family", main_ctrl.postFamily);
app.post("/restaurants", main_ctrl.postRestaurants);




app.listen(port, ()=>{
	console.log(`listening at port: ${port}`);
})