// comparer joueur1.value et joueur2.value
// if joueur1.value = joueur2.value
//     => égalité (h1)
// if else joueur1.value < joueur2.value
//     => joueur2 gagne (h1)
//  else joueur2.value < joueur2.value
//     => joueur1 gagne (h1)

const random = document.querySelectorAll("div div")[0];
const random2 = document.querySelectorAll("div div")[1];
const btn = document.querySelector("button");
let i = 0;
let i2 = 0;

btn.addEventListener("click", (evt) => {
  i = Math.floor(Math.random() * 6) + 1;
  i2 = Math.floor(Math.random() * 6) + 1;

  random.innerHTML = `<img src="dice${[i]}.png" alt="">`;
  random2.innerHTML = `<img src="dice${[i2]}.png" alt="">`;

  if (i < i2) {
    document.querySelector("h1").innerText = `Le joueur 2 est vainqueur !`;
  } else if (i > i2) {
    document.querySelector("h1").innerText = `Le joueur 1 est vainqueur !`;
  } else {
    document.querySelector("h1").innerText = `Egalité !`;
  }
});
