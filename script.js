document.addEventListener("DOMContentLoaded", function (event) {
        // disable the lower part of the form until we have user input for all values
    document.getElementById("newUser").disabled = true;
   
})

document.addEventListener("DOMContentLoaded", function (event) {
        // disable the lower part of the form until we have user input for all values
    document.getElementById("existingUser").disabled = true;
   
})

function newformSubmitEvent() {

        document.getElementById("newUser").disabled = false;

}

function exformSubmitEvent() {

        document.getElementById("existingUser").disabled = false;

}

function newloginClick() {
  var message = document.getElementById("newusername").value;
  
        alert("Welcome " + message + "! ");
}

function oldloginClick() {
        alert("Welcome back! ");
}
