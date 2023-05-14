const btn = document.getElementById("containerLogoBurger");
const backdrop = document.getElementById("backdrop");
const btnServicii = document.getElementById("btnServicii");
const btnServiciiBurger = document.getElementById("btnBurgerDropdownContainer");
const body = document.getElementById("body")

if (btn && backdrop) {
    const bLogo = document.getElementById("containerLogoBurger");
    const bContainer = document.getElementById("burgerListContainer");
    let widthB = body.offsetWidth;
  const bContainerUl = document.getElementById("containerBurgerStuff");
  btn.addEventListener("click", function () {
    if (!(bLogo.classList.contains("open")) && widthB > 500) {
      bLogo.classList.add("open");
      backdrop.style.display = "block";
      bContainer.style.width = "300px";
      bContainerUl.style.display = "flex";
      body.style.overflow = "hidden";
    }else if (!(bLogo.classList.contains("open")) && widthB <= 500) {
      bLogo.classList.add("open");
      backdrop.style.display = "block";
      bContainer.style.width = "200px";
      bContainerUl.style.display = "flex";
      body.style.overflow = "hidden";
    } else {
      bLogo.classList.remove("open");
      backdrop.style.display = "none";
      bContainer.style.width = "0px";
      bContainerUl.style.display = "none";
      body.style.overflow = "visible";
    }
  });
  backdrop.addEventListener("click", function () {
    bLogo.classList.remove("open");
    backdrop.style.display = "none";
    bContainer.style.width = "0px";
    bContainerUl.style.display = "none";
    body.style.overflow = "visible";
  });
}