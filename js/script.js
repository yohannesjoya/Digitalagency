// these code is for expanding and collapsing burger button
var navEXPAND = document.querySelector(".navExpand-button");
navEXPAND.addEventListener("click", () => {
  var navListWrapper = document.querySelector(".nav-list-wrapper");
  navListWrapper.classList.add("visibleNavList");
  var closebtn = document.createElement("li");
  closebtn.innerHTML = "<small>x</small> - close - <small>x</small>";
  navListWrapper.appendChild(closebtn);
  closebtn.addEventListener("click", () => {
    navListWrapper.classList.remove("visibleNavList");
    navListWrapper.removeChild(closebtn);
  });
});

// the code below is for theme change
var LightThemebtn = document.querySelector(".Theme-changer div:first-child i");
var DarkThemebtn = document.querySelector(".Theme-changer div:last-child i");
var Themebtns = [LightThemebtn, DarkThemebtn];
Themebtns.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target.className.includes("fa-sun")) {
      DarkThemebtn.parentElement.classList.remove("activeThemeTeller");
      e.target.parentElement.classList.add("activeThemeTeller");

      document.documentElement.style.setProperty(
        "--navbar-bg-color-dark",
        "coral"
      );
      document.documentElement.style.setProperty("--body-bg-color-1", "white");
      document.documentElement.style.setProperty("--white-color", "black");
      document.documentElement.style.setProperty("--dark-color", "white");
    } else {
      LightThemebtn.parentElement.classList.remove("activeThemeTeller");
      e.target.parentElement.classList.add("activeThemeTeller");

      document.documentElement.style.setProperty(
        "--navbar-bg-color-dark",
        "#0a0e11"
      );
      document.documentElement.style.setProperty(
        "--body-bg-color-1",
        "linear-gradient(rgba(15,20,28,0.85) 0%, rgba(15, 20, 28,1) 6%)"
      );
      document.documentElement.style.setProperty("--white-color", "white");
      document.documentElement.style.setProperty("--dark-color", "black");
    }
  });
});

// // this is for the circular horizontal scroll bar
var fullComponents = document.querySelectorAll(".component");

var btns = document.querySelectorAll(".real-slider label");
var [bt1, bt2, bt3, bt4, bts] = btns;

btns.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    fullComponents.forEach((element) => {
      if (e.target.className == "one") {
        element.classList.remove(
          "slide-0",
          "scroll-1",
          "scroll-2",
          "scroll-3",
          "scroll-4"
        );
      } else if (e.target.className == "two") {
        element.classList.toggle("slide-1");
      } else if (e.target.className == "three") {
        element.classList.toggle("slide-2");
      } else if (e.target.className == "four") {
        element.classList.toggle("slide-3");
      } else {
        element.classList.toggle("slide-4");
      }
    });
  });
});

// this is mouse tracker
const tracker = document.querySelector('.tracker')
document.body.addEventListener("mousemove", (e) => {
  tracker.style.left = `${e.clientX+7}px`;
  tracker.style.top =  `${e.clientY-30}px`
})

