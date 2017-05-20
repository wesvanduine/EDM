var config = {
    apiKey: "AIzaSyA3W0vj-jYmM0CsF4ciXUsgn9D2GYbiikM",
    authDomain: "coding-bootcamp-ec664.firebaseapp.com",
    databaseURL: "https://coding-bootcamp-ec664.firebaseio.com",
    projectId: "coding-bootcamp-ec664",
    storageBucket: "coding-bootcamp-ec664.appspot.com",
    messagingSenderId: "521194709538"
<<<<<<< HEAD
  };

  firebase.initializeApp(config);
  var database = firebase.database();
=======
};

firebase.initializeApp(config);
var database = firebase.database();
>>>>>>> 662a6459c56bbb0889002fd265af011b587a8ed9

$("#submit-button").on("click", function(event) {

  event.preventDefault();

  var employeeName = $("#employee-nameForm").val().trim();
  var employeeRole = $("#employee-roleForm").val().trim();
  var employeeStart = $("#employee-startForm").val().trim();
<<<<<<< HEAD
  var employeeRate = $("#employee-rateForm").val().trim();
=======
  var employeeMonths = moment().diff(moment(employeeStart), "months");
  var employeeRate = $("#employee-rateForm").val().trim();
  var totalBilled = employeeMonths * employeeRate;

  $("#employee-nameForm").val('');
  $("#employee-roleForm").val('');
  $("#employee-startForm").val('');
  $("#employee-rateForm").val('');
>>>>>>> 662a6459c56bbb0889002fd265af011b587a8ed9

  database.ref().push({
        name: employeeName,
        role: employeeRole,
        start: employeeStart,
        rate: employeeRate
  });

<<<<<<< HEAD


  var newRow = $("<tr>");
  newRow.html("<td>"+employeeName+"</td>"+"<td>"+employeeRole+"</td>"+"<td>"+employeeStart+"</td>"+"<td>"+"</td>"+"<td>"+employeeRate+"</td>"+"</td>"+"<td>");

  $("#table-body").prepend(newRow);

  $("#employee-nameForm").val('');
  $("#employee-roleForm").val('');
  $("#employee-startForm").val('');
  $("#employee-rateForm").val('');

}); // End of submit-button on click event
=======
  var newRow = $("<tr>");
  newRow.html("<td>"+employeeName+"</td>"+"<td>"+employeeRole+"</td>"+"<td>"+employeeStart+"</td>"+"<td>"+employeeMonths+"</td>"+"<td>"+employeeRate+"</td>"+"<td>"+totalBilled+"</td>");

  $("#table-body").prepend(newRow);

}); // End of submit-button on click event

// database.ref().on("child_added", function(snapshot) {

//   var employeeName = snapshot.val().name;
//   var employeeName = snapshot.val().role;
//   var employeeName = snapshot.val().start;
//   var employeeName = snapshot.val().rate;

// }); //End of .on child-added listener
>>>>>>> 662a6459c56bbb0889002fd265af011b587a8ed9
