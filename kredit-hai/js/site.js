
// Formatierung für Euro Währung
let formatter = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR"});


// Start Funktion
function programmStart(){
    
    let summe = document.getElementById("summeEingabe").value;
    let monate = document.getElementById("monateEingabe").value;
    let zinsen = document.getElementById("zinsenEingabe").value;

    // Umwandeln der Eingabewerte in Zahlentypen
    summe = parseFloat(summe);
    monate = parseInt(monate);
    zinsen = parseFloat(zinsen);

    // Ausgabe Kapitalsumme
    document.getElementById("kapitalSummeAusgabe").innerHTML = formatter.format(summe);

    // Ausgabe monatliche Kosten
    document.getElementById("monatlicheKosten").innerHTML = formatter.format(monatlicheKostenBerechnung(summe, monate, zinsen));

    // Ausgabe Zinsen Total
    document.getElementById("zinsenAusgabe").innerHTML = formatter.format(gesamtZinsenBerechnung(summe, monate, zinsen));

    // Ausgabe Kosten Total
    document.getElementById("kostenAusgabe").innerHTML = formatter.format(summe + gesamtZinsenBerechnung(summe, monate, zinsen));
 
    // Berechnung und Ausgabe Table
    displayTable(summe, monate, zinsen, monatlicheKosten);  
}


// Berechnung für die monatlichen Kosten
function monatlicheKostenBerechnung(summe, monate, zinsen){
    let monatlicheKosten = summe * (zinsen / 1200) / (1 - Math.pow((1 + zinsen / 1200), -monate));

    return monatlicheKosten;
}

// Berechnung für die gesammten Zinsen
function gesamtZinsenBerechnung(summe, monate, zinsen){

       // Variablen
       let monatlicheKosten = monatlicheKostenBerechnung(summe, monate, zinsen);
       let kapitalRückzahlung = monatlicheKosten;
       let zinsenRückzahlung = summe * zinsen / 1200;
       let totalZinsen = 0; 

    for (let index = 1; index <= monate; index++) {
        zinsenRückzahlung = (summe * zinsen / 1200);
        kapitalRückzahlung = (monatlicheKosten - zinsenRückzahlung);
        summe = (summe - kapitalRückzahlung);
        totalZinsen = totalZinsen + zinsenRückzahlung;       
    }

    return totalZinsen;
}


// Ausgabe Table
function displayTable(summe, monate, zinsen){
    
    // Variablen
    let monatlicheKosten = monatlicheKostenBerechnung(summe, monate, zinsen);
    let kapitalRückzahlung = monatlicheKosten;
    let zinsenRückzahlung = summe * zinsen / 1200;
    let totalZinsen = 0; 
    let tableRow = "";
    let monateSpalte = "";
    let montalicheZahlungenSpalte = "<td>" + formatter.format(monatlicheKosten) + "</td>";
    let kapitalRückzahlungSpalte = "";
    let zinsenRückzahlungSpalte = "";
    let totalZinsenSpalte = "";
    let summeSpalte = "";
    
    for (let index = 1; index <= monate; index++) {

        // Berechnungen
        zinsenRückzahlung = (summe * zinsen / 1200);
        kapitalRückzahlung = (monatlicheKosten - zinsenRückzahlung);
        summe = (summe - kapitalRückzahlung);
        totalZinsen = totalZinsen + zinsenRückzahlung;

        // Erzeugen der einzelnen Spalten
        monateSpalte = "<td>" + index + "</td>";
        kapitalRückzahlungSpalte = "<td>" + formatter.format(kapitalRückzahlung) + "</td>";
        zinsenRückzahlungSpalte = "<td>" + formatter.format(zinsenRückzahlung) + "</td>";
        totalZinsenSpalte = "<td>" + formatter.format(totalZinsen) + "</td>";
        summeSpalte = "<td>" + formatter.format(summe) + "</td>";
        
        // Erzeugen der Reihe
        tableRow += "<tr>" + monateSpalte + montalicheZahlungenSpalte + kapitalRückzahlungSpalte + zinsenRückzahlungSpalte + totalZinsenSpalte + summeSpalte + "</tr>";
        
        // Ausgabe der Reihe
        document.getElementById("tableAusgabe").innerHTML = tableRow;
        
    }
}

