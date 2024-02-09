// select empty div and assign it to a variable
const myEmptyDiv = document.querySelector("#myEmptyDiv");
const heading = document.createElement("h1");
heading.innerHTML = "Hey it is winter outside!" ;
heading.style.cursor = "pointer";
heading.addEventListener("click", handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick() {    
    document.body.style.backgroundColor = "magenta";
}
