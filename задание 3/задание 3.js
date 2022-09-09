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
