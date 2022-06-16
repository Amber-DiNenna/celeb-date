// User Interface Logic

function hideResultsAndError() {
  document.getElementById("error-message").style.display = "none";
  document.getElementById("brad").style.display = "none";
  document.getElementById("baby").style.display = "none";
  document.getElementById("twink").style.display = "none";
  document.getElementById("dad").style.display = "none";
  document.getElementById("etc").style.display = "none";
}


window.onload = function() {
  hideResultsAndError();

  document.querySelector("form").onsubmit = function(event) {
    hideResultsAndError();
    event.preventDefault();
    const age = parseInt(document.querySelector("input#age").value);
    const bod = parseInt(document.querySelector("input#bod").value);
    const cute = parseInt(document.querySelector("input#cute").value);


  };
};
