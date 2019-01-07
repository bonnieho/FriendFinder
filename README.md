In this activity, you'll build a compatibility-based "FriendFinder" application -- basically a dating app. 

	This full-stack site will take in results from your users' surveys, 

	then compare their answers with those from other users. 

	The app will then display the name and picture of the user with the best overall match.


	You will use Express to handle routing. Make sure you deploy your app to Heroku so other users can fill it out.
	Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

	                    Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.

	                    Your htmlRoutes.js file should include two routes:
	                        A GET Route to /survey which should display the survey page.
	                        A default, catch-all route that leads to home.html which displays the home page.

	    Your apiRoutes.js file should contain two routes:
	                        A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
	        A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

	                    You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.
	                    The closest match will be the user with the least amount of difference.

	    Once you've found the current user's most compatible friend, display the result as a modal pop-up.
	        The modal should display both the name and picture of the closest match.
