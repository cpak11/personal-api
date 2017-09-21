var user = require('../user');


const getName = (req, res, next)=>{
	res.json({name: user.name})

}
const getLocation = (req, res, next)=>{
	res.json({location: user.location})
}
const getOccupations = (req, res, next)=>{
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



module.exports = {
	getName,
	getLocation,
	getOccupations,
	getOccupationsLatest,
	getHobbies,
	getHobbiesType
}