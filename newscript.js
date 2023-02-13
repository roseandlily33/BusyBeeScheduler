// Wrap all code that interacts with the DOM in a call to jQuery 
$(document).ready(function(){
    let currentHour = dayjs().hour();
    console.log(currentHour);
    let time = currentHour;
  
  $(function () {
    //Time and Date Display with dayjs:
    var timeAndDate = dayjs().format('ddd MMM DD, YYYY  hh:mm:ss a');
    $('#currentDay').text(timeAndDate);
    
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. 
    for (i = 0; i < 9; i++){
        $('.time-block').each(function(){
            var blockHour = parseInt($(this).attr('id').split('-')[1]);
            if(blockHour > currentHour){
                $(this).addClass('past');
            }
            else if (blockHour === currentHour){
                $(this).removeClass('past');
                $(this).addClass('present');
            }
            else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        });
    };
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    $('.time-block').on('click', function(){
  
    })
    function getElements(){
      var savedEntries = JSON.parse(localStorage(plannerEntries));
      if(savedEntries !== null){
        //.text = savedEntries; 
      }
    }
    
  });
  });