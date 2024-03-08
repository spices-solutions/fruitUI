function SidebarActions() {
	const categoryItems = document.querySelectorAll(
		".wtq-sidebar-category li",
	) as NodeListOf<Element>;
	const sidebarBtn = document.querySelector(".wtq-collapse-button");
	const sidebar = document.querySelector(".wtq-sidebar") as HTMLElement;
	const Aside = document.querySelector(".wtq-sidebar-category") as HTMLElement;

	// biome-ignore lint/complexity/noForEach: <explanation>
	categoryItems.forEach((categoryItem) => {
		const categoryItemLinks = categoryItem.querySelectorAll(
			".wtq-doc-link",
		) as NodeListOf<Element>;

		const collapse = categoryItem.querySelector(
			".wtq-sidebar-category-collapse",
		) as HTMLElement;
		const icon = categoryItem.querySelector(
			".wtq-sidebar-category-link",
		) as HTMLElement;

		icon?.addEventListener("click", () => {
			if (categoryItem.classList.contains("wtq-active")) {
				// biome-ignore lint/complexity/noForEach: <explanation>
				categoryItemLinks.forEach((categoryItemLink) => {
					categoryItemLink.setAttribute("tabindex", "-1");
				});
				collapse.style.maxHeight = "0px";
				icon?.classList.remove("wtq-active");
				categoryItem?.classList.remove("wtq-active");
				collapse?.classList.remove("wtq-active");
			} else {
				// biome-ignore lint/complexity/noForEach: <explanation>
				categoryItemLinks.forEach((categoryItemLink) => {
					categoryItemLink.removeAttribute("tabindex");
				});
				collapse?.classList.remove("wtq-active");
				collapse.style.maxHeight = `${collapse.scrollHeight}px`;
				icon?.classList.add("wtq-active");
				categoryItem?.classList.add("wtq-active");
			}
		});
	});

	// sidebarBtn?.addEventListener("click", () => {
	// 	Aside?.classList.toggle("wtq-aside-collapse");

  //   sidebar.setAttribute("aria-expanded", "true");
  //   sidebarBtn.setAttribute("aria-expanded", "true");
    
	// });

  sidebarBtn?.addEventListener("click", () => {
    if(Aside.classList.contains("wtq-aside-collapse")) {
      Aside.classList.remove("wtq-aside-collapse");
      sidebar.setAttribute("aria-expanded", "false");
      sidebarBtn.setAttribute("aria-expanded", "false");
    } else {
      Aside.classList.add("wtq-aside-collapse");
      sidebar.setAttribute("aria-expanded", "true");
      sidebarBtn.setAttribute("aria-expanded", "true");
    }
	});
}

function SidebarRefineActions() {
	const categoryItems = document.querySelectorAll(
		".wtq-sidebar-category li",
	) as NodeListOf<Element>;
	const sidebarBtn = document.querySelector(".wtq-collapse-button");
	const sidebar = document.querySelector(".wtq-sidebar") as HTMLElement;
	const Aside = document.querySelector(".wtq-sidebar-category") as HTMLElement;

	// biome-ignore lint/complexity/noForEach: <explanation>
	categoryItems.forEach((categoryItem) => {
		const categoryItemLinks = categoryItem.querySelectorAll(
			".wtq-doc-link",
		) as NodeListOf<Element>;

		const collapse = categoryItem.querySelector(
			".wtq-sidebar-category-collapse",
		) as HTMLElement;
		const icon = categoryItem.querySelector(
			".wtq-sidebar-category-link",
		) as HTMLElement;

		icon?.addEventListener("click", () => {
			if (categoryItem.classList.contains("wtq-active")) {
				// biome-ignore lint/complexity/noForEach: <explanation>
				categoryItemLinks.forEach((categoryItemLink) => {
					categoryItemLink.setAttribute("tabindex", "-1");
				});
				collapse.style.maxHeight = "0px";
				icon?.classList.remove("wtq-active");
				categoryItem?.classList.remove("wtq-active");
				collapse?.classList.remove("wtq-active");
			} else {
				// biome-ignore lint/complexity/noForEach: <explanation>
				categoryItemLinks.forEach((categoryItemLink) => {
					categoryItemLink.removeAttribute("tabindex");
				});
				collapse?.classList.remove("wtq-active");
				collapse.style.maxHeight = `${collapse.scrollHeight}px`;
				icon?.classList.add("wtq-active");
				categoryItem?.classList.add("wtq-active");
			}
		});
	});

	// sidebarBtn?.addEventListener("click", () => {
	// 	Aside?.classList.toggle("wtq-aside-collapse");

  //   sidebar.setAttribute("aria-expanded", "true");
  //   sidebarBtn.setAttribute("aria-expanded", "true");
    
	// });

  sidebarBtn?.addEventListener("click", () => {
    if(Aside.classList.contains("wtq-aside-collapse")) {
      Aside.classList.remove("wtq-aside-collapse");
      sidebar.setAttribute("aria-expanded", "false");
      sidebarBtn.setAttribute("aria-expanded", "false");
    } else {
      Aside.classList.add("wtq-aside-collapse");
      sidebar.setAttribute("aria-expanded", "true");
      sidebarBtn.setAttribute("aria-expanded", "true");
    }
	});
}

SidebarRefineActions();

// SidebarActions();
