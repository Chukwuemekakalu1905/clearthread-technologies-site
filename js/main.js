(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-menu");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  document.querySelectorAll("form[data-mock]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var status = form.querySelector("[data-form-status]");
      if (status) {
        status.textContent = "This form does not send messages. Please call or text (346) 977-1698, or email clearthreadtechnologies@gmail.com.";
      }
    });
  });
})();
