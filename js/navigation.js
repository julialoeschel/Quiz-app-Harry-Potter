function navigation() {
  const homeSection = document.querySelector("[data-js=cards-section-home]");
  const bookmarkSection = document.querySelector(
    "[data-js=cards-section-bookmark]"
  );
  const profileSection = document.querySelector(
    "[data-js=cards-section-profile]"
  );

  const addSection = document.querySelector("[data-js=cards-section-add]");
  const bookmarkNav = document.querySelector("[data-js=nav-bookmark]");
  const homeNav = document.querySelector("[data-js=nav-home]");
  const addNav = document.querySelector("[data-js=nav-add]");
  const profileNav = document.querySelector("[data-js=nav-profile]");

  bookmarkNav.addEventListener("click", () => {
    bookmarkSection.classList.remove("hidden");
    homeSection.classList.add("hidden");
    addSection.classList.add("hidden");
    profileSection.classList.add("hidden");
  });

  homeNav.addEventListener("click", () => {
    bookmarkSection.classList.add("hidden");
    homeSection.classList.remove("hidden");
    addSection.classList.add("hidden");
    profileSection.classList.add("hidden");
  });

  addNav.addEventListener("click", () => {
    addSection.classList.remove("hidden");
    bookmarkSection.classList.add("hidden");
    homeSection.classList.add("hidden");
    profileSection.classList.add("hidden");
  });

  profileNav.addEventListener("click", () => {
    addSection.classList.add("hidden");
    bookmarkSection.classList.add("hidden");
    homeSection.classList.add("hidden");
    profileSection.classList.remove("hidden");
  });
}

export default navigation;
