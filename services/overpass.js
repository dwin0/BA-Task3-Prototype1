var overpass = require('query-overpass');

function queryOverpass(callback) {
    var trainQuery = '[out:json][timeout:25];(way(47.2,8.7,47.3,8.9)["railway"="rail"]);out body;>;out skel qt;';
    var carQuery = '[out:json][timeout:25];(relation(47.22,8.8154,47.225,8.8155)["type"="route"]["route"="road"];);(._;>;);out body;>;';

    overpass(trainQuery, callback);
}

module.exports = queryOverpass;


//'[out:json];node(57.7,11.9,57.8,12.0)[amenity=bar];out;'
//'[out:json][timeout:25];node(57.7,11.9,57.8,12.0)[amenity=bar];out body; out skel qt;'

/*
 This has been generated by the overpass-turbo wizard.
 The original search was:
 “eisenbahn”
 */

/*
[out:json][timeout:25];
// gather results
(
    // query part for: “eisenbahn”
    way["railway"="rail"]({{bbox}});
);
// print results
out body;
>;
out skel qt;
*/




/*
 This has been generated by the overpass-turbo wizard.
 The original search was:
 “"Straßennetz"”
 */

//[out:json][timeout:25];
// gather results
//(
    // query part for: “"Straßennetz"”
//    relation["type"="route"]["route"="road"]({{bbox}});
//);
// print results
/*added by auto repair*/
//(._;>;);
/*end of auto repair*/
//out body;
//>;
