function getDate() {
	let date = new Date().toUTCString().slice(0, 11);
	document.getElementById("date").innerHTML = date;
}

function getIPLTeams(needle) {
	let findNaN = needle !== needle;
	let indexOf;

	if (!findNaN && typeof Array.prototype.indexOf === "function") {
		indexOf = Array.prototype.indexOf;
	} else {
		indexOf = function(needle) {
			let i = -1,
				index = -1;

			for (i = 0; i < this.length; i++) {
				let item = this[i];

				if ((findNaN && item !== item) || item === needle) {
					index = i;
					break;
				}
			}

			return index;
		};
	}
	return indexOf.call(this, needle) > -1;
}

function getAllSchedule() {
	let response;
	let URL = "http://cricapi.com/matches?apikey=tALvtTAPmnZxXmQ1hN7gIn7pjfs2";
	let ipl_teams = [
		"Chennai Super Kings",
		"Rajasthan Royals",
		"Delhi Capitals",
		"Mumbai Indians",
		"Royal Challengers Banglore",
		"Sunrisers Hyderabad",
		"Kolkata Knight Riders",
		"Kings XI Punjab"
	];

	console.log("Hello, I'm here!!");
	response = {
		matches: [
			{
				unique_id: 1175356,
				date: "2019-03-23T00:00:00.000Z",
				dateTimeGMT: "2019-03-23T14:30:00.000Z",
				"team-1": "Chennai Super Kings",
				"team-2": "Royal Challengers Bangalore",
				type: "Twenty20",
				squad: true,
				toss_winner_team: "Chennai Super Kings",
				winner_team: "Chennai Super Kings",
				matchStarted: true
			},
			{
				unique_id: 1157624,
				date: "2019-03-23T00:00:00.000Z",
				dateTimeGMT: "2019-03-23T11:30:00.000Z",
				"team-1": "Warriors",
				"team-2": "Cape Cobras",
				type: "ListA",
				squad: true,
				toss_winner_team: "Cape Cobras",
				winner_team: "Warriors",
				matchStarted: true
			},
			{
				unique_id: 1157625,
				date: "2019-03-23T00:00:00.000Z",
				dateTimeGMT: "2019-03-23T11:30:00.000Z",
				"team-1": "Knights",
				"team-2": "Titans",
				type: "ListA",
				squad: true,
				toss_winner_team: "Titans",
				winner_team: "Knights",
				matchStarted: true
			},
			{
				unique_id: 1157626,
				date: "2019-03-23T00:00:00.000Z",
				dateTimeGMT: "2019-03-23T11:30:00.000Z",
				"team-1": "Lions",
				"team-2": "Dolphins",
				type: "ListA",
				squad: true,
				toss_winner_team: "Dolphins",
				matchStarted: true
			},
			{
				unique_id: 1176795,
				date: "2019-03-23T00:00:00.000Z",
				dateTimeGMT: "2019-03-23T03:45:00.000Z",
				"team-1": "Papua New Guinea",
				"team-2": "Philippines",
				type: "T20I",
				squad: true,
				toss_winner_team: "Papua New Guinea",
				matchStarted: true
			},
			{
				unique_id: 1176796,
				date: "2019-03-23T00:00:00.000Z",
				dateTimeGMT: "2019-03-23T23:30:00.000Z",
				"team-1": "Philippines",
				"team-2": "Vanuatu",
				type: "T20I",
				squad: true,
				toss_winner_team: "Vanuatu",
				winner_team: "Philippines",
				matchStarted: true
			},
			{
				unique_id: 1177767,
				date: "2019-03-23T00:00:00.000Z",
				dateTimeGMT: "2019-03-23T03:00:00.000Z",
				"team-1": "Brothers Union",
				"team-2": "Bangladesh Krira Shikkha Protisthan",
				type: "ListA",
				squad: true,
				toss_winner_team: "Bangladesh Krira Shikkha Protisthan",
				winner_team: "Bangladesh Krira Shikkha Protisthan",
				matchStarted: true
			},
			{
				unique_id: 1144174,
				date: "2019-03-24T00:00:00.000Z",
				dateTimeGMT: "2019-03-24T12:30:00.000Z",
				"team-1": "South Africa",
				"team-2": "Sri Lanka",
				type: "T20I",
				squad: true,
				matchStarted: false
			},
			{
				unique_id: 1175357,
				date: "2019-03-24T00:00:00.000Z",
				dateTimeGMT: "2019-03-24T10:30:00.000Z",
				"team-1": "Kolkata Knight Riders",
				"team-2": "Sunrisers Hyderabad",
				type: "Twenty20",
				squad: true,
				matchStarted: false
			},
			{
				unique_id: 1175358,
				date: "2019-03-24T00:00:00.000Z",
				dateTimeGMT: "2019-03-24T14:30:00.000Z",
				"team-1": "Mumbai Indians",
				"team-2": "Delhi Capitals",
				type: "Twenty20",
				squad: true,
				matchStarted: false
			},
			{
				unique_id: 1176797,
				date: "2019-03-24T00:00:00.000Z",
				dateTimeGMT: "2019-03-24T03:45:00.000Z",
				"team-1": "Papua New Guinea",
				"team-2": "Vanuatu",
				type: "T20I",
				squad: true,
				toss_winner_team: "Vanuatu",
				winner_team: "Papua New Guinea",
				matchStarted: true
			},
			{
				unique_id: 1177526,
				date: "2019-03-24T00:00:00.000Z",
				dateTimeGMT: "2019-03-24T06:00:00.000Z",
				"team-1": "United Arab Emirates XI",
				"team-2": "United States of America",
				type: "",
				squad: false,
				matchStarted: true
			},
			{
				unique_id: 1174239,
				date: "2019-03-24T00:00:00.000Z",
				dateTimeGMT: "2019-03-24T11:00:00.000Z",
				"team-1": "Australia",
				"team-2": "Pakistan",
				type: "ODI",
				squad: true,
				matchStarted: false
			},
			{
				unique_id: 1175359,
				date: "2019-03-25T00:00:00.000Z",
				dateTimeGMT: "2019-03-25T14:30:00.000Z",
				"team-1": "Rajasthan Royals",
				"team-2": "Kings XI Punjab",
				type: "Twenty20",
				squad: true,
				matchStarted: false
			},
			{
				unique_id: 1177527,
				date: "2019-03-25T00:00:00.000Z",
				dateTimeGMT: "2019-03-25T06:00:00.000Z",
				"team-1": "UAE Men's 1",
				"team-2": "United States of America",
				type: "",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1175360,
				date: "2019-03-26T00:00:00.000Z",
				dateTimeGMT: "2019-03-26T14:30:00.000Z",
				"team-1": "Delhi Capitals",
				"team-2": "Chennai Super Kings",
				type: "Twenty20",
				squad: true,
				matchStarted: false
			},
			{
				unique_id: 1175361,
				date: "2019-03-27T00:00:00.000Z",
				dateTimeGMT: "2019-03-27T14:30:00.000Z",
				"team-1": "Kolkata Knight Riders",
				"team-2": "Kings XI Punjab",
				type: "Twenty20",
				squad: true,
				matchStarted: false
			},
			{
				unique_id: 1157627,
				date: "2019-03-27T00:00:00.000Z",
				dateTimeGMT: "2019-03-27T11:30:00.000Z",
				"team-1": "Titans",
				"team-2": "Cape Cobras",
				type: "ListA",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1174240,
				date: "2019-03-27T00:00:00.000Z",
				dateTimeGMT: "2019-03-27T11:00:00.000Z",
				"team-1": "Australia",
				"team-2": "Pakistan",
				type: "ODI",
				squad: true,
				matchStarted: false
			},
			{
				unique_id: 1175362,
				date: "2019-03-28T00:00:00.000Z",
				dateTimeGMT: "2019-03-28T14:30:00.000Z",
				"team-1": "Royal Challengers Bangalore",
				"team-2": "Mumbai Indians",
				type: "Twenty20",
				squad: true,
				matchStarted: false
			},
			{
				unique_id: 1157628,
				date: "2019-03-28T00:00:00.000Z",
				dateTimeGMT: "2019-03-28T11:30:00.000Z",
				"team-1": "Dolphins",
				"team-2": "Warriors",
				type: "ListA",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1175363,
				date: "2019-03-29T00:00:00.000Z",
				dateTimeGMT: "2019-03-29T14:30:00.000Z",
				"team-1": "Sunrisers Hyderabad",
				"team-2": "Rajasthan Royals",
				type: "Twenty20",
				squad: true,
				matchStarted: false
			},
			{
				unique_id: 1174241,
				date: "2019-03-29T00:00:00.000Z",
				dateTimeGMT: "2019-03-29T11:00:00.000Z",
				"team-1": "Australia",
				"team-2": "Pakistan",
				type: "ODI",
				squad: true,
				matchStarted: false
			},
			{
				unique_id: 1175364,
				date: "2019-03-30T00:00:00.000Z",
				dateTimeGMT: "2019-03-30T10:30:00.000Z",
				"team-1": "Kings XI Punjab",
				"team-2": "Mumbai Indians",
				type: "Twenty20",
				squad: true,
				matchStarted: false
			},
			{
				unique_id: 1175365,
				date: "2019-03-30T00:00:00.000Z",
				dateTimeGMT: "2019-03-30T14:30:00.000Z",
				"team-1": "Delhi Capitals",
				"team-2": "Kolkata Knight Riders",
				type: "Twenty20",
				squad: true,
				matchStarted: false
			},
			{
				unique_id: 1175366,
				date: "2019-03-31T00:00:00.000Z",
				dateTimeGMT: "2019-03-31T10:30:00.000Z",
				"team-1": "Sunrisers Hyderabad",
				"team-2": "Royal Challengers Bangalore",
				type: "Twenty20",
				squad: true,
				matchStarted: false
			},
			{
				unique_id: 1175367,
				date: "2019-03-31T00:00:00.000Z",
				dateTimeGMT: "2019-03-31T14:30:00.000Z",
				"team-1": "Chennai Super Kings",
				"team-2": "Rajasthan Royals",
				type: "Twenty20",
				squad: true,
				matchStarted: false
			},
			{
				unique_id: 1157629,
				date: "2019-03-31T00:00:00.000Z",
				dateTimeGMT: "2019-03-31T08:00:00.000Z",
				"team-1": "TBA",
				"team-2": "TBA",
				type: "ListA",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1174242,
				date: "2019-03-31T00:00:00.000Z",
				dateTimeGMT: "2019-03-31T11:00:00.000Z",
				"team-1": "Australia",
				"team-2": "Pakistan",
				type: "ODI",
				squad: true,
				matchStarted: false
			},
			{
				unique_id: 1175368,
				date: "2019-04-01T00:00:00.000Z",
				dateTimeGMT: "2019-04-01T14:30:00.000Z",
				"team-1": "Kings XI Punjab",
				"team-2": "Delhi Capitals",
				type: "Twenty20",
				squad: true,
				matchStarted: false
			},
			{
				unique_id: 1175369,
				date: "2019-04-02T00:00:00.000Z",
				dateTimeGMT: "2019-04-02T14:30:00.000Z",
				"team-1": "Rajasthan Royals",
				"team-2": "Royal Challengers Bangalore",
				type: "Twenty20",
				squad: true,
				matchStarted: false
			},
			{
				unique_id: 1175370,
				date: "2019-04-03T00:00:00.000Z",
				dateTimeGMT: "2019-04-03T14:30:00.000Z",
				"team-1": "Mumbai Indians",
				"team-2": "Chennai Super Kings",
				type: "Twenty20",
				squad: true,
				matchStarted: false
			},
			{
				unique_id: 1175371,
				date: "2019-04-04T00:00:00.000Z",
				dateTimeGMT: "2019-04-04T14:30:00.000Z",
				"team-1": "Delhi Capitals",
				"team-2": "Sunrisers Hyderabad",
				type: "Twenty20",
				squad: true,
				matchStarted: false
			},
			{
				unique_id: 1175372,
				date: "2019-04-05T00:00:00.000Z",
				dateTimeGMT: "2019-04-05T14:30:00.000Z",
				"team-1": "Royal Challengers Bangalore",
				"team-2": "Kolkata Knight Riders",
				type: "Twenty20",
				squad: true,
				matchStarted: false
			},
			{
				unique_id: 1144483,
				date: "2019-05-30T00:00:00.000Z",
				dateTimeGMT: "2019-05-30T09:30:00.000Z",
				"team-1": "England",
				"team-2": "South Africa",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144484,
				date: "2019-05-31T00:00:00.000Z",
				dateTimeGMT: "2019-05-31T09:30:00.000Z",
				"team-1": "Pakistan",
				"team-2": "West Indies",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144485,
				date: "2019-06-01T00:00:00.000Z",
				dateTimeGMT: "2019-06-01T09:30:00.000Z",
				"team-1": "New Zealand",
				"team-2": "Sri Lanka",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144486,
				date: "2019-06-01T00:00:00.000Z",
				dateTimeGMT: "2019-06-01T12:30:00.000Z",
				"team-1": "Afghanistan",
				"team-2": "Australia",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144487,
				date: "2019-06-02T00:00:00.000Z",
				dateTimeGMT: "2019-06-02T09:30:00.000Z",
				"team-1": "Bangladesh",
				"team-2": "South Africa",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144488,
				date: "2019-06-03T00:00:00.000Z",
				dateTimeGMT: "2019-06-03T09:30:00.000Z",
				"team-1": "England",
				"team-2": "Pakistan",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144489,
				date: "2019-06-04T00:00:00.000Z",
				dateTimeGMT: "2019-06-04T09:30:00.000Z",
				"team-1": "Afghanistan",
				"team-2": "Sri Lanka",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144490,
				date: "2019-06-05T00:00:00.000Z",
				dateTimeGMT: "2019-06-05T09:30:00.000Z",
				"team-1": "India",
				"team-2": "South Africa",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144491,
				date: "2019-06-05T00:00:00.000Z",
				dateTimeGMT: "2019-06-05T12:30:00.000Z",
				"team-1": "Bangladesh",
				"team-2": "New Zealand",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144492,
				date: "2019-06-06T00:00:00.000Z",
				dateTimeGMT: "2019-06-06T09:30:00.000Z",
				"team-1": "Australia",
				"team-2": "West Indies",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144493,
				date: "2019-06-07T00:00:00.000Z",
				dateTimeGMT: "2019-06-07T09:30:00.000Z",
				"team-1": "Pakistan",
				"team-2": "Sri Lanka",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144494,
				date: "2019-06-08T00:00:00.000Z",
				dateTimeGMT: "2019-06-08T09:30:00.000Z",
				"team-1": "England",
				"team-2": "Bangladesh",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144495,
				date: "2019-06-08T00:00:00.000Z",
				dateTimeGMT: "2019-06-08T12:30:00.000Z",
				"team-1": "Afghanistan",
				"team-2": "New Zealand",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144496,
				date: "2019-06-09T00:00:00.000Z",
				dateTimeGMT: "2019-06-09T09:30:00.000Z",
				"team-1": "Australia",
				"team-2": "India",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144497,
				date: "2019-06-10T00:00:00.000Z",
				dateTimeGMT: "2019-06-10T09:30:00.000Z",
				"team-1": "South Africa",
				"team-2": "West Indies",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144498,
				date: "2019-06-11T00:00:00.000Z",
				dateTimeGMT: "2019-06-11T09:30:00.000Z",
				"team-1": "Bangladesh",
				"team-2": "Sri Lanka",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144499,
				date: "2019-06-12T00:00:00.000Z",
				dateTimeGMT: "2019-06-12T09:30:00.000Z",
				"team-1": "Australia",
				"team-2": "Pakistan",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144500,
				date: "2019-06-13T00:00:00.000Z",
				dateTimeGMT: "2019-06-13T09:30:00.000Z",
				"team-1": "India",
				"team-2": "New Zealand",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144501,
				date: "2019-06-14T00:00:00.000Z",
				dateTimeGMT: "2019-06-14T09:30:00.000Z",
				"team-1": "England",
				"team-2": "West Indies",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144502,
				date: "2019-06-15T00:00:00.000Z",
				dateTimeGMT: "2019-06-15T09:30:00.000Z",
				"team-1": "Australia",
				"team-2": "Sri Lanka",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144503,
				date: "2019-06-15T00:00:00.000Z",
				dateTimeGMT: "2019-06-15T12:30:00.000Z",
				"team-1": "Afghanistan",
				"team-2": "South Africa",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144504,
				date: "2019-06-16T00:00:00.000Z",
				dateTimeGMT: "2019-06-16T09:30:00.000Z",
				"team-1": "India",
				"team-2": "Pakistan",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144505,
				date: "2019-06-17T00:00:00.000Z",
				dateTimeGMT: "2019-06-17T09:30:00.000Z",
				"team-1": "Bangladesh",
				"team-2": "West Indies",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144506,
				date: "2019-06-18T00:00:00.000Z",
				dateTimeGMT: "2019-06-18T09:30:00.000Z",
				"team-1": "Afghanistan",
				"team-2": "England",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144507,
				date: "2019-06-19T00:00:00.000Z",
				dateTimeGMT: "2019-06-19T09:30:00.000Z",
				"team-1": "New Zealand",
				"team-2": "South Africa",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144508,
				date: "2019-06-20T00:00:00.000Z",
				dateTimeGMT: "2019-06-20T09:30:00.000Z",
				"team-1": "Australia",
				"team-2": "Bangladesh",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144509,
				date: "2019-06-21T00:00:00.000Z",
				dateTimeGMT: "2019-06-21T09:30:00.000Z",
				"team-1": "England",
				"team-2": "Sri Lanka",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144510,
				date: "2019-06-22T00:00:00.000Z",
				dateTimeGMT: "2019-06-22T09:30:00.000Z",
				"team-1": "Afghanistan",
				"team-2": "India",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144511,
				date: "2019-06-22T00:00:00.000Z",
				dateTimeGMT: "2019-06-22T12:30:00.000Z",
				"team-1": "New Zealand",
				"team-2": "West Indies",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144512,
				date: "2019-06-23T00:00:00.000Z",
				dateTimeGMT: "2019-06-23T09:30:00.000Z",
				"team-1": "Pakistan",
				"team-2": "South Africa",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144513,
				date: "2019-06-24T00:00:00.000Z",
				dateTimeGMT: "2019-06-24T09:30:00.000Z",
				"team-1": "Afghanistan",
				"team-2": "Bangladesh",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144514,
				date: "2019-06-25T00:00:00.000Z",
				dateTimeGMT: "2019-06-25T09:30:00.000Z",
				"team-1": "England",
				"team-2": "Australia",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144515,
				date: "2019-06-26T00:00:00.000Z",
				dateTimeGMT: "2019-06-26T09:30:00.000Z",
				"team-1": "New Zealand",
				"team-2": "Pakistan",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144516,
				date: "2019-06-27T00:00:00.000Z",
				dateTimeGMT: "2019-06-27T09:30:00.000Z",
				"team-1": "India",
				"team-2": "West Indies",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144517,
				date: "2019-06-28T00:00:00.000Z",
				dateTimeGMT: "2019-06-28T09:30:00.000Z",
				"team-1": "South Africa",
				"team-2": "Sri Lanka",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144518,
				date: "2019-06-29T00:00:00.000Z",
				dateTimeGMT: "2019-06-29T09:30:00.000Z",
				"team-1": "Afghanistan",
				"team-2": "Pakistan",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144519,
				date: "2019-06-29T00:00:00.000Z",
				dateTimeGMT: "2019-06-29T12:30:00.000Z",
				"team-1": "Australia",
				"team-2": "New Zealand",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144520,
				date: "2019-06-30T00:00:00.000Z",
				dateTimeGMT: "2019-06-30T09:30:00.000Z",
				"team-1": "England",
				"team-2": "India",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144521,
				date: "2019-07-01T00:00:00.000Z",
				dateTimeGMT: "2019-07-01T09:30:00.000Z",
				"team-1": "Sri Lanka",
				"team-2": "West Indies",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144522,
				date: "2019-07-02T00:00:00.000Z",
				dateTimeGMT: "2019-07-02T09:30:00.000Z",
				"team-1": "Bangladesh",
				"team-2": "India",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144523,
				date: "2019-07-03T00:00:00.000Z",
				dateTimeGMT: "2019-07-03T09:30:00.000Z",
				"team-1": "England",
				"team-2": "New Zealand",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144524,
				date: "2019-07-04T00:00:00.000Z",
				dateTimeGMT: "2019-07-04T09:30:00.000Z",
				"team-1": "Afghanistan",
				"team-2": "West Indies",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144525,
				date: "2019-07-05T00:00:00.000Z",
				dateTimeGMT: "2019-07-05T12:30:00.000Z",
				"team-1": "Bangladesh",
				"team-2": "Pakistan",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144526,
				date: "2019-07-06T00:00:00.000Z",
				dateTimeGMT: "2019-07-06T09:30:00.000Z",
				"team-1": "India",
				"team-2": "Sri Lanka",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144527,
				date: "2019-07-06T00:00:00.000Z",
				dateTimeGMT: "2019-07-06T12:30:00.000Z",
				"team-1": "Australia",
				"team-2": "South Africa",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144528,
				date: "2019-07-09T00:00:00.000Z",
				dateTimeGMT: "2019-07-09T09:30:00.000Z",
				"team-1": "TBA",
				"team-2": "TBA",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144529,
				date: "2019-07-11T00:00:00.000Z",
				dateTimeGMT: "2019-07-11T09:30:00.000Z",
				"team-1": "TBA",
				"team-2": "TBA",
				type: "ODI",
				squad: false,
				matchStarted: false
			},
			{
				unique_id: 1144530,
				date: "2019-07-14T00:00:00.000Z",
				dateTimeGMT: "2019-07-14T09:30:00.000Z",
				"team-1": "TBA",
				"team-2": "TBA",
				type: "ODI",
				squad: false,
				matchStarted: false
			}
		],
		v: "1",
		ttl: 154,
		provider: {
			source: "Various",
			url: "https://cricapi.com/",
			pubDate: "2019-03-24T08:07:30.951Z"
		},
		creditsLeft: 250
	};

	// fetch(URL)
	// 	.then(res => res.json())
	// 	.then(data => (response = data))
	// 	.then(() => console.log(response));

	let ipl_schedule = response["matches"].filter(function(item) {
		return (
			getIPLTeams.call(ipl_teams, item["team-1"]) ||
			getIPLTeams.call(ipl_teams, item["team-2"])
		);
	});
	console.log("IPL Schedule", ipl_schedule);
	getTodaySchedule(ipl_schedule);
	getUpcomingSchedule(ipl_schedule);
}

