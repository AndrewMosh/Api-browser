const wsUri = "wss://echo-ws-service.herokuapp.com";

const output = document.querySelector(".output");
const btnOpen = document.querySelector(".b-open");
const btnClose = document.querySelector(".b-close");
const btnSend = document.querySelector(".b-send");
const inputValue = document.querySelector(".input-value");

let websocket;

function writeToScreen(message) {
  let pre = document.createElement("p");
  pre.innerHTML = message;
  output.appendChild(pre);
}
btnOpen.addEventListener("click", () => {
  websocket = new WebSocket(wsUri);
  websocket.onopen = function (event) {
    console.log("Соединение установлено");
  };
  websocket.onclose = function (event) {
    writeToScreen("Соединение отсутствует");
  };
  websocket.onmessage = function (event) {
    writeToScreen(
      `<p style='text-align:left; margin:0;font-size:12px;'>Сервер:</p><br><p style='text-align:left;margin:0'> ${event.data}</p> `
    );
  };
  websocket.onerror = function (event) {
    writeToScreen(event.data);
  };
});

btnClose.addEventListener("click", () => {
  websocket.close();
  websocket = null;
});
btnSend.addEventListener("click", () => {
  const message = inputValue.value;
  writeToScreen(
    `<p style='text-align:right; margin:0; font-size:12px'>Вы:</p><br><p style='text-align:right;margin:0'> ${message}</p> `
  );
  websocket.send(message);
});
