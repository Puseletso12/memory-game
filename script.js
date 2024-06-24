const card = document.querySelectorAll(".cards1");
const play = document.querySelector(".play");

//shuffle cards
play.addEventListener("click", function suffleImage() {
  card.forEach((c) => {
    const num = [...Array(card.length).keys()];
    const random = Math.floor(Math.random() * card.length);

    c.style.order = num[random];
  });
});

let flippedCards = [];
const delay = 1000;

document.querySelectorAll(".cards1").forEach((card) => {
  card.addEventListener("click", () => {
    if (card.classList.contains("matched") || flippedCards.length === 2) return;

    card.classList.toggle("flipped");

    if (card.classList.contains("flipped")) {
      flippedCards.push(card);
    }

    if (flippedCards.length === 2) {
      setTimeout(checkForMatch, delay);
    }
  });
});

function checkForMatch() {
  const [card1, card2] = flippedCards;
  const id1 = card1.dataset.id;
  const id2 = card2.dataset.id;

  if (id1 === id2) {
    card1.classList.add("matched");
    card2.classList.add("matched");

    document.querySelector(".result").textContent = ``;
    document.querySelector(".sorry").style.color = "green";
    document.querySelector(".sorry").textContent = "Good Job!";
  } else {
    card1.classList.remove("flipped");
    card2.classList.remove("flipped");
    document.querySelector(".sorry").style.color = "red";
    document.querySelector(".sorry").textContent = "Sorry, try again";
  }

  flippedCards = [];
}