function getImageFileName(team_name) {
	let team_split = team_name.split(" ");
	let image_path = "";
	for (i = 0; i < team_split.length; i++) {
		image_path += team_split[i];
	}
	return image_path + ".jpg";
}

function getISTTime(time_string) {
	let ist_time = String(new Date(time_string));
	return ist_time.slice(4, 10) + " " + ist_time.slice(16, 21);
}

function getTodaySchedule(ipl_matches) {
	let today_matches;
	today_matches = ipl_matches.filter(function(item) {
		return (
			item["dateTimeGMT"].slice(0, 10) ==
			new Date().toISOString().slice(0, 10)
		);
	});
	console.log("Todays Matches", today_matches);
	if (today_matches.length == 2) {
		(document.getElementById("match_1_team_1_img").src =
			"/static/img/" + getImageFileName(today_matches[0]["team-1"])),
			(document.getElementById("match_1_team_2_img").src =
				"/static/img/" + getImageFileName(today_matches[0]["team-2"])),
			(document.getElementById("match_2_team_1_img").src =
				"/static/img/" + getImageFileName(today_matches[1]["team-1"])),
			(document.getElementById("match_2_team_2_img").src =
				"/static/img/" + getImageFileName(today_matches[1]["team-2"]));
	} else if (today_matches.length == 1) {
		(document.getElementById("match_1_team_1_img").src =
			"/static/img/" + getImageFileName(today_matches[0]["team-1"])),
			(document.getElementById("match_1_team_2_img").src =
				"/static/img/" + getImageFileName(today_matches[0]["team-2"]));
	}
}

