const endDate = "1 January 2025 00:00 AM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;

  // countdown over
  if (diff < 0) return;

  // convert into days 
  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor(diff / 3600) % 24;
  inputs[2].value = Math.floor(diff / 60) % 60;
  inputs[3].value = Math.floor(diff) % 60;
}

clock();

/**
 * 1 day = 24 hrs
 * 1 hr = 60 mins
 * 60 mins = 3600 secs
 */

// function call in every sec
setInterval(() => {
  clock(); 
});
