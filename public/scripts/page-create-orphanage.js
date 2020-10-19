//create map
const map = L.map("mapid").setView([-23.4870268, -46.7537359], 15)

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
})

let marker;


//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})


//photos upload
function addPhotoField() {
  //pegar container de fotos
  const container = document.querySelector('#images')
  //duplicar
  const fieldsContainer = document.querySelectorAll('.new-upload')
  //realizar clone
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
  //verificar campo vazio
  const input = newFieldContainer.children[0]
  if(input.value == "") {
    return
  } 

  input.value = ""

//clonar
  container.appendChild(newFieldContainer)

}

function deleteField(event) {
  const span = event.currentTarget

  const fieldsContainer = document.querySelectorAll('.new-upload')
  if(fieldsContainer.length < 2) {
    //limpar valor do campo
    span.parentNode.children[0].value = ""
    return
  }

  //deletar o campo 
  span.parentNode.remove()
}

//select yes or no
function toggleSelect(event) {
  //remove class .active
  document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))
  
  // get button onclick
  const button = event.currentTarget

  //insert class .active
  button.classList.add('active')

  //update hidden input with select value 
  const input = document.querySelector('[name="open_on_weekends"]')

  //verufy if yes or no
  input.value = button.dataset.value
}

function validate(event) {

  //validar se lat e lng forma informados
  const needsLatAndLng = true;
  if(needsLatAndLng) {
  event.preventDefault()
  alert('Selecione um ponto no mapa')
  }
}