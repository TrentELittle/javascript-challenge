// from data.js
var tableData = data;
console.log(tableData);

// table body reference
var tbody = d3.select("tbody");


//call to the values for UFO sightings
tableData.forEach(function(sighting) {
	console.log(sighting);
	var row = tbody.append("tr");

	//log each ufo sighting value
	Object.entries(sighting).forEach(function([key, value]) {
		console.log(key, value);
		var cell = row.append("td");
		cell.text(value);
	});
});

//click on the button 
var button = d3.select("#filter-btn");
button.on("click", funtion() {
	tbody.html("");

	//select input date and get the date, state, and shape of returned values
	var inputDate = d3.select("#datetime");
	var inputReturn = inputDate.property("value");
	console.log(inputReturn);

	//Filter datetime to equal the inputReturn
	var fileteredData = tableData.filter(sighting => sighting.datetime === inputReturn);
	console.log(fileteredData);

	fileteredData.forEach(function(results) {
		console.log(results);

		//append  the results one table row and cell for each result
		var tr = tbody.append("tr");
		Object.entries(results).forEach(function([key, value]) {
			console.log(key, value);
			var td = row.append("td");
			td.text(value)
		});

	});
});
