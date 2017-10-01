
/*

Your apiRoutes.js file should contain two routes:
        A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
        A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

*/

// ===============================================================================
// LOAD DATA
// We are linking our route to a "data" source.
// Thisdata source holds an array of information on friendData
// ===============================================================================

// The follow line works with data in the js files
// This data is only persistent until the server is restarted
var friendData = require("../data/friends.js");

// testing 
// console.log(friendData);



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  
  // API GET Requests
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
      res.json(friendData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // when a user submits form data (a JSON object) it's then compared to the friendData array members' values

  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know who their match is.
    console.log(req.body);
/*
    Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
        With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
            Example:
                User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
                User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
                Total Difference: 2 + 1 + 2 = 5
        Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
        The closest match will be the user with the least amount of difference.
*/
	var userScores = [];
	for (i=0; i<req.body.scores.length; i++){
		userScores.push(parseInt(req.body.scores[i]));
	}

	var bff;
	var smallestDiff = 9999;
	for (i=0; i<friendData.length; i++){
		var friendScores = friendData[i].scores;
		var totalDifference = 0;
		for (j=0; j<userScores.length; j++) {
			totalDifference += Math.abs(userScores[j]-friendScores[j]);
		}
		if (totalDifference<smallestDiff){
			bff = friendData[i];
			smallestDiff = totalDifference;
		}
	}

	res.json(bff);
 
  });

  // ---------------------------------------------------------------------------
  // clears out the friendData array while working with the functionality.
  // Don"t worry about it!

  // app.post("/api/clear", function() {
    // Empty out the arrays of data
    // If using .json files and objects
    // friendData = [];


  // }); // close app.post

}; // function(app)




