function hamClick() {
  const hamberger = document.querySelector(".hamberger");
  const mobNav = document.querySelector(".mobnav");
  const hamburgerIcon = document.getElementById("hamburgerIcon");

  if (mobNav.classList.contains("drawerOpen")) {
    hamberger.style.color = "#FFF";
    mobNav.classList.add("drawerClosed");
    mobNav.classList.remove("drawerOpen");
    hamburgerIcon.src = "./assets/hamberger.svg";
  } else if (mobNav.classList.contains("drawerClosed")) {
    hamberger.style.color = "#FFF";
    mobNav.classList.add("drawerOpen");
    mobNav.classList.remove("drawerClosed");
    hamburgerIcon.src = "./assets/menu cross.svg ";
  }
}
