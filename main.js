document.addEventListener("DOMContentLoaded", function () {

const currentPage = window.location.pathname.split("/").pop();
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {
    const page = item.getAttribute("data-page");

    // تنقل بين الصفحات
    item.addEventListener("click", function (e) {
    e.preventDefault();
    if (page) {
        window.location.href = page;
    }
    });

    // تفعيل العنصر الحالي
    if (page === currentPage) {
    item.parentElement.classList.add("active-menu");
    }

});

});
document.addEventListener("DOMContentLoaded", function () {

  const currentPage = window.location.pathname.split("/").pop() || "results.html";
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach(item => {
    const page = item.getAttribute("data-page");

    // تفعيل العنصر الحالي
    if (page === currentPage) {
      item.classList.add("active-link");
    }

    // التنقل
    item.addEventListener("click", function (e) {
      e.preventDefault();
      if (page) window.location.href = page;
    });
  });

});

