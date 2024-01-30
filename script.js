function page_animation() {
  var tl = gsap.timeline();

  tl.to("#h11", {
    y: -40,
    opacity: 1,
    delay: 0.5,
    duration: 0.5,
  });

  tl.to("#h12", {
    y: -40,
    opacity: 1,
    delay: 0.5,
    duration: 0.5,
  });

  tl.to("#h13", {
    y: -40,
    opacity: 1,
    delay: 0.5,
    duration: 0.5,
  });

  tl.to("#character-card", {
    scale: 1,
    opacity: 1,
    duration: 0.5,
  });

  tl.to("#infocard", {
    scale: 1,
    opacity: 1,
    duration: 0.5,
  });
}
page_animation();

const url =
  "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=c358a32dc560241181f58a148c7a8d0b&hash=8eea7971cc4592edb5011be02e378133";

const request = new Request(url);

var cardimage = document.querySelector("#card-image");

var search = document.querySelector("#button");

function herosearch() {
  var searchitem = document.getElementById("heroname").value;

  const apiurl = `https://gateway.marvel.com/v1/public/characters?name=${searchitem}&ts=1&apikey=c358a32dc560241181f58a148c7a8d0b&hash=8eea7971cc4592edb5011be02e378133`;

  fetch(apiurl)
    .then((response) => response.json())
    .then((data) => {
      display(data);
    })
    .catch((error) => console.error("Error", error));
}

function display(data) {
  var cardtext = document.getElementById("#card-text");
  cardtext.innerHTML = "";

  const hero = data.data.results[0];

  if (hero) {
    const description = hero.description || "No description available.";
    const thumbnail = hero.thumbnail.path + "." + hero.thumbnail.extension;

    const html = `<p>${description}</p>`

    cardtext.innerHTML = html;
  } else {
    cardtext.innerHTML = "Hero not found.";
  }
}
