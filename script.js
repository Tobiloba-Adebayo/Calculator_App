let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');
let main = document.querySelector('.main-container');
let numbers = document.querySelector('.numbers');
let buttons = document.querySelectorAll('#calc');
let Del = document.querySelector('.Del');
let input = document.querySelector('.input');
let output = document.querySelector('.output');
let board = document.querySelector('.board');
let head = document.querySelector('.head');
let theme = document.querySelector('.theme');
Del.addEventListener("click", Delete);
let calcBg = document.querySelector('.calculator-button');
let lastBtn = document.querySelector('.last-btn');
let toggleBtn = document.querySelector('.buttons');
let Cancel = document.querySelector('#reset');
let EqualTo = document.querySelector('#equal');

Cancel.addEventListener("click", Reset);
EqualTo.addEventListener("click", Equal);



button1.addEventListener("click", ()=>{
    main.style.background = "#272536"
    button1.style.background ="orangered";
    button2.style.background = "none";
    button3.style.background = "none";
    numbers.style.color = "#fff";
    input.style.color = "#fff";
    output.style.color = "#fff";
    board.style.background = "#242425";
    head.style.color = "#fff";
    theme.style.color = "#fff";
    Del.style.background = "skyblue";
    toggleBtn.style.background = "#16161a";
    Cancel.style.background = "skyblue";

    buttons.forEach((button)=>{
        button.style.color = "#000";
        button.style.background = "#fff";
    })

    lastBtn.style.background = "#242425";
    calcBg.style.background = "#242425";

    
})

button2.addEventListener("click", ()=>{
    main.style.background = "hsl(0, 0%, 90%)";
    button2.style.background = "orangered";
    button1.style.background = "none";
    button3.style.background = "none";
    numbers.style.color = "#000";
    board.style.background = "hsl(0, 0%, 93%)";
    input.style.color = "#000";
    output.style.color = "#000";
    numbers.style.color = "#000";
    theme.style.color = "#000";
    head.style.color = "#000";

    toggleBtn.style.background = "hsl(0, 0%, 93%)";
    calcBg.style.background = "rgb(214, 210, 210)";
    lastBtn.style.background = "rgb(214, 210, 210)";

    Cancel.style.background = "rgb(29, 131, 172)";
    Del.style.background = "rgb(29, 131, 172)"

    buttons.forEach((button)=>{
        button.style.color = "#000";
        button.style.background = "#fff";
        button.classList.add('working');
    })

});

button3.addEventListener("click", ()=>{
    main.style.background = "hsl(268, 75%, 9%)";
    buttons.forEach((button)=>{
        button.style.color = "orange";
        button.style.background = "hsl(268, 75%, 9%)";
        button.classList.add('active');
    })
    button3.style.background = "orangered";
    button1.style.background = "none";
    button2.style.background = "none";

    main.style.background = "hsl(268, 75%, 9%)";
    button2.style.background = "none";
    button1.style.background = "none";
    button3.style.background = "skyblue";
    numbers.style.color = "hsl(52, 100%, 62%)";
    board.style.background = "hsl(0, 0%, 93%)";
    input.style.color = "hsl(52, 100%, 62%)";
    output.style.color = "hsl(52, 100%, 62%)";
    numbers.style.color = "hsl(52, 100%, 62%)";
    theme.style.color = "hsl(52, 100%, 62%)";
    head.style.color = "hsl(52, 100%, 62%)";

    toggleBtn.style.background = "hsl(268, 71%, 12%)";

    calcBg.style.background = "hsl(268, 71%, 12%)";
    
    lastBtn.style.background = "hsl(268, 71%, 12%)";
    Del.style.background = "hsl(268, 78%, 23%)";
    board.style.background = "hsl(268, 71%, 12%)";
    Cancel.style.background = "hsl(268, 78%, 23%)";
    Cancel.style.color = "#fff";

})

buttons.forEach((button) =>{
    button.addEventListener("click", Calculate);
})


function Reset(){
     input.innerText = "";
        output.innerText = "0";
        return;
}

function Delete(){
       output.textContent = output.textContent.substr(0, output.textContent.length-1);
       return;
}

function Equal(){
    output.innerText = eval(input.innerText);
}

function Calculate(){
    let buttonText = this.innerText;
    input.textContent += buttonText;
    return;   
}