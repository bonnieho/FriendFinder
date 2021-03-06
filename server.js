
// setting dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
// Sets an initial port. We'll use this later in our listener
var port = process.env.PORT || 3000;


// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// setting the public directory as the default for serving up files
// kudos to La Puertoriquena Buena (Mariela Velez) for suggesting to precede the public path with 'app'!
app.use(express.static('app/public'));



// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/public/home.html"));
});



// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});

