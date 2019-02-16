# FriendFinder

Published site: [https://dexter-friend-finder.herokuapp.com/](https://dexter-friend-finder.herokuapp.com/)

## Overview

In this activity, a full-stack (two-page) web site was created as a compatibility-based "FriendFinder" application; essentially, a rudimentary dating app. The concept is to take in results input by a user into a simple survey and then compare those answers with profiles *(previously pre-populated by the author)* from other users. The result of that comparison will yield a modal containing the name, picture, and a brief introduction of the overall match based on the user's survey choices.

Express is used to handle routing, so this necessitated deployment to Heroku in order to allow users to access it in a live environment and complete the questionnaire portion. This survey has 10 questions - each on a scale of 1 to 5 - that relate to personality traits in order to determine the degree of compatibility with specific 'friends' currently stored as an array of objects in the friends.js file.

- - -

### Behind the Scenes of the App:

(graphic of file structure?)

Required npm packages, express, body-parser, and path are called by server.js.

The htmlRoutes.js file contains the following routes:

There is a GET Route to /survey that calls and renders the 'survey' page.

As well, there is a default (catch-all) route that leads to home.html which displays the 'home' page.




The apiRoutes.js file contains the following two routes:

A GET route with the url /api/friends that is used to (call?) display a JSON object of all possible friends.

A POST route /api/friends that is used to handle incoming survey results. This POST route also handles the compatibility logic embedded in the JSON data.



The application's data inside of app/data/friends.js was saved as an array of objects. Each of these objects should roughly follow the format below: (pic ?)

The closest match is the user with the least amount of difference.

(pic?) Once you've found the current user's most compatible friend, display the result as a modal pop-up.

The modal should display both the name and picture of the closest match.)

- - -

In this activity, you'll build a compatibility-based "FriendFinder" application -- basically a dating app. 

This full-stack site will take in results from your users' surveys, 

then compare their answers with those from other users. 

The app will then display the name and picture of the user with the best overall match.

Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.

- - -

#### Author's note:

This was one the the exercises originally assigned and completed in my full-stack coding bootcamp. Considering the limited amount of time that was available to each topic in this course, it had always been my intention to re-visit this offering to give it the spit-and-polish I felt it was worthy of!

- - - 


(c)2017-2019 __Bonnie Lynne Hoffman__ 

*toward the completion of The University of Texas at Austin Houston Coding Boot Camp Certificate - (June 2017 cohort)*