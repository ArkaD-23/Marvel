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
}
page_animation();

function character() {
  let urlQueryParameters = new URLSearchParams(window.location.search),
    queryParameterName = urlQueryParameters.get("heroname"),
    heroname = document.getElementById("heroname").value;

  if (queryParameterName !== null && queryParameterName !== "") {
    document.getElementById("heroname").value = queryParameterName;
    RTCPeerConnection();
  } else if (heroname !== null && heroname) {
  } else {
  }
}

function connection () {

}











const publicKey = "c358a32dc560241181f58a148c7a8d0b";
const privateKey = "c358a32dc560241181f58a148c7a8d0b"; // Remember to keep your private key secure on the server-side

const baseURL = "https://gateway.marvel.com/v1/public/characters";

// Function to generate a timestamp in seconds
const generateTimestamp = () => Math.floor(Date.now() / 1000);

// Function to generate an MD5 hash required by the Marvel API
const generateHash = (timestamp) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(timestamp + privateKey + publicKey);

  return crypto.subtle.digest("MD5", data).then((hashBuffer) => {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  });
};

// Get the current timestamp in seconds
const timestamp = generateTimestamp();

// Replace {characterId} with the specific ID of the Marvel character
const characterId = 1009368; // Example: Spider-Man

// Generate the hash for authentication
generateHash(timestamp)
  .then((hash) => {
    // Construct the API request URL for the specific character
    const url = `${baseURL}/${characterId}?apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;

    // Make the API request using the fetch function
    return fetch(url);
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Handle the data here
    console.log(data);
  })
  .catch((error) => {
    // Handle errors here
    console.error("Error:", error);
  });
