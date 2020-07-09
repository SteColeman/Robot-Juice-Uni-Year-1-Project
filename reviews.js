function load_reviews(list_item) {
  var list = list_item.find('ul');
  //call the json api link
  var promise = $.ajax('https://student.computing.edgehill.ac.uk/~walshd/cis1110api/product-reviews/bikeoil/');
  promise.done(function(data) {
    // code to generate html
    for (var idx = 0; idx < data.length; idx++) {
      list.append('<li>' + '<div class="review-img">' + "<img src='images/reviewicon1.jpg'/>" + '</div>' +
        '<div class="nick">' + data[idx].rating + '<p>' + data[idx].nickname + '</p>' + '</div>' +
        '<div class="review">' + data[idx].review + '</div>' + '</li>');
    }
  });
}

/**
 * Click event handler for the "Show reviews" button
 */
function show_reviews_click_handler(event) {
  event.preventDefault();
  var list_item = $(this).parent().parent();
   //call the load_reviews with the list_item
  load_reviews(list_item);
   //hide the show reviews button
  $(this).addClass('hidden');
  //show the 'hide reviews' button/remove the 'hidden' class from hide button
  $('button.hide-btn').removeClass('hidden');
}

/**
 * Click event handler for the "Hide reviews" links
 */
function hide_reviews_click_handler(event) {
  event.preventDefault();
  //hide the hide reviews button/add the 'hidden' class to button
  $(this).addClass('hidden');
  //show the show review button / remove 'hidden' class from show reviews button
  $('button.review-btn').removeClass('hidden');
}


/**
 * Setup the page's JavaScript on load
 */
$(document).ready(function() {
  $('button.review-btn').on('click', show_reviews_click_handler);
  $('button.hide-btn').on('click', hide_reviews_click_handler);
});
