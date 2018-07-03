# Firstblood matchmaking notes

## Techs
	flightplan - for nodejs deployment. replacement for ftp
	supertest - http req testing without starting express
	moc user data from - https://mockaroo.com/
	swagger - for api docs (probably not needed for the demo)

## Keywords
	[MMR](https://dota2.gamepedia.com/Matchmaking_Rating)  
	aka - matchmaking rating


## Links
	Deploy nodejs the right way - as an upstart service (linux only)
	https://www.youtube.com/watch?v=BJZZnhGtR4A

## Functionality

	if a player with better MMR is currently in a match, should I estimate / extrapolate the delta till done?, probably only if there are 0 matches within said players MMR threshold.

	is the player active or idle

	if current user has lost their last few matches, increase the lower range mmr value

	use cron job for finding players

	cache players that have been paired with user for future reference

	
