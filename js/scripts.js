function Ticket(movie, time, age) {
  this.movieName = movie;
  this.movieTime = time;
  this.viewerAge = age;
}

// Ticket.prototype.priceCalc = function(ticket) {
//   var ticketPrice = 15;
//
//   if (ticket.viewerAge === "Child") {
//     var ticketPrice = 5;
//   } else if (ticket.viewerAge === "Senior") {
//     var ticketPrice = 10;
//   }
// }

var testTicket = new Ticket("Fury", "10:00 am", "Child");

function priceCalc(ticket) {
  var ticketPrice = 15;

  if (ticket.viewerAge === "Child") {
    var ticketPrice = 5;
    return ticketPrice;
  } else if (ticket.viewerAge === "Senior") {
    var ticketPrice = 10;
    return ticketPrice;
  }
}






$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault;

    var inputtedMovie = $("#movie-name option:selected").val();
    var inputtedTime = $("#movie-time option:selected").val();
    var inputtedAge = $("#viewer-age option:selected").val();

    var newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);

    alert(priceCalc(newTicket));


  });
});
