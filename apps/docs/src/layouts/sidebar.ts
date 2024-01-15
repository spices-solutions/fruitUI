const categoryItems = document.querySelectorAll(
	".wtq-sidebar-category li",
) as NodeListOf<Element>;
const sidebarBtn = document.querySelectorAll(
	".wtq-sidebar-toggle",
) as NodeListOf<Element>;
const sidebar = document.querySelector(".wtq-sidebar") as HTMLElement;

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

	categoryItem?.addEventListener("click", () => {
		if (categoryItem.classList.contains("wtq-active")) {
			// biome-ignore lint/complexity/noForEach: <explanation>
			categoryItemLinks.forEach((categoryItemLink) => {
				categoryItemLink.setAttribute("tabindex", "-1");
			});
			icon?.classList.remove("wtq-active");
			categoryItem?.classList.remove("wtq-active");
			collapse.style.maxHeight = "0";
		} else {
			// biome-ignore lint/complexity/noForEach: <explanation>
			categoryItemLinks.forEach((categoryItemLink) => {
				categoryItemLink.removeAttribute("tabindex");
			});
			collapse.style.maxHeight = `${collapse.scrollHeight}px`;
			icon?.classList.add("wtq-active");
			categoryItem?.classList.add("wtq-active");
		}
	});

	setTimeout(() => {
		if (collapse) {
			collapse.style.transition =
				"all linear( 0 0%, 0 1.8%, 0.01 3.6%, 0.03 6.35%, 0.07 9.1%, 0.13 11.4%, 0.19 13.4%, 0.27 15%, 0.34 16.1%, 0.54 18.35%, 0.66 20.6%, 0.72 22.4%, 0.77 24.6%, 0.81 27.3%, 0.85 30.4%, 0.88 35.1%, 0.92 40.6%, 0.94 47.2%, 0.96 55%, 0.98 64%, 0.99 74.4%, 1 86.4%, 1 100%) 500ms";
		}
		if (categoryItem.classList.contains("wtq-active")) {
			collapse.style.maxHeight = `${collapse.scrollHeight}px`;
		}
	}, 500);
});

// biome-ignore lint/complexity/noForEach: <explanation>
sidebarBtn.forEach((button) => {
	button.addEventListener("click", () => {
		if (sidebar?.classList.contains("wtq-sidebar-active")) {
			sidebar?.classList.remove("wtq-sidebar-active");
			document.body.style.overflowY = "auto";
		} else {
			sidebar?.classList.add("wtq-sidebar-active");
			document.body.style.overflowY = "hidden";
		}
	});
});
