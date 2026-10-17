import "bootstrap/dist/js/bootstrap.bundle.js";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "./styles/rtlboot.scss";
import "./styles/styles.scss";
import $ from "jquery";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

// scroll top for navbar transition

$(window).scroll(function () {
  if ($(this).scrollTop() >= 100) {
    $("#navbar").addClass("modified");
  } else {
    $("#navbar").removeClass("modified");
  }
});

// swiper carousel pages
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});


// current year 

document.getElementById('currentYear').innerText = new Date().getFullYear();