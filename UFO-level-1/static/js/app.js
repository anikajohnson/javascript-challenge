// from data.js
var tableData = data;

//Using the UFO dataset provided in the form of an array of JavaScript objects, 
//write code that appends a table to your web page 
//and then adds new rows of data for each UFO sighting.

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop Through data 
tableData.forEach((ufoSighting) => {
    // append one table row `tr` for each ufo sighting object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each ufo sighting value 
    Object.entries(ufoSighting).forEach(([key, value]) => {
      // Append a cell to the row for each value in the ufo sighting object
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
// Use a date form in your HTML document and
// write JavaScript code that will listen for events 
// and search through the `date/time` column to find rows that match user input.
// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue);

  console.log(filteredData);
});