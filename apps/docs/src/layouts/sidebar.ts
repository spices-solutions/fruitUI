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
