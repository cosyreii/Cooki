let header = document.getElementById("one");
let button = document.getElementById("two");

let count = 0;
function clickHandler() {
    count++;

    //Challenge!: Change text for multiple of 3 "nam", multiple of 5 change it to "num", and if it is a multiple of both 3 and 5 change it to "nem"

    // % means Modulo, it does magic stuff (remainder of a division) - in this case count % 10 = every multiple of 10 returns you back to 0.
    if (count % 10 == 0) {
        header.innerText = "yippee " + count.toString() + " cookies!";
    } else {
        header.innerText = "nom " + count.toString() + " cookies";
    }

    //Challenge code:
    //   if (count % 3 == 0 && count % 5 == 0) {
    //     header.innerText = "nem " + count.toString();
    //   } else if (count % 3 == 0) {
    //     header.innerText = "nam " + count.toString();
    //   } else if (count % 5 == 0) {
    //     header.innerText = "num " + count.toString();
    //   } else {
    //     header.innerText = "nom " + count.toString();
    //   }
}

button.addEventListener("click", clickHandler);
