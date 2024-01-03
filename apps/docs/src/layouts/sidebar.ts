const categoryItems = document.querySelectorAll(".wtq-sidebar-category li");

categoryItems.forEach((categoryItem) => {
  const categoryItemLinks = categoryItem.querySelectorAll(".wtq-doc-link");

  const collapse = categoryItem.querySelector(".wtq-sidebar-category-collapse");
  const icon = categoryItem.querySelector(".wtq-sidebar-category-link");

  categoryItem?.addEventListener("keydown", (e) => {
    if (categoryItem.classList.contains("wtq-active")) {
      categoryItemLinks.forEach((categoryItemLink) => {
        categoryItemLink.removeAttribute("tabindex");
      });
    } else {
      categoryItemLinks.forEach((categoryItemLink) => {
        categoryItemLink.setAttribute("tabindex", -1);
      });
    }
    if (e.key == "Enter") {
      if (categoryItem.classList.contains("wtq-active")) {
        categoryItemLinks.forEach((categoryItemLink) => {
          categoryItemLink.setAttribute("tabindex", -1);
        });
        icon?.classList.remove("wtq-active");
        categoryItem?.classList.remove("wtq-active");
        collapse.style.maxHeight = null;
      } else {
        categoryItemLinks.forEach((categoryItemLink) => {
          categoryItemLink.removeAttribute("tabindex");
        });
        collapse.style.maxHeight = collapse.scrollHeight + "px";
        icon?.classList.add("wtq-active");
        categoryItem?.classList.add("wtq-active");
      }
    }
  });

  categoryItem?.addEventListener("click", () => {
    if (categoryItem.classList.contains("wtq-active")) {
      categoryItemLinks.forEach((categoryItemLink) => {
        categoryItemLink.removeAttribute("tabindex");
      });
      icon?.classList.remove("wtq-active");
      categoryItem?.classList.remove("wtq-active");
      collapse.style.maxHeight = null;
    } else {
      categoryItemLinks.forEach((categoryItemLink) => {
        categoryItemLink.setAttribute("tabindex", -1);
      });
      collapse.style.maxHeight = collapse.scrollHeight + "px";
      icon?.classList.add("wtq-active");
      categoryItem?.classList.add("wtq-active");
    }
  });

  if (categoryItem.classList.contains("wtq-active")) {
    collapse.style.maxHeight = collapse.scrollHeight + "px";
  }
});
