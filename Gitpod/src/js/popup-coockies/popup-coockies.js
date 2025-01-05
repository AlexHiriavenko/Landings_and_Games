const cookiesSection = document.querySelector(".popup-coockies");
const btnAccept = cookiesSection.querySelector("button");

document.addEventListener("DOMContentLoaded", () => {
  cookiesSection.style.display =
    localStorage.getItem("coockiesAccept") === "true" ? "none" : "flex";
});

function removePopUp() {
  localStorage.setItem("coockiesAccept", "true");
  cookiesSection.style.display = "none";
  btnAccept.removeEventListener("click", removePopUp);
}

btnAccept.addEventListener("click", removePopUp);
