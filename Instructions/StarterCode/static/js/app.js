var tableData = data;

//utilize d3 to select the tbody
let tbody = d3.select("tbody");

//Create function that builds a table with the data
function table(data){
    tbody.html("");

	//append the rows(tr) and cells(td) for returned values
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
               
        Object.values(dataRow).forEach((val) => {
           let cell = row.append("td");
           cell.text(val);
       });
    })
}

//Create button function for filtering through returned data by datetime that is entered
function button(){
    d3.event.preventDefault();

    //create definitions for data value and the filtered data
    let dateValue = d3.select("#datetime").property("value");
    let filterData = tableData;

    //Create if statement to filter through the data by the entered date value
    if(dateValue) {
        filterData = filterData.filter((row) => row.datetime === dateValue);
    }

    //Create table with filtered Data
	table(filterData);
}


//Use d3 to call to the button click and present table
d3.selectAll("#filter-btn").on('click', button);
table(tableData);