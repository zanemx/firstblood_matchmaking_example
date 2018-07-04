# Matchmaking Solution 1v1
Auto joins the to a "lobby" and searches for a reasonable match based on users MMR.  
A variable range value is used to query users. If no suitable user is found in said range  
the range is expanded by n and the search is run again.  
there's a maxRange var that could be modified by the user wait time.  
I wrote the code to be stupid simple.   
In a real world app, the code would be much more complex of course.  
## Getting Started
```
$ git clone https://github.com/zanemx/firstblood_matchmaking_example.git
$ cd firstblood_matchmaking_example
$ npm install
$ grunt
```
1 liner. copy & paste in console
```
git clone https://github.com/zanemx/firstblood_matchmaking_example.git && cd firstblood_matchmaking_example && npm install && grunt
```
The test run will..
* get random user from moc users array
* call POST - /match/join on local running express app (started on install)
* simulate a polling http client
* return a match of similar mmr if match found before polling stops

stdout example from finding a match
```
	Finding match for Korney (mmr 12517)
	Searching for match
	Match Found!
	Korney matched with Bax (mmr 12480)

		✓ POST to /match/find (44ms)

		1 passing (53ms)
```
## Contact
if you have any issues contact
[zanemx@gmail.com](mailto:zanemx@gmail.com)
