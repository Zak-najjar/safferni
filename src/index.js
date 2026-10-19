import "bootstrap/dist/js/bootstrap.bundle.js";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "./styles/rtlboot.scss";
import "./styles/styles.scss";
import './styles/pageEygpt.scss';
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

document.getElementById('currentYear').innerText = new Date().getFullYear();