function getUpcomingSchedule(ipl_matches) {
	let upcoming_matches;
	let date = new Date();
	date.setDate(date.getDate() + 1);
	upcoming_matches = ipl_matches.filter(function(item) {
		return (
			item["dateTimeGMT"].slice(0, 10) == date.toISOString().slice(0, 10)
		);
	});
	if (upcoming_matches.length == 2) {
		(document.getElementById("upcoming_match_1_team_1_img").src =
			"/static/img/" + getImageFileName(upcoming_matches[0]["team-1"])),
			(document.getElementById("upcoming_match_1_team_2_img").src =
				"/static/img/" +
				getImageFileName(upcoming_matches[0]["team-2"])),
			(document.getElementById(
				"upcoming_match_1_timing"
			).innerHTML = getISTTime(upcoming_matches[0].dateTimeGMT)),
			(document.getElementById("upcoming_match_2_team_1_img").src =
				"/static/img/" +
				getImageFileName(upcoming_matches[1]["team-1"])),
			(document.getElementById("upcoming_match_2_team_2_img").src =
				"/static/img/" +
				getImageFileName(upcoming_matches[1]["team-2"]));
		document.getElementById(
			"upcoming_match_2_timing"
		).innerHTML = getISTTime(upcoming_matches[1].dateTimeGMT);
	} else if (upcoming_matches.length == 1) {
		(document.getElementById("upcoming_match_1_team_1_img").src =
			"/static/img/" + getImageFileName(upcoming_matches[0]["team-1"])),
			(document.getElementById("upcoming_match_1_team_2_img").src =
				"/static/img/" +
				getImageFileName(upcoming_matches[0]["team-2"])),
			(document.getElementById(
				"upcoming_match_1_timing"
			).innerHTML = getISTTime(upcoming_matches[0].dateTimeGMT));
	}
}
