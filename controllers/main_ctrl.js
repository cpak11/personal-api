var user = require('../user');


const getName = (req, res, next)=>{
	res.json({name: user.name})

}
const getLocation = (req, res, next)=>{
	res.json({location: user.location})
}
const getOccupations = (req, res, next)=>{
	if(req.query.order === 'asc'){return user.occupations.sort()}
	else if(req.query.order === 'desc'){return user.occupations.sort().reverse}
	res.json({occupations: user.occupations})
}
const getOccupationsLatest = (req, res, next)=>{
	res.json({latestOccupation: user.occupations[user.occupations.length - 1]})
}
const getHobbies = (req, res, next)=>{
	res.json({hobbies: user.hobbies})
}
const getHobbiesType = (req, res, next)=>{	
	res.json(user.hobbies.filter(hobbies=>hobbies.type===req.params.type))	
}
const getFamily = (req,res,next)=>{
	if(parseInt(req.query.gender)){
		var result=user.filter(function(uuser){
			return uuser.gender === gender;
		})
		res.json(result)
	}
	return res.json({family: user.family})
}
const getRestaurants = (req,res,next)=>{
	if(parseInt(req.query.restaurants)){
		var result=user.filter(function(usr){
			return usr.restaurants === restaurants;
		})
		res.json(result)
	}	
	return res.json({restaurants: user.restaurants});
}


const putName = function(req, res, next) {
  user.name = req.body.name;
  res.json({name: user.name});
};
const putLocation = function(req, res, next) {
  user.location = req.body.location;
  res.json({location: user.location});
};
const postHobbies = function(req, res, next) {
  user.hobbies.push(req.body.hobby);
  res.json({hobbies: user.hobbies});
};

const postOccupations = function(req, res, next) {
  user.occupations.push(req.body.occupation);
  res.json({occupations: user.occupations});
};
const postFamily = function(req, res, next) {
  user.family.push(req.body.family);
  res.json({family: user.family});
};
const postRestaurants = function(req, res, next) {
  user.restaurants.push(req.body.restaurant);
  res.json({restaurants: user.restaurants});
};


module.exports = {
	getName,
	getLocation,
	getOccupations,
	getOccupationsLatest,
	getHobbies,
	getHobbiesType,
	getFamily,
	getRestaurants,
	putName,
	putLocation,
	postHobbies,
	postOccupations,
	postFamily,
	postRestaurants,
	
}