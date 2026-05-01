
// Start oder Controller Funktion
function getValues(){

    // get values
    let startWert = document.getElementById("startWert").value;
    let endWert = document.getElementById("endWert").value;

    // parse values into integer
    startWert = parseInt(startWert);
    endWert = parseInt(endWert);

    // check
    if(startWert >= endWert){
        alert("Fehler: Startwert darf nich größer als der Entdwert sein!")
    }

    // display
    let zahlen = generateNumbers(startWert, endWert);
    displayNumbers(zahlen);

}

// Logik Funktion
function generateNumbers(startWert, endWert){

    let zahlen = [];

    for (let index = startWert; index <= endWert; index++) {       
        zahlen.push(index);
    }

    return zahlen;
}

// Ausgabe oder Display Funktion
function displayNumbers(zahlen){

    let templateRows = "";

    for (let index = 0; index < zahlen.length; index++) {   
        
        let className = "gerade";
        let wert = zahlen[index];

        if(wert % 2 == 0){
            className = "gerade"
        }
        else{
            className = "ungerade"
        }
        
        
        templateRows += `<tr><td class="${className}" >` + wert + "</td></tr>";      
    }

    document.getElementById("ergebnis").innerHTML = templateRows;
}

