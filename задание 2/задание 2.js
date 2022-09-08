var butt = document.querySelector(".butt");
butt.addEventListener("click", () => {
  alert("Ширина экрана устройства: " + window.screen.width);
  alert("Высота экрана устройства: " + window.screen.height);
  alert("Актуальная ширина экрана браузера: " + window.innerWidth);
  alert("Актуальная высота экрана браузера: " + window.innerHeight);
  alert(
    "Актуальная ширина экрана браузера без учета полосы прокрутки: " +
      document.documentElement.clientWidth
  );
  alert(
    "Актуальная высота экрана браузера без учета полосы прокрутки: " +
      document.documentElement.clientHeight
  );
});
