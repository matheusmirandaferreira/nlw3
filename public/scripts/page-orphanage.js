const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

//get values from html (hbs)
const lat = document.querySelector("span[data-lat]").dataset.lat;
const lng = document.querySelector("span[data-lng]").dataset.lng;

//creat map
const map = L.map("mapid", options).setView([lat, lng], 15);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create and add marker

L.marker([lat, lng], { icon }).addTo(map);

// img gallery

function selectImage(event) {
  const button = event.currentTarget;

  //remover all .actives
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach((button) => button.classList.remove("active"));

  //selecionar a imagem clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  //atualizar container de imagem
  imageContainer.src = image.src;

  //add class active
  button.classList.add("active");
}

// jundiai - sp -23.4870268, -46.7537359
