import "./components/ShompysImage.js";
import "./components/MyButton.js";
import "./components/WebCharacter.js";
const element = document.querySelector("shompys-image");
// setTimeout(() => element.setAttribute("isenabled", false), 3000);

const body = document.querySelector("body");

body.addEventListener("INFO-BUTTON", (e) => {
    console.log(e.detail);
});

const buttons = document.querySelectorAll("my-button");
for (let button of buttons) {
    if (button.getAttribute("data-id") === "2") {
        button.onClick = () => console.log("hello world");
    }
}
