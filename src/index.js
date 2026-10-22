import "bootstrap/dist/js/bootstrap.bundle.js";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "./styles/rtlboot.scss";
import "./styles/styles.scss";
import "./styles/pageEygpt.scss";
import $ from "jquery";

// scroll top for navbar transition

$(window).scroll(function () {
  if ($(this).scrollTop() >= 100) {
    $("#navbar").addClass("modified");
  } else {
    $("#navbar").removeClass("modified");
  }
});

// current year
const Year = new Date().getFullYear();
document.getElementById("currentYear").innerText = Year;

// validation for login
(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false,
    );
  });
})();


