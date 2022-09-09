const wsUri = "wss://echo-ws-service.herokuapp.com";

const output = document.querySelector(".output");
const btnOpen = document.querySelector(".b-open");
const btnClose = document.querySelector(".b-close");
const btnSend = document.querySelector(".b-send");
const inputValue = document.querySelector(".input-value");

let websocket;

function writeToScreen(message) {
  let pre = document.createElement("p");
  pre.classList.add("speaker");
  pre.innerHTML = message;
  output.appendChild(pre);
}
window.onload = () => {
  websocket = new WebSocket(wsUri);
  websocket.onopen = function (event) {
    console.log("Соединение установлено");
  };
  websocket.onclose = function (event) {
    console.log("Соединение отсутствует. Попробуйте еще раз");
  };
  websocket.onmessage = function (event) {
    writeToScreen(event.data);
  };
  websocket.onerror = function (event) {
    writeToScreen(event.data);
  };
};
inputValue.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    btnSend.click();
  }
});
btnSend.addEventListener("click", () => {
  const message = inputValue.value;
  writeToScreen(message);
  websocket.send(message);
  inputValue.value = "";
});

var geo = document.getElementById("geo");
geo.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    output.innerHTML = "Геолокация не поддерживается в этом браузере";
  }
});

function showPosition(position) {
  let coord = document.createElement("p");
  coord.classList.add("speaker");
  coord.innerHTML = `<a style="text-decoration:none; color:blue;" target='_blank' href='https://www.openstreetmap.org/search?whereami=1&query=
   ${position.coords.latitude} +%2C${position.coords.longitude}#map=19/${position.coords.latitude}/${position.coords.longitude}'>
   Гео-локация</a>`;
  output.appendChild(coord);
}

localStorage.setItem("chatArr", JSON.stringify(chatArr));

JSON.parse(localStorage.getItem("chatArr"));
