//<!-- jQuery for Reviews.html to create more cards reviews -->

// Function to add a new review card
function addReviewCard(name, rating, text) {
  var $newReview = $(`
    <div class="col-md-4">
     <div class="card review-card">
         <div class="card-body">
             <h5 class="card-title reviewer-name">${name}</h5>
             <div class="star-rating rating">${rating}</div>
             <p class="card-text review-text">"${text}"</p>
         </div>
     </div>
     </div>`);

  $('.review-container').append($newReview);
 }



// Handle form submission
$('#review-form').submit(function(event) {
    event.preventDefault(); // Prevent the default form submission

    var name = $('#name-input').val();
    var rating = $('#rating-input').val();
    var text = $('#review-input').val();

    // Add the new review card
    addReviewCard(name, rating, text);

    // Clear the form
    this.reset();
});
