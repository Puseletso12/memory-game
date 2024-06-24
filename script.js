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

//card flip logic
document.querySelectorAll('.cards1').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});


