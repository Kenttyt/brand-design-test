const tabs = document.querySelectorAll(".tab-btn");
const panels = document.querySelectorAll(".tab-panel");

const panelMap = {
  logo: "panel-logo",
  colors: "panel-colors",
  type: "panel-type",
  brand: "panel-brand",
  mockups: "panel-mockups",
  social: "panel-social",
  guide: "panel-guide",
};

tabs.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    panels.forEach((p) => p.classList.remove("active"));
    btn.classList.add("active");
    const id = panelMap[btn.dataset.tab];
    if (id) document.getElementById(id).classList.add("active");
  });
});
