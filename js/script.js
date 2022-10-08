let menuBtn = document.querySelector(".hamburger");

let navList = document.querySelector(".nav-list");

menuBtn.addEventListener("click",()=>{
    navList.classList.toggle("open");
})

// Popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 1000);
  });
}