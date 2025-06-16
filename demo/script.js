let HOME = document.getElementById("HOME");
let ABOUT = document.getElementById("ABOUT");
let CONTACT = document.getElementById("CONTACT");
let SETTINGS = document.getElementById("SETTINGS");
let CONTENT = document.getElementById("CONTENT");

let nav = document.getElementById("nav");

nav.addEventListener("click", (e) => {
	// console.log(nav);
	// console.log(e.target.id);
	if (e.target.id === "HOME") {
		console.log("HOME is Clicked");
		CONTENT.innerText = "HOME";
	} else if (e.target.id === "ABOUT") {
		console.log("About is Clicked");
		CONTENT.innerText = "ABOUT";
	} else if (e.target.id === "CONTACT") {
		console.log("CONTACT Is Clicked");
		CONTENT.innerText = "CONTACT";
	} else if (e.target.id === "SETTINGS") {
		console.log("SETTINGS ARE GEARING UP");
		CONTENT.innerText = "SETTINGS";
	}

	setTimeout(() => {
		CONTENT.innerText = "THIS SITE IS UNDER CONSTRUCTION";
	}, 3000);
});

// HOME.addEventListener("click", () => {
// 	CONTENT.innerText = "404 EROR";

// 	setTimeout(() => {
// 		CONTENT.innerText = "THIS SITE IS UNDER CONSTRUCTION";
// 	}, 2000);
// });
// ABOUT.addEventListener("mouseover", () => {
// 	CONTENT.innerText = "SARZIL NOT AVAILABLE";

// 	setTimeout(() => {
// 		CONTENT.innerText = "THIS SITE IS UNDER CONSTRUCTION";
// 	}, 2000);
// });
// CONTACT.addEventListener("mouseover", () => {
// 	CONTENT.innerText = "01323400625";

// 	setTimeout(() => {
// 		CONTENT.innerText = "THIS SITE IS UNDER CONSTRUCTION";
// 	}, 2000);
// });
// SETTINGS.addEventListener("mouseover", () => {
// 	CONTENT.innerText = "FIXING SETTINGS";

// 	setTimeout(() => {
// 		CONTENT.innerText = "THIS SITE IS UNDER CONSTRUCTION";
// 	}, 2000);
// });

// ============================================
// let name = "shajadur";
// let name2 = "rohan";
// let name3 = "rayhan";

// // console.log(name);

// if (name === "sarzil") {
// 	console.log("mehedi");
// } else if (name2 === "rayhan") {
// 	console.log("mehedi");
// } else if (name3 === "rohan") {
// 	console.log("mehedi");
// } else {
// 	console.log("sarzil");
// }
