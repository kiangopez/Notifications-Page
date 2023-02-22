const notifications = document.querySelectorAll(".notification");
const readAll = document.getElementById("readAll");
const count = document.getElementById("count");

notifications.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.add("seen");
  });
});

readAll.addEventListener("click", () => {
  notifications.forEach((e) => {
    e.classList.add("seen");
  });
});
