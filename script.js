document.addEventListener("mousemove", (e) => {
	let body = document.querySelector("body");
	let circle = document.createElement("span");
	let x = e.pageX;
	let y = e.pageY;
	document.querySelector("#cursor").style.left = x + "px";
	document.querySelector("#cursor").style.top = y + "px";
	circle.style.left = x + "px";
	circle.style.top = y + "px";
	let size = Math.random() * Math.floor(Math.random() * (150 - 10 + 1) + 10);
	circle.style.width = 20 + size + "px";
	circle.style.height = 20 + size + "px";
	body.appendChild(circle);
	setTimeout(() => {
		circle.style.opacity = 0;
		setTimeout(() => {
			circle.remove();
		}, 2500);
	}, 2500);
});

document.querySelector("#cursor").setAttribute("data-after", "🧼");