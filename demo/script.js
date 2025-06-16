let HOME = document.getElementById("HOME");
let ABOUT = document.getElementById("ABOUT");
let CONTACT = document.getElementById("CONTACT");
let SETTINGS = document.getElementById("SETTINGS");
let CONTENT = document.getElementById("CONTENT");

HOME.addEventListener("click", () => {
	CONTENT.innerText = "404 EROR";

	setTimeout(() => {
		CONTENT.innerText = "THIS SITE IS UNDER CONSTRUCTION";
	}, 2000);
});
ABOUT.addEventListener("mouseover", () => {
	CONTENT.innerText = "SARZIL NOT AVAILABLE";

	setTimeout(() => {
		CONTENT.innerText = "THIS SITE IS UNDER CONSTRUCTION";
	}, 2000);
});
CONTACT.addEventListener("mouseover", () => {
	CONTENT.innerText = "01323400625";

	setTimeout(() => {
		CONTENT.innerText = "THIS SITE IS UNDER CONSTRUCTION";
	}, 2000);
});
SETTINGS.addEventListener("mouseover", () => {
	CONTENT.innerText = "FIXING SETTINGS";

	setTimeout(() => {
		CONTENT.innerText = "THIS SITE IS UNDER CONSTRUCTION";
	}, 2000);
});
