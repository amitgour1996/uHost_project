const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".button");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
const negativeBtn = document.querySelector(".modal__action--negative");

function closeModal() {
  //   modal.style.display = "none";
  //   backdrop.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}

for (const selectPlanButton of selectPlanButtons) {
  selectPlanButton.addEventListener("click", () => {
    // backdrop.style.display = "block";
    // modal.style.display = "block";
    backdrop.classList.add("open");
    modal.classList.add("open");
  });
}

backdrop.addEventListener("click", () => {
  //   mobileNav.style.display = "none";
  if (mobileNav) {
    mobileNav.classList.remove("open");
  }
  closeModal();
});

if (negativeBtn) {
  negativeBtn.addEventListener("click", closeModal);
}

toggleButton.addEventListener("click", () => {
  //   backdrop.style.display = "block";
  //   mobileNav.style.display = "block";
  backdrop.classList.add("open");
  if (mobileNav) {
    mobileNav.classList.add("open");
  }
});
