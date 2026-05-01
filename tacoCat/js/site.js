
// Start Funktion
function startFunktion(){

    // Einlesen des Wortes
    let eingabeText = document.getElementById("eingabeText").value;

    // Check ob etwas eingeben wurde
    if (eingabeText != ""){
         // Aufrufen der Logik Funktion 
    let ergebnis = logikFunktion(eingabeText);

        // Aufrufen der Display Funktion
        displayFunktion(ergebnis);
    }  
    else{
        alert("Bitte ein Wort eingeben!");
    }
}

// Logik Funktion, Check ob die Eingabe ein Palindrom ist
function logikFunktion(eingabeText){

    // Variablen
    let ergebnis = "Es handelt sich bei dem Wort " + eingabeText + " um kein Palindrom!";
    let wortReverse = "";
    let regex = /[^a-z0-9]/gi;

    // Entfernen von Sonderzeichen und Leerzeichen
    eingabeText = eingabeText.replace(regex,"");

    // Das Wort umdrehen
    for (let index = eingabeText.length - 1; index >= 0; index--) {
        wortReverse = wortReverse + eingabeText[index];      
    }

    // Alle Buchstaben zu Großbuchstaben umwandeln
    eingabeText = eingabeText.toLowerCase();
    wortReverse = wortReverse.toLowerCase();

    // Überprüfung auf Gleicheit
    if(eingabeText == wortReverse){
        ergebnis = "Das Wort " + eingabeText + " ist ein Palindrom!"
    }

    // Rückgabe des Ergebnises
    return ergebnis;
}

// Display Funktion
function displayFunktion(ergebnis){

    document.getElementById("ausgabe").innerHTML = ergebnis;

    document.getElementById("alert").classList.remove("invisible");
}

// Clear Funktion, zum löschen der Konsole
function clearFunktion(){

    document.getElementById("eingabeText").value = "";

    document.getElementById("alert").classList.add("invisible");
}