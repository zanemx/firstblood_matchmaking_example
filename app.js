const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
let _ = require('lodash');
const mocUsers = require('./mocusers');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/match/find',(req,res,next) => {

	// Gets random user from mocUsers
	let id = req.body.id;
	let user = _.find(mocUsers,(user) => {
		return user.id == id;
	});

	let range = 0;// range threshold starts at 0 and increments rangeIncrements each interation
	let maxRange = 20000;// max
	let rangeIncrements = 10;

	let findMatch = (_user) => {
		let id = _user.id;
		let mmr = _user.mmr;
		let matches = [];

		let filterUsersOnRange = (match) => {
			let lower = Math.max(match.mmr - range,0);// lower range limit. not < 0
			let upper = Math.min(match.mmr + range,maxRange);// upper range limit. not > maxRange
			return id != match.id && _.inRange(mmr,lower,upper);
		};

		while(matches.length<1){
			matches = _.filter(mocUsers,filterUsersOnRange);
			range+=rangeIncrements;
			if(range>maxRange)return null;
		}

		return matches;
	};

	let matches = findMatch(user);
	if(!matches)return res.json(JSON.stringify({success:false,error:{msg:"match not found"}}));
	let match = _.sample(matches);

	res.json(match);
});

const port = 8081;
app.listen(port,()=>{
	console.log(`server started on port ${port}`);
});
