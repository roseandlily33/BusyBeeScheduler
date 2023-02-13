// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function(){


  let entries = [{time: 9,}, {time: 10}, {time:11}, {time: 12}, {time: 1}, {time: 2}, {time:3}, {time: 4}, {time: 5}];

  let currentHour = dayjs().hour();
  console.log(currentHour);
  
$(function () {
  //Time and Date Display with dayjs:
  var timeAndDate = dayjs().format('ddd MMM DD, YYYY  hh:mm:ss a');
  $('#currentDay').text(timeAndDate);
  //Current Hour:
   //Go through the times and display the colour 
 
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //$('.saveBtn').on('click', function(){
    
    //localStorage.setItem('planner', JSON.stringify(planner));
  //})
 // $('.time-block').on('click', function(){

  //})
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  for (i = 0; i < 9; i++){
    if(currentHour > i){
      $('div').children().attr('class', 'past');
    } else if (currentHour < i){
      $('div').children().attr('class', 'future');
    } else {
      $('div').children().attr('class', 'present');
    }
  }
  function createTimeSlots(){
    entries.forEach(entry => {
      $('.container-fluid').append(
        '<div id="hour-${entry.timeSlot}"
        class="row time-block ${pastPresentFuture(entry.timeSlot)}">
        <div class="col-2 col-md-1 hour text-center py-3">{</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>'
      )

    })

    })
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  function getElements(){
    var savedEntries = JSON.parse(localStorage(plannerEntries));
    if(savedEntries !== null){
      //.text = savedEntries; 
    }
  }
  
});
});