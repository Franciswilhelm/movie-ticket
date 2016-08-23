function Ticket(movie, time, age) {
  this.movieName = movie;
  this.movieTime = time;
  this.viewerAge = age;
}

function viewerAgeDis(ticket) {
  var ticketPrice = 15;

  if (ticket.viewerAge === "Child") {
    var ticketPrice = 7;
    return ticketPrice;
  } else if (ticket.viewerAge === "Senior") {
    var ticketPrice = 10;
    return ticketPrice;
  } else {
    return ticketPrice;
  }
}

function movieTimeDis(ticket) {
  if (ticket.movieTime === "10:00 am" || ticket.movieTime === "12:05 pm") {
    var ticketPrice = viewerAgeDis(ticket) - 5;
    return ticketPrice;
  } else {
    return viewerAgeDis(ticket);
  }
}




$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    $("#cost-of-ticket").empty();

    var inputtedMovie = $("#movie-name option:selected").val();
    var inputtedTime = $("#movie-time option:selected").val();
    var inputtedAge = $("#viewer-age option:selected").val();

    var newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);

    $("div#cost-of-ticket").append("<h2>" + "$" + movieTimeDis(newTicket) + ".00" + "</h2>");

    $(".ticket-cost").show();

  });

});
