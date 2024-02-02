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

var card_text = document.getElementById("#card-text");
var search = document.querySelector("#button");

let herosearch = () => {
  var cardimage = document.querySelector("#card-image");
  var searchitem = document.getElementById("heroname").value;
  var card_text = document.getElementById("card-text");
  card_text.innerHTML = "Know your hero";
  cardimage.src = `marvelimages.jpeg`;

  const apiurl = `https://gateway.marvel.com/v1/public/characters?name=${searchitem}&ts=1&apikey=c358a32dc560241181f58a148c7a8d0b&hash=8eea7971cc4592edb5011be02e378133`;

  fetch(apiurl)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      card_text.innerHTML = `${response.data.results[0].description}`;
      const thumbnail = response.data.results[0].thumbnail;
      const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;
      const imageElement = document.getElementById("characterImage");
      cardimage.src = imageUrl;
    })
    .catch((error) => console.error("Error", error));
};

var info_card = document.getElementById("info-card");

search.addEventListener("click", herosearch);

herosearch();
