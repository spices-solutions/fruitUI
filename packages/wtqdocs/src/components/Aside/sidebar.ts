//   sidebarBtn?.addEventListener("click", () => {
//     if (Aside.classList.contains("wtq-aside-collapse")) {
//       Aside.classList.remove("wtq-aside-collapse");
//       sidebar.setAttribute("aria-expanded", "false");
//       sidebarBtn.setAttribute("aria-expanded", "false");
//     } else {
//       Aside.classList.add("wtq-aside-collapse");
//       sidebar.setAttribute("aria-expanded", "true");
//       sidebarBtn.setAttribute("aria-expanded", "true");
//     }
//   });
// }

const sidebar = document.querySelector('.wtq-sidebar') as HTMLElement
const sidebarCollapseBtn = sidebar.querySelector('.collapse-button') as HTMLElement
const toggle = document.querySelector('.wtq-toggle') as HTMLElement

toggle?.addEventListener('click', () => {
  sidebar.classList.toggle('wtq-show')
})

sidebarCollapseBtn?.addEventListener('click', () => {
  sidebar.classList.toggle('wtq-aside-collapse')
})

const categoryItems = sidebar?.querySelectorAll(
  '.sidebar-category .category_collapse--wrapper',
) as NodeListOf<HTMLElement>

// biome-ignore lint/complexity/noForEach: <explanation>
categoryItems?.forEach((categoryItem) => {
  const categoryCollapse = categoryItem.querySelector(
    '.category-collapse',
  ) as HTMLElement
  const categoryToggle = categoryItem.querySelector(
    '.category-toggle',
  ) as HTMLElement
  const categoryLinks = categoryItem.querySelectorAll(
    '.collapse_item--link',
  ) as NodeListOf<HTMLElement>

  categoryToggle?.addEventListener('click', () => {
    const isActive = categoryItem.classList.contains('wtq-active')
    // biome-ignore lint/complexity/noForEach: <explanation>
    categoryLinks.forEach((categoryItemLink) => {
      categoryItemLink.setAttribute('tabindex', isActive ? '-1' : '0')
    })
    categoryItem.classList.toggle('wtq-active')
    categoryCollapse?.classList.toggle('wtq-active')
  })
})
