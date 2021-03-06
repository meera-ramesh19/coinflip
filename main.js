let headSum = 0;
let tailsSum = 0;

const coin = document.querySelector(".coin");
const btn = document.querySelector(".flip");
btn.addEventListener("click", coinFlip);

function coinFlip() {
  const flipped = Math.floor(Math.random() * 2) == 0 ? "Heads" : "Tails";
  console.log(flipped);
  if (flipped === "Heads") {
    coin.innerHTML =
      '<img class="heads animate-coin"  src="https://i.imgur.com/CMFuA4v.jpg "/>';
    headSum++;
  } else {
    coin.innerHTML` <img class="tails animate-coin" src="https://i.imgur.com/UQMMqBQ.jpg "/>`;
    tailsSum++;
  }

  document.querySelector(
    ".flipSide"
  ).innerHTML = ` Random Coin Value:    ${flipped}`;
  document.querySelector(".headCount").innerHTML = ` Heads:  ${headSum}`;
  document.querySelector(".tailCount").innerHTML = ` Tails:  ${tailsSum}`;
}
