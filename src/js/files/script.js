// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

import IMask from "imask";

const btn = document.querySelectorAll(".inputBtnSubmit");
btn.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    if (item.previousElementSibling.hasAttribute("disabled")) {
      item.previousElementSibling.removeAttribute("disabled");

      item.classList.remove("_active");
      item.lastElementChild.textContent = "Сохранить";
    } else {
      item.previousElementSibling.setAttribute("disabled", "");

      item.classList.add("_active");
      item.lastElementChild.textContent = "Изменить";
    }
  });
});

const element = document.querySelector("#tel1");
const maskOptions = {
  mask: "+{7}(000)000-0000",
};
const mask = IMask(element, maskOptions);

const element2 = document.querySelector("#tel2");
const maskOptions2 = {
  mask: "+{7}(000)000-0000",
};
const mask2 = IMask(element2, maskOptions2);

// select

const select = document.querySelector(".select");

select.firstElementChild.addEventListener("click", function (e) {
  e.preventDefault();
  if (select.classList.contains("close")) {
    select.classList.remove("close");
  } else {
    select.classList.add("close");
  }
});
