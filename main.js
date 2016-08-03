import React from 'react'
import ReactDOM from 'react-dom'
import Table from './Table'
import Parse from 'parse'
Parse.initialize("kAIPiOA1A3FvQVhMCYfy1L2I4CluUW1DnpdmCrk9", "8eMpJyDNSVdRPdhh14oSjWrzvOfmKm2LMZBVp6J6");


var Query = Parse.Object.extend("Ship");
var query = new Parse.Query(Query);
	query.find({
	success: function(results) {
		ReactDOM.render(<Table data={results} />, document.getElementById("root"));
	},
	error: function(error) {
	 
	}
});
ReactDOM.render(<h1>Loading...</h1>, document.getElementById("root"));
