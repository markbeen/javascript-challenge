// from data.js
var tableData = data;

// Select the submit button
var filter_btn = d3.select("#filter-btn");
var full_btn = d3.select("#full-btn");

var	tbody = d3.select('tbody');
var columns =["datetime","city","state","country","shape","durationMinutes","comments"];

var rows = tbody.selectAll('tr')
              .data(tableData)
              .enter()
              .append('tr');
        
// create a cell in each row for each column
var cells = rows.selectAll('td')
              .data(function (row) {
                return columns.map(function (column) {
                  return {column: column, value: row[column]};
                });
              })
              .enter()
              .append('td')
              .text(function (d) { return d.value; });


// update the table
function update_table(data){
 // Update the table
    tbody.selectAll('tr').remove();
    var rows = tbody.selectAll('tr')
             .data(data)
             .enter()
             .append('tr');
       
 // create a cell in each row for each column
    var cells = rows.selectAll('td')
             .data(function (row) {
               return columns.map(function (column) {
                 return {column: column, value: row[column]};
               });
             })
             .enter()
             .append('td')
             .text(function (d) { return d.value; });
 
}


filter_btn.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var selected = d3.select("#d3-dropdown").node().value;
    console.log(selected);


  // console.log(selected);
    if (selected == "first") {
      var filteredData = tableData.filter(record => record.datetime === inputValue);
        console.log(selected)
    } 
    else if (selected == "second") {
      var filteredData = tableData.filter(record => record.city === inputValue);
        console.log(selected)
    } 
    else if (selected == "third") {
      var filteredData = tableData.filter(record => record.state === inputValue);
    } 
    else if (selected == "fourth") {
      var filteredData = tableData.filter(record => record.country === inputValue);
    } 
    else if (selected == "fifth") {
      var filteredData = tableData.filter(record => record.shape === inputValue);
    }


    update_table(filteredData);
});

d3.select("#selected-dropdown").text("first");

