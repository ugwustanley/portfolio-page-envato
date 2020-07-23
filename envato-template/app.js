
window.onload = function() {myFunction()};

function myFunction() {
  if(loader){
    document.body.style.overflowY = "auto";
    loader.style.display = "none";
  }else{
      loader.style.display = "block"
  }}