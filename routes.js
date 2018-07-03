let users = require('./mocusers');
let _ = require('lodash');

module.exports = (app) => {

	// user fake login
	app.post('/user/login',(req,res,next) => {
		let id = req.body.id;
	});

	// params (user object);
	app.post('/match/find',(req,res,next) => {

		// find match for current user
		let id = req.body.id;
		let user = _.find(users,(user) => {
			return user.id == id;
		});

		let range = 0;
		let maxRange = 20000;
		let rangeIncrements = 10;

		let findMatch = (_user) => {
			let id = _user.id;
			let mmr = _user.mmr;
			let matches = [];
			while(matches.length<1){
				matches = _.filter(users,(match) => {
					return id != match.id && _.inRange(mmr,match.mmr - range,match.mmr + range);
				});
				range+=rangeIncrements;
			}
			return matches;
		}

		let matches = findMatch(user);
		let match = _.sample(matches);

		res.json(match);
	});
};
