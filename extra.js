// func (){
// bot icon + bubble render
// request.send()
// resonse.recieve()
// remove loader
// attach text
// }

let chatElement = document.createElement("div");

let botImage = document.createElement("img");
botImage.src = "/static/img/mod_logo.png";
botImage.setAttribute("class", "col s2 offset-l1");
chatElement.appendChild(botImage);

function getBotLoader() {
	let loaderImage = document.createElement("img");
	loaderImage.src = "/static/img/typing.svg";
	loaderImage.setAttribute("class", "col s2 offset-l1");
	chatElement.appendChild(loaderImage);
	textinput = document.getElementById("textInput").value;
	console.log(chatElement, textinput);
	fetch("/get", { msg: textinput })
		.then(response => response.json())
		.then(data => console.log("Data", data));
}

textinput = document.getElementById("textInput").value;

console.log("TextInput", { msg: textinput });
fetch("/get", { method: "POST", body: { msg: textinput } })
	.then(response => response.text())
	.then(data => console.log("Data", data));
