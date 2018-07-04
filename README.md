# Matchmaking Solution 1v1
Auto joins the to a "lobby" and searches for a reasonable match based on users MMR.  
A variable range value is used to query users. If no suitable user is found in said range  
the range is expanded by n and the search is run again.  
There's a maxRange var that could be modified by the user wait time.  
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
The test will..
* call test 'post_match_find_test_count' times. (in test/user-join.spec.js)(can be changed)
* get random user from moc users array
* call POST - /match/join on local running express app (started on install)
* simulate a polling http client
* return a match of similar mmr if match found before polling stops

stdout example from finding a match
```
    testing (POST to /match/find) 3 times.

    Finding match for Spence (mmr 9915)
    Searching for match
    Match Found!
    Spence matched with Dominique (mmr 9796)

      ✓ POST to /match/find

    Finding match for Emilie (mmr 16206)
    Searching for match
    Match Found!
    Emilie matched with Nessi (mmr 16230)

      ✓ POST to /match/find

    Finding match for Bax (mmr 12480)
    Searching for match
    Match Found!
    Bax matched with Skyler (mmr 12457)

      ✓ POST to /match/find

      3 passing (45ms)
```
## Contact
if you have any issues contact
[zanemx@gmail.com](mailto:zanemx@gmail.com)
