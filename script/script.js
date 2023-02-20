const input = document.querySelector('#input');
const city = document.querySelector(".city-title span")
const address = document.querySelector(".address span")
const district = document.querySelector(".district span")
const state = document.querySelector(".state span")
const apiUnsplash = "https://source.unsplash.com/1600x900/?";

const cityContainer = document.querySelector(".city-container")


const getCepData = async() => {

  const apiCepURL = `https://cep.awesomeapi.com.br/${input.value}`

  const res = await fetch(apiCepURL);
  const data = await res.json();

  return data
}

const showCepData = async () => {

  const data = await getCepData();

  city.innerText = `${data.city}`;
  address.innerText = `${data.address}`;
  district.innerText = `${data.district}`;
  state.innerText = `${data.state}`;

  cityContainer.classList.remove("hide");

  document.body.style.backgroundImage = `url("${apiUnsplash + data.city}")`

}