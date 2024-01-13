const hidden = document.getElementById("hidden");
hidden.style.display = "none";

let heads = 0;
let tails = 0;

function flipClick() {  
    const multi = document.getElementById("multi");
    console.log("multi = ", multi.value);
    if (multi.value < 1) {
        flip();
    } else {
        for (let i = 0; i < multi.value; i++) {
            flip();
        }
    }
};

function flip() {
    x = (Math.floor(Math.random() * 2) == 0);
        if(x){
            updateResult("Heads");
        }else{
            updateResult("Tails");
        }
}

function updateResult(result) {
    document.getElementById("result").innerHTML = result;
    tossresultFunction(result);
    if (result === "Heads") {
        addHeads();
    } 
    if (result === "Tails") {
        addTails();
    }
    hidden.style.display = "";
};

function addHeads() {
    let value = document.querySelector("#headsScore").innerHTML;
    let numberValue = Number(value);
    let newValue = numberValue + 1;
    document.querySelector("#headsScore").innerHTML = newValue;
}

function addTails() {
    let value = document.querySelector("#tailsScore").innerHTML;
    let numberValue = Number(value);
    let newValue = numberValue + 1;
    document.querySelector("#tailsScore").innerHTML = newValue;
}

// result flip

const resultIcon = document.getElementById('coin'); 
const tossBtn = document.getElementById('click'); 

function tossresultFunction(result) {  
const imageUrl = result === "Heads" ? 
'../coin-flip/assets/h-icon.png' : 
'../coin-flip/assets/t-icon.png'; 
    resultIcon.classList.add('flip'); 
    setTimeout(() => { 
        resultIcon.innerHTML =  
            `<img src="${imageUrl}" alt="${result}">`; 
        resultIcon.classList.remove('flip'); 
    }, 500); 
}

function reset() {
    let resetValue = 0;
    document.querySelector("#headsScore").innerHTML = resetValue;
    document.querySelector("#tailsScore").innerHTML = resetValue;
}

