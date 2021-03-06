let expect = require('chai').expect;
let assert = require('chai').assert;
let request = require('request');
let mocusers = require('./../mocusers');
let _ = require('lodash');

let post_match_find_test_count = 3;
let post_match_find = (done) => {
	// get random user from ./mocusers.js
	let user = _.sample(mocusers);

	assert(user.id > 0,'user.id must be > 0');

	console.log(`\nFinding match for ${user.first_name} (mmr ${user.mmr})`);

	let search = (cb) => {

		console.log("Searching for match");

		request.post({url:"http://localhost:8081/match/find",form:{id:user.id}},(err,res,body) => {

			assert(null == err,err);

			let match = JSON.parse(body);
			assert(null != match,'body must not be null');
			assert(match.id > 0,'match.id must be > 0');

			console.log("Match Found!");
			console.log(`${user.first_name} matched with ${match.first_name} (mmr ${match.mmr})\n`);

			cb(match);
		});
	};

	let callback = (match) => {
		if(match){
			done();
		}else{
			setTimeout(search,1000,callback);
		}
	};
	search(callback);
};

console.log(`testing (POST to /match/find) ${post_match_find_test_count} times.`);
for(let i =0;i < post_match_find_test_count;i++){
	it('POST to /match/find',post_match_find).timeout(10000);
}
