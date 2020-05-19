
function myFunction() {
    // document.getElementById("p").innerHTML ="changed"
    var editElem = document.getElementById("p");
    //get the edited element content
    var userVersion = editElem.innerHTML;

    //save the content to local storage
    localStorage.userEdits = userVersion;

    // console.log(userVersion)
    // document.write("a");
    
  }


  function checkEdits() {

    //find out if the user has previously saved edits
    if(localStorage.userEdits!=null)
    document.getElementById("p").innerHTML = localStorage.userEdits;
    }
 


