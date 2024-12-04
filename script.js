let header = document.getElementById("NomText");
let cookiButton = document.getElementById("CookiButton");
let resetButton = document.getElementById("resetButton");
let ACButton = document.getElementById("ACButton");

let count = 0;

function DisplayCount() {
  // % means Modulo, it does magic stuff (remainder of a division) - in this case count % 10 = every multiple of 10 returns you back to 0.
  if (count == 0) {
    header.innerText = "start clicking bish -Josh";
    // } else if (count % 100 == 0) {
    //   header.innerText = "yippee " + count.toString() + " cookies!";
  } else {
    header.innerText = "nom " + Math.floor(count).toString() + " cookies";
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

// let AutoClickers = [];

// ACButton.addEventListener("click", function () {
//   if (count < 10) return;

//   count -= 10;
//   localStorage.setItem("CookieCount", count.toString());
//   DisplayCount();
//   let newInterval = setInterval(function () {
//     count++;
//     localStorage.setItem("CookieCount", count.toString())
//     DisplayCount();
//   }, 1000);
//   AutoClickers.push(newInterval);
// });

let AutoClickerSpeed = 0;

ACButton.addEventListener("click", function () {
  if (count < 10) return;
  count -= 10;
  localStorage.setItem("CookieCount", count.toString());
  DisplayCount();
  AutoClickerSpeed += 0.01;
});

setInterval(function () {
  count += AutoClickerSpeed;
  DisplayCount();
  localStorage.setItem("CookieCount", count.toString());
}, 10);

resetButton.addEventListener("click", function () {
  count = 0;
  localStorage.removeItem("CookieCount");
  DisplayCount();
  AutoClickerSpeed = 0;
});
