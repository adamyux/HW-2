document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("newUser").disabled = true;
   
})

document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("existingUser").disabled = true;
   
})

function newformSubmitEvent() {

    document.getElementById("newUser").disabled = false;
    document.getElementById("existingUser").disabled = true;
}

function exformSubmitEvent() {

    document.getElementById("newUser").disabled = true; 
    document.getElementById("existingUser").disabled = false;

}

function newloginClick() {
        
    var message = document.getElementById("newusername").value; 
    alert("Welcome " + message + "! ");
        
}

function oldloginClick() {
    
    alert("Welcome back! ");
        
}
