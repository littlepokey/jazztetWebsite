// Global Vars
var region_name = "";
var ip = "Init Data";
var country_code = "Init Data";
var country_name = "Init Data";
var region_name = 'Init Data';
var pagename = 'Init Data';
var WindowH = 'Init Data';
var WindowW = 'Init Data';


var airtable_write_endpoint = "https://api.airtable.com/v0/appZAJ6dHd1kPPBTv/ClientLogging?api_key=keycXj4YSD4WZj9gy"
var airtable_read_endpoint  = "https://api.airtable.com/v0/appZAJ6dHd1kPPBTv/ClientLogging?maxRecords=3&view=Grid%20view?api_key=keycXj4YSD4WZj9gy"


function getClientInfo (callback) {
	$.getJSON('//freegeoip.net/json/?callback=?', function(data) {
		
		// console.log(JSON.stringify(data, null, 2));
		var obj = JSON.parse(JSON.stringify(data, null, 2));
		var d = new Date();
		
		// assign data to local vars
		region_name = obj.region_name;
		ip = obj.ip;
		country_code = obj.country_code;
		country_name = obj.country_name;
		pagename = window.location.pathname;
        
        WindowH = window.screen.height;
        WindowW = window.screen.width;
		
		// logging
		console.log("ip =" + ip );
		console.log("region_name =" + region_name );
		console.log("country_name =" + country_name );
		console.log("Date =" + d );
			callback();
	});
}

function writeData() {
	// logging
	console.log("writing data to airtable");

	// POST the data
  axios.post(airtable_write_endpoint, {
    "fields": {
      "ip": ip,
			"region_name": region_name,
			"pagename": pagename,
            //"WindowH": WindowH,
            //"WindowW": WindowW,
			"country_name": country_name
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

$( document ).ready(function() {
	console.log( "Set Event Handler" );
	getClientInfo(writeData);
});
	
function getDataAndBuild() {
  
	// not being used. For reference only (and not sure it works) 
  console.log("Getting data");
  axios
    .get(airtable_read_endpoint)
    .then(function(result) {
      console.log( JSON.stringify(result));
})
};


