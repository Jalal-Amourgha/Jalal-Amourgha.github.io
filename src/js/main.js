const text = document.querySelector(".my-name");
let colorsBox = document.getElementsByClassName("colors-box")[0];
let switcherButtons = document.querySelectorAll(".color-switcher button");
let root = document.querySelector(":root");
let changeModeBtn = document.getElementById("changeModeBtn");
let switcher = document.querySelectorAll(".buttons a");

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
    changeModeBtn.style.transform = "rotateZ(180deg)";
    root.style.setProperty("--bg-main", "#191d2b");
    root.style.setProperty("--bg-second", "white");
    root.style.setProperty("--input-bg-color", "#2c2d34");
    mode = false;
  } else {
    changeModeBtn.style.transform = "rotateZ(0deg)";
    root.style.setProperty("--bg-main", "white");
    root.style.setProperty("--bg-second", "#191d2b");
    root.style.setProperty("--input-bg-color", "#e2e2e2 ");
    mode = true;
  }
}

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

function scrollBack() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
