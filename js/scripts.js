// User Interface Logic

// i think this just declares the IDs of divs to be hidden
function hideResults() {
  document.getElementById("error-message").style.display = "none";
  document.getElementById("brad").style.display = "none";
  document.getElementById("baby").style.display = "none";
  document.getElementById("twink").style.display = "none";
  document.getElementById("dad").style.display = "none";
  document.getElementById("etc").style.display = "none";
}

// this hides them
window.onload = function() {
  hideResults();
  document.getElementById("form").reset();

// this maybe declares the form and the function event for onsubmit?
  document.querySelector("form").onsubmit = function(event) {
    hideResults();
    event.preventDefault();

  const bodType = document.querySelector("input#bod").value;
  const faceType = document.querySelector("input#cute").value;
  const ageType = document.querySelector("input#age").value;

  if (faceType === "cute" && bodType === "buff" && ageType === "aged") {
    document.getElementById("brad").style.display = "block";

  } else if (faceType === "cute" && bodType === "buff" && ageType === "fresh") {
    document.getElementById("baby").style.display = "block";

  } else if (faceType === "cute" && bodType === "not buff" && ageType === "aged") {
    document.getElementById("dad").style.display = "block";

  } else if (faceType === "cute" && bodType === "not buff" && ageType === "fresh") {
    document.getElementById("twink").style.display = "block";

  } else if (faceType === "whatevz") {
    document.getElementById("etc").style.display = "block";
// typing in just "whatevz" will still pull up the etc div, even if the others are blank which (in this case) is fine.
  } else {
    document.getElementById("error-message").style.display = "block";
    }
  };
};

window.onreset = function() {
  hideResults();
}
// this clears out the divs and fields when hitting the do over (reset) button. clicking the reset button on its own will clear the fields as well.
