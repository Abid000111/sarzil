let child1 = document.getElementById("child_1");

let child2 = document.getElementById("child_2");

console.log(child1, child2);

child1.addEventListener("click", () => {
	console.log("hi sarzil");
	child1.innerText = "404 error";
});

child2.addEventListener("click", () => {
	console.log("fuck you sarzil");
});
