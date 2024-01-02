let buttons = document.querySelectorAll(".button");
let butt = document.querySelector(".special");
let display = document.querySelector("#dis");
let btn = Array.from(buttons);
let string = "";
let str = "";
btn.forEach((button) => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML == "="){
            string = eval(string);
            display.value = string;
        }
        else if(e.target.innerHTML == "DE"){
            let text = display.value;
            let ntext = text.slice(0,-1);
            display.value = ntext;
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            display.value = str;
        }
        else{
            string = string + e.target.innerText;
            display.value = string;
        }
    });
});