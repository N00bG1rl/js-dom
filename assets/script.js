$(document).ready(function() {
  //declare the variables at the top of  your functions...it enables us to change them later
  var columnWidthCount = 16;
 
  function makeBoxes() {
    //boxcount lets us set how many times we want the for loop to run...when we change the columns/rows later this variable will be updated
    var boxCount = columnWidthCount * columnWidthCount;
  //
    for (var i = 0; i < boxCount; i++) { //loop through each box
    //any code you place in here will execute each time we loop around
      $("<div class='squares'></div>").appendTo('#board');
    }
    //we only want to declare this once so we place it after the loop
    $(".squares").width((600 / columnWidthCount) -2);
    $(".squares").height((600 / columnWidthCount) -2);
    $('.squares').hover(
      function() {
        $(this).addClass('hover');
      }
    );
  }
  //fire the initial function
  makeBoxes();
  // fire function after click
  $('#twoC').on("click", function() {
 
    $('div').remove('.squares');
    $('div').remove('.colorSquares');

    var squaresWide = prompt("Pick a grid size from 2 to 36.");
    if (squaresWide === null) {
      squaresWide = 16;
    }
    while(squaresWide > 36 || squaresWide < 2) {
      var squaresWide = prompt("Pick a grid size from 2 to 36.");
    }
     //prompt returns a string...use parseInt to turn that number string into an integer
    columnWidthCount = parseInt(squaresWide);
    
    makeBoxes();
  });
});

// Function to make rainbow color squares
function makeColorBoxes() {
  //boxcount lets us set how many times we want the for loop to run...when we change the columns/rows later this variable will be updated
  var colorBoxCount = columnWidthCount * columnWidthCount;
  
  for (var i = 0; i < colorBoxCount; i++) { //loop through each box
  //any code you place in here will execute each time we loop around
    $("<div class='colorSquares'></div>").appendTo('#board');
  }
  //we only want to declare this once so we place it after the loop
  $(".colorSquares").width((600 / columnWidthCount) -2);
  $(".colorSquares").height((600 / columnWidthCount) -2);
  $('.colorSquares').on('mouseover',function() {  // On mouse over make random color
    var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + 
    (Math.floor(Math.random() * 256)) + ',' + 
    (Math.floor(Math.random() * 256)) + ')';
    if(!this.classList.contains('colorHover')) { // Runs only when square doesn't have color yet
      $(this).addClass('colorHover');
      $(this).css('background',color); // Add color to background
    }
  });
};
// Random color button, run after click
$('#rainbow').on("click", function() {
  // Remove current squares
  $('div').remove('.squares');
  $('div').remove('.colorSquares');
// Asks how many squares to make
  var squaresWide = prompt("Enter grid size from 2 to 36.");
  if (squaresWide === null) { // If promt equal cancel, make standart squares
    squaresWide = 16;
  }
  while(squaresWide > 36 || squaresWide < 2) { // While prompt equal to big or to low numbers, keep asking
    var squaresWide = prompt("Enter grid size from 2 to 36.");
  }
   //prompt returns a string...use parseInt to turn that number string into an integer
  columnWidthCount = parseInt(squaresWide);
  // Calls function to run random color function
  makeColorBoxes();
});
