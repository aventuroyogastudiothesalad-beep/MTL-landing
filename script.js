const trigger = document.querySelector("#eleva");
const overlay = document.querySelector("#shots");

if (trigger && overlay) {
  const open = () => { overlay.hidden = false; document.body.style.overflow = "hidden"; };
  const close = () => { overlay.hidden = true; document.body.style.overflow = ""; };

  trigger.addEventListener("click", open);
  trigger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
  });

  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
  overlay.querySelector(".panel-close").addEventListener("click", close);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !overlay.hidden) close(); });
}

const roles = [
  { title: "System Solutions Engineer", org: "SGS — Notified Body 1639, Medical Devices · full remote", years: "Mar 2025 — now" },
  { title: "Data Analyst & Web Developer", org: "Freelance", years: "Dec 2024 — Mar 2025" },
  { title: "Data Analyst", org: "Insurance industry, full remote", years: "Aug 2021 — Dec 2024" },
  { title: "Coding Teacher — Scratch", org: "Logiscool + Montessori School, València", years: "2019 — 2021" },
  { title: "Research Assistant — Data Analyst", org: "Universitat de València, Spain", years: "2019 — 2021" }
];

const list = document.querySelector("#roles");

if (list) {
  for (const r of roles) {
    const row = document.createElement("div");
    row.className = "role";
    row.innerHTML = `
      <div>
        <div class="title"></div>
        <div class="org"></div>
      </div>
      <div class="years"></div>`;
    row.querySelector(".title").textContent = r.title;
    row.querySelector(".org").textContent = r.org;
    row.querySelector(".years").textContent = r.years;
    list.append(row);
  }
}
