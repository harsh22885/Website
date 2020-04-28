var fname = document.getElementById('fname');
var login = document.getElementById('login');
var result = document.getElementById("result");
login.addEventListener('submit', function (event) {
    if (!fname.value) {
        alert("Please enter your First name")}
    var x = fname.value;
    //alert(x + " Application Submitted");
    result.innerText = x + " Application Submitted"; 
    event.preventDefault();
});