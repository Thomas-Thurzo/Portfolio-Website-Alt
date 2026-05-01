
// Get Text (controller)
function getValue(){

    let eingabeText = document.getElementById("eingabeString").value;
    let reverseText = reverseString(eingabeText);

    displayString(reverseText);   
}

// Reverse Text (logic)
function reverseString(eingabeText){
    
    let reverseTextArray = []; 

    for (let index = eingabeText.length - 1; index >= 0; index--) {
        reverseTextArray = reverseTextArray + eingabeText[index];       
    }

    return reverseTextArray;
}

// Display Text (view)
function displayString(reverseText){

    document.getElementById("nachricht").innerHTML = "Das umgedrehte Wort lautet: " + reverseText;

    document.getElementById("alert").classList.remove("invisible");
}

