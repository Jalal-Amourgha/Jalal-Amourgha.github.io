const text = document.querySelector(".my-name");
let colorsBox = document.getElementsByClassName("colors-box")[0];
let switcherButtons = document.querySelectorAll(".color-switcher button");
let root = document.querySelector(":root");
let changeModeBtn = document.getElementById("changeModeBtn");
let switcher = document.querySelectorAll(".buttons a");
const li = document.querySelectorAll(".link");
const sections = document.querySelectorAll("section");
let scroller = document.getElementById("scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
let scrollBtn = document.getElementsByClassName("scroll-btn")[0];

let projectsBoxs = Array.from(document.getElementsByClassName("all"));
// this variable allos us to know if the switcher box visible or not
let box = false;
// this variable allos us to know if the dark mode active or not
let mode = true;

// Switcher Box Visibility (This Function allow us to open the switcher box and close it)
function switcherBox() {
  if (box) {
    colorsBox.style.display = "none";
    box = false;
  } else {
    colorsBox.style.display = "block";
    box = true;
  }
}

// Change The root color
switcherButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    switcherButtons.forEach(function () {
      switcherButtons.forEach((e) => e.classList.remove("active"));
      e.target.classList.add("active");
    });

    var color = e["target"]["attributes"]["data-color"]["nodeValue"];

    root.style.setProperty("--main-color", color);

    colorsBox.style.display = "none";
    box = false;
  });
});

// Dark Mode function
function changeMode() {
  if (mode) {
    changeModeBtn.classList.remove("fa-moon");
    changeModeBtn.classList.add("fa-sun");
    root.style.setProperty("--bg-main", "#191d2b");
    root.style.setProperty("--bg-second", "white");
    mode = false;
  } else {
    changeModeBtn.classList.add("fa-moon");
    changeModeBtn.classList.remove("fa-sun");
    root.style.setProperty("--bg-main", "white");
    root.style.setProperty("--bg-second", "#191d2b");
    mode = true;
  }
}

// const textLoad = () => {
//   setTimeout(() => {
//     text.textContent = "Jalal Amourgha";
//   }, 0);
//   setTimeout(() => {
//     text.textContent = "A Frontend Developer";
//   }, 4000);
// };

// textLoad();
// setInterval(textLoad, 8000);

// filtering the projects section
switcher.forEach((e) => {
  e.addEventListener("click", removeActive);
  e.addEventListener("click", manageImgs);
});

function removeActive() {
  switcher.forEach((e) => {
    e.classList.remove("active");
    this.classList.add("active");
  });
}

function manageImgs() {
  projectsBoxs.forEach((box) => {
    box.style.display = "none";
  });
  document.querySelectorAll(this.dataset.filter).forEach((el) => {
    el.style.display = "block";
  });
}
function displayReactBox() {
  document.getElementById("react").style.display = "block";
}

// changing the color of element in the navbar depending on the section
function activeMenu() {
  let section = sections.length;
  while (--section && window.scrollY + 97 < sections[section].offsetTop) {}
  li.forEach((e) => e.classList.remove("active"));
  li[section].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

// show the arrow top button
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});

window.onscroll = function () {
  this.scrollY > 800
    ? (scrollBtn.style.display = "block")
    : (scrollBtn.style.display = "none");
};

function scrollBack() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
