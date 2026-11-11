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

  function markComingSoon(anchor) {
    anchor.setAttribute("href", "#");
    anchor.setAttribute("aria-disabled", "true");
    anchor.classList.add("is-disabled");
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
    });
    var note = document.createElement("p");
    note.className = "pay-soon";
    note.textContent = "Payments coming soon";
    if (anchor.parentNode) {
      anchor.parentNode.appendChild(note);
    }
  }

  var links = typeof STRIPE_LINKS === "object" && STRIPE_LINKS ? STRIPE_LINKS : {};
  document.querySelectorAll("[data-plan]").forEach(function (el) {
    var plan = el.getAttribute("data-plan");
    var url = links[plan];
    if (!url || url === "#") {
      markComingSoon(el);
      return;
    }
    el.setAttribute("href", url);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  document.querySelectorAll("form[data-mock]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var status = form.querySelector("[data-form-status]");
      if (status) {
        status.textContent = "This form is a preview and does not send messages yet. A contact email and phone, marked TBD on this page, will be added once they are chosen.";
      }
    });
  });
})();
