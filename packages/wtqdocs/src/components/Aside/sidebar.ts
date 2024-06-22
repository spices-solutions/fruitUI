const sidebar = document.querySelector('.wtq-sidebar') as HTMLElement
const sidebarOverlay = document.querySelector('.wtq-sidebar-overlay') as HTMLElement
const sidebarCollapseBtn = sidebar.querySelector('.collapse-button') as HTMLElement
const toggle = document.querySelector('.wtq-nav-menu') as HTMLElement

toggle?.addEventListener('click', () => {
  sidebar.classList.toggle('wtq-show')
  sidebarOverlay.classList.toggle('wtq-show')
})

sidebarOverlay?.addEventListener('click', () => {
  sidebar.classList.remove('wtq-show')
  sidebarOverlay.classList.remove('wtq-show')
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
