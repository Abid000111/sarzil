let home = document.getElementById("home");
let about = document.getElementById("about");
let contact = document.getElementById("contact");
let settings = document.getElementById("settings");
let content = document.getElementById("content");
console.log(home, about, contact, settings);

home.addEventListener("click", () => {
	content.innerText = "this site is under construction";

	setTimeout(() => {
		content.innerText = "my name is sarzil";
	}, 3000);
});

about.addEventListener("click", () => {
	content.innerText = "404 error";

	setTimeout(() => {
		content.innerText = "my name is sarzil";
	}, 3000);
});

contact.addEventListener("click", () => {
	content.innerText = "+8801323400625";

	setTimeout(() => {
		content.innerText = "my name is sarzil";
	}, 3000);
});

settings.addEventListener("click", () => {
	content.innerText = "sorry";

	setTimeout(() => {
		content.innerText = "my name is sarzil";
	}, 3000);
});
