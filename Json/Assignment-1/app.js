var Person = {
    "firstName" : "Wes" ,
    "lastName" : "Bos" , 
    "Dob"  : "10-03-1997"
}
var firstName = document.getElementById('firstName');
firstName.innerHTML = "FirstName : " + Person.firstName + "<br/>";

var lastName = document.getElementById('lastName');
lastName.innerHTML = "lastName : " + Person.lastName + "<br/>";

var Dob = document.getElementById('Dob');
Dob.innerHTML = "Dob : " +Person.Dob;
