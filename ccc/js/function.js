// Show class
const popupLink = document.querySelectorAll(".item-link");

if (popupLink != null) {
	popupLink.forEach(element => {
		let showLink = element.querySelector(".show-icon");
		let visBox = element.querySelector("#toggleDisplay");
		let closeIcon = element.querySelector(".close-icon");
		let introDiv = element.querySelector("#introBox")

		showLink.addEventListener("click", function () {
			visBox.setAttribute("class", "show");
		});

		closeIcon.addEventListener("click", function () {
			visBox.setAttribute("class", "hide");
			introDiv.setAttribute("class", "hideIntro");
		});
	});
};
