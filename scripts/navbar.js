function hamClick() {
  const hamberger = document.querySelector(".hamberger");
  const mobNav = document.querySelector(".mobnav");

  if (mobNav.classList.contains("drawerOpen")) {
    hamberger.style.color = "#FFF";
    mobNav.classList.add("drawerClosed");
    mobNav.classList.remove("drawerOpen");
  } else if (mobNav.classList.contains("drawerClosed")) {
    hamberger.style.color = "#FFF";
    mobNav.classList.add("drawerOpen");
    mobNav.classList.remove("drawerClosed");
  }
}
