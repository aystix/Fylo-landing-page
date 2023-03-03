const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const errorMessage1 = document.getElementById("error-message1");
const errorMessage2 = document.getElementById("error-message2");
const email1 = document.getElementById("email1");
const email2 = document.getElementById("email2");



function validateInput() {
    if(email1.value.trim()===""){
        let parent = email1.parentElement;
        errorMessage1.style.visibility="visible";
        parent.classList.add("errors");
    }
    else if(!email1.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        let parent = email1.parentElement
        errorMessage1.style.visibility="visible";
        parent.classList.add("errors");
        return false;
    }
    else{
        let parent = email1.parentElement
        errorMessage1.style.visibility="hidden";
        parent.classList.remove("errors");
    }
}
document.querySelector("#button1").addEventListener("click", (e)=> {
    e.preventDefault();
    validateInput();
})

function validateInputs() {
    if(email2.value.trim()===""){
        errorMessage2.style.visibility="visible";
    }
    else if(!email1.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        errorMessage2.style.visibility="visible";
    }
    else {
        errorMessage2.style.visibility="hidden";
    }
}



document.querySelector("#button2").addEventListener("click", (e)=> {
    e.preventDefault();
    validateInputs();
})

