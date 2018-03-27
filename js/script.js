var link = document.querySelector(".btn-write-us");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".button-close");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=e-mail]");
var message = popup.querySelector("[name=text]");
//var name = popup.querySelector("input[type=text]");
var isStorageSupport = true;
  var storage_name = "";
  try {
    storage_name = localStorage.getItem("name");
    storage_email = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("show");
    if (storage_name && !storage_email) {
      name.value = storage_name;
      storage_email.focus();
    } else if (storage_email && !storage_name) {
      email.value = storage_email;
      storage_name.focus();
    } else if (storage_name && storage_email) {
      name.value = storage_name;
      email.value = storage_email;
      message.focus();
    }else {
      name.focus();
    }
});
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("show");
});
form.addEventListener("submit", function (evt) {
   if (!name.value || !email.value || !message.value) {
     evt.preventDefault();
     console.log("Нужно ввести логин и пароль");
   } else {
     localStorage.setItem("name", name.value);
     localStorage.setItem("email", email.value);
   }
 });
var map_link = document.querySelector(".btn-map-popup");
var map_popup = document.querySelector(".modal-map");
var map_close = map_popup.querySelector(".button-close");
map_link.addEventListener("click", function (evt) {
    evt.preventDefault();
    map_popup.classList.add("show");
});
map_close.addEventListener("click", function (evt) {
    evt.preventDefault();
    map_popup.classList.remove("show");
});
