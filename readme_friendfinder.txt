Friend Finder - Node and Express Servers MySQL


Overview

In this activity, we were asked to build a compatibility-based "FriendFinder" application; something akin to a dating app. This full-stack exercise takes in results from a user's survey, then compares those answers with pre-configured characters from a popular fictional television series. The app then displays the name and picture (along with a description) of the user with the best overall match.

Express.js was implemented to handle routing. Also, because the application requires the use of 

Make sure you deploy your app to Heroku so other users can fill it out.



Before You Begin



Create a folder called FriendFinder. Inside the folder, organize your directories so it matches the following:

[ *** use nodetree npm ??? ]

npm install --save nodetree

var nodetree = require('nodetree');
nodetree(process.cwd());
With all options set:

var nodetree = require('nodetree');
nodetree(process.cwd(), {
  all: false,
  directories: false,
  level: 2,
  prune: false,
  noreport: false
});



FriendFinder
  - app
    - data
      - friends.js
    - public
      - home.html
      - survey.html
    - routing
      - apiRoutes.js
      - htmlRoutes.js
  - node_modules
  - package.json
  - server.js
