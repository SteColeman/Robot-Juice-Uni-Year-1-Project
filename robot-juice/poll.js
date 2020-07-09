/*
** Defining Variables
*/
function poll_response() {
  var input = $(this);
  var btnDiv = $(this).parent().parent();
}

function poll_results_click_handler(event) {
  event.preventDefault();
  $(this).parent().parent().addClass('hidden');  //adding a hide elememt class to the radio button containing div
  document.getElementById('pollResponse'); //finding the response paragraph to the poll
  pollResponse.classList.remove("hidden"); //removing the hidden class from the paragraph
}

/**
 * Setup the page's JavaScript on load
 */
$(document).ready(function() {
  $('input.poll-btn').on('click', poll_results_click_handler); //click handler for the radio buttons
});
