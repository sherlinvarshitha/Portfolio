var typed = new Typed(".multiple-text", {
    strings: [
      "FrontEnd Development ",
      "Backend Development",
      "Machine Learning",
      
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
 
  
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      document.querySelectorAll(".Projects-section").forEach(function (section) {
        if (isElementInViewport(section)) {
          section.classList.remove("animated");
        } else {
          section.classList.add("animated");
        }
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      document.querySelectorAll(".AboutMe").forEach(function (section) {
        if (isElementInViewport(section)) {
          section.classList.remove("animated");
        } else {
          section.classList.add("animated");
        }
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      document.querySelectorAll(".Skills-section").forEach(function (section) {
        if (isElementInViewport(section)) {
          section.classList.remove("animated");
        } else {
          section.classList.add("animated");
        }
      });
    });
  });
  
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  
  function STOPWATCH() {
    open("https://github.com/sherlinvarshitha/STOPWATCH");
  }
  function tictactoe() {
    open("https://github.com/sherlinvarshitha/TICTACTOE");
  }
  function calculator() {
    open("https://github.com/sherlinvarshitha/CScalculator");
  }
  function insurance() {
    open("https://github.com/sherlinvarshitha/STML/blob/main/STML_PROJECT.ipynb");
  }
  
  function lp1() {
    open("https://github.com/sherlinvarshitha/prodigy-T1");
  }
  
  function lp2() {
    open("https://github.com/sherlinvarshitha/CS-Travel-page");
  }
  
  function resume() {
    open(
      "https://drive.google.com/file/d/14C3Mt-kovKfGosBY8b44zGwyZ-ntLmWU/view?usp=sharing"
    );
}
function Certificates() {
    open("https://drive.google.com/file/d/12oFHv4ukFIFutmyzrfWcfKfNy0YkEEhr/view?usp=sharing");
  }
    
  