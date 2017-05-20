var config = {
    apiKey: "AIzaSyA3W0vj-jYmM0CsF4ciXUsgn9D2GYbiikM",
    authDomain: "coding-bootcamp-ec664.firebaseapp.com",
    databaseURL: "https://coding-bootcamp-ec664.firebaseio.com",
    projectId: "coding-bootcamp-ec664",
    storageBucket: "coding-bootcamp-ec664.appspot.com",
    messagingSenderId: "521194709538"
  };

  firebase.initializeApp(config);
  var database = firebase.database();

$("#submit-button").on("click", function(event) {

  event.preventDefault();

  var employeeName = $("#employee-nameForm").val().trim();
  var employeeRole = $("#employee-roleForm").val().trim();
  var employeeStart = $("#employee-startForm").val().trim();
  var employeeRate = $("#employee-rateForm").val().trim();

  database.ref().push({
        name: employeeName,
        role: employeeRole,
        start: employeeStart,
        rate: employeeRate
  });



  var newRow = $("<tr>");
  newRow.html("<td>"+employeeName+"</td>"+"<td>"+employeeRole+"</td>"+"<td>"+employeeStart+"</td>"+"<td>"+"</td>"+"<td>"+employeeRate+"</td>"+"</td>"+"<td>");

  $("#table-body").prepend(newRow);

  $("#employee-nameForm").val('');
  $("#employee-roleForm").val('');
  $("#employee-startForm").val('');
  $("#employee-rateForm").val('');

}); // End of submit-button on click event