let header = document.getElementById("NomText");
let cookiButton = document.getElementById("CookiButton");
let resetButton = document.getElementById("resetButton");

let count = 0;

function DisplayCount() {
  // % means Modulo, it does magic stuff (remainder of a division) - in this case count % 10 = every multiple of 10 returns you back to 0.
  if (count == 0) {
    header.innerText = "start clicking bish -Josh";
  } else if (count % 100 == 0) {
    header.innerText = "yippee " + count.toString() + " cookies!";
  } else {
    header.innerText = "nom " + count.toString() + " cookies";
  }
}

try {
  let saveCount = parseInt(localStorage.getItem("CookieCount"));
  if (!Number.isNaN(saveCount)) {
    count = saveCount;
  }
  DisplayCount();
} catch (error) {
  console.error("failed to load saved cooki count", error);
}

cookiButton.addEventListener("click", function () {
  count++;
  localStorage.setItem("CookieCount", count.toString());

  //Challenge!: Change text for multiple of 3 "nam", multiple of 5 change it to "num", and if it is a multiple of both 3 and 5 change it to "nem"

  //   if (count % 3 == 0 && count % 5 == 0) {
  //     header.innerText = "nem " + count.toString();
  //   } else if (count % 3 == 0) {
  //     header.innerText = "nam " + count.toString();
  //   } else if (count % 5 == 0) {
  //     header.innerText = "num " + count.toString();
  //   } else {
  //     header.innerText = "nom " + count.toString();
  //   }

  DisplayCount();
});

resetButton.addEventListener("click", function () {
  count = 0;
  localStorage.removeItem("CookieCount");
  DisplayCount();
});

// setInterval(function () {
//   count++;
//   DisplayCount();
// }, 1000);
