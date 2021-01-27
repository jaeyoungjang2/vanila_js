const title = document.querySelector("#title");

const BASE_COLOR = "white";
const OTHER_COLOR = "#7f8c8d";

function hadleClick(){
    console.log(title.style.color);
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
        console.log(title.style.color);
    }
    else {
        console.log(title.style.color);
        title.style.color = BASE_COLOR;
    }
}

function init(){
    console.log("HI")
    title.style.color = BASE_COLOR;
    title.addEventListener("click", hadleClick);
}

console.log(title.style.color);
init();