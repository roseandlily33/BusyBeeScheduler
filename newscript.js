// Wrap all code that interacts with the DOM in a call to jQuery 
$(document).ready(function(){
    let currentHour = dayjs().hour();
    console.log(currentHour);
    //var entry = $('textarea');
    
  
  $(function () {
    //Time and Date Display with dayjs:
    var timeAndDate = dayjs().format('ddd MMM DD, YYYY  hh:mm:ss a');
    $('#currentDay').text(timeAndDate);
    
    //Goes through each of the time blocks and checks it against the currentHour to decide what colour it should be:
    for (i = 0; i < 9; i++){
        $('.time-block').each(function(){
            var blockHour = parseInt($(this).attr('id').split('-')[1]);
            if(blockHour < currentHour){
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

    //When the save button is clicked it stores contents of entry in localStorage with the hour:
    $('.saveBtn').on('click', function(){
        
        //entry = e.target.value;
        var entry = $(this).next().val();
        //I've tried: .children() - displays nothing in console.log, .children().children() - gives undefined at least, .find() -undefined, .next()-undefined, .siblings() -this really doesnt work, .parent()- nothing
        //I've tried e.target; entry = e.target.value;
        console.log(entry);
        var hour = $(this).val();
        console.log(hour);
        localStorage.setItem(entry, hour);
  
    })
    //Returns the saved elements from localStorage:
    function getElements(){
      var savedEntries = JSON.parse(localStorage(plannerEntries));
      if(savedEntries !== null){
        //.text = savedEntries; 
      }
    }
    
  });
  });