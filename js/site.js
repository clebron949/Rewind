// Global Variables
let form = document.getElementById("form");
form.addEventListener('submit',Rewind);

//Functions
function Rewind(event) {
    
    let sentence = document.getElementById('inputText').value;
    console.log(sentence);

    let reversed = ""
    for (let index = sentence.length - 1; index > -1; index--){  
        reversed += sentence[index];   
    }
    console.log(reversed);

    updateResult(reversed);
    event.preventDefault();
};

function updateResult(text) {
    let element = document.getElementById('myResults');
    element.textContent = text;
}