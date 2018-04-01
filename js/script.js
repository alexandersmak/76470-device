var link = document.querySelector(".btn-write-us");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".button-close");
var form = popup.querySelector("form");
var username = popup.querySelector("[type=text]");
var email = popup.querySelector("[name=e-mail]");
var message = popup.querySelector("[name=text]");
var isStorageSupport = true;
var storage_name = "";
try {
  storage_name = localStorage.getItem("name");
  storage_email = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}
link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("show");
  if (storage_name && !storage_email) {
    username.value = storage_name;
    email.focus();
  } else if (storage_email && !storage_name) {
    email.value = storage_email;
    username.focus();
  } else if (storage_name && storage_email) {
    username.value = storage_name;
    email.value = storage_email;
    message.focus();
  } else {
    username.focus();
  }
});
close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("show");
});
form.addEventListener("submit", function(evt) {
  if (!name.value || !email.value || !message.value) {
    evt.preventDefault();
    console.log("Нужно ввести логин и пароль");
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("name", name.value);
    localStorage.setItem("email", email.value);
  }
});
var map_link = document.querySelector(".btn-map-popup");
var map_popup = document.querySelector(".modal-map");
var map_close = map_popup.querySelector(".button-close");
map_link.addEventListener("click", function(evt) {
  evt.preventDefault();
  map_popup.classList.add("show");
});
map_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  map_popup.classList.remove("show");
});
//section popular-products
var buttons = document.querySelectorAll(".products-switches-btn");
var sliders = document.querySelectorAll(".product-list-item");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    if (!this.classList.contains("checked")) {
      for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains("checked")) {
          buttons[i].classList.remove("checked");
          sliders[i].classList.remove("show");
        }
      }
      this.classList.add("checked");
      for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains("checked")) {
          sliders[i].classList.add("show");
        }
      }
    }
  });
}
//section services
var service_buttons = document.querySelectorAll(".service-btn");
var tabs = document.querySelectorAll(".service-tab");
for (var i = 0; i < service_buttons.length; i++) {
  service_buttons[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    if (!this.parentElement.classList.contains("active")) {
      for (var i = 0; i < service_buttons.length; i++) {
        if (service_buttons[i].parentElement.classList.contains("active")) {
          service_buttons[i].parentElement.classList.remove("active");
          tabs[i].classList.add("visually-hidden");
        }
      }
      this.parentElement.classList.add("active");
      for (var i = 0; i < buttons.length; i++) {
        if (service_buttons[i].parentElement.classList.contains("active")) {
          tabs[i].classList.remove("visually-hidden");
        }
      }
    }
  });
}
