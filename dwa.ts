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
const toggle = document.querySelector('.wtq-toggle') as HTMLElement

toggle?.addEventListener('click', () => {
  sidebar.classList.toggle('wtq-show')
})

const categoryItems = sidebar?.querySelectorAll(
  '.sidebar_category .category_collapse--wrapper'
)

// biome-ignore lint/complexity/noForEach: <explanation>
categoryItems?.forEach((categoryItem) => {
  const categoryCollapse = categoryItem?.querySelector('.category_collapse')
  const categoryToggle = categoryItem?.querySelector('.category_toggle')
  const categoryLinks = categoryItem?.querySelectorAll('.collapse_item--link')

  categoryToggle?.addEventListener('click', () => {
    if (categoryItem.classList.contains('wtq-active')) {
      categoryLinks.forEach((categoryItemLink) => {
        categoryItemLink.setAttribute('tabindex', '-1')
      })
      categoryCollapse.style.maxHeight = `0px`
      categoryItem.classList.remove('wtq-active')
      categoryCollapse?.classList.remove('wtq-active')
    } else {
      categoryLinks.forEach((categoryItemLink) => {
        categoryItemLink.setAttribute('tabindex', '0')
      })
      categoryCollapse.style.maxHeight = `${categoryCollapse.scrollHeight}px`
      categoryItem.classList.add('wtq-active')
      categoryCollapse?.classList.add('wtq-active')
    }
  })
})
