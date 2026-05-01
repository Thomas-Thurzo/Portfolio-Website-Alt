
// Start Funktion 
function getValues(){

    // Get Zahlen
    let fizzZahl = document.getElementById("fizzZahl").value;
    let buzzZahl = document.getElementById("buzzZahl").value;

    // Umwandeln Zahlen in Integer
    fizzZahl = parseInt(fizzZahl);
    buzzZahl = parseInt(buzzZahl);

    // Check Eingabe
    if(fizzZahl == buzzZahl){
        alert("Bitte zwei unterschiedliche Zahlen eingeben!");
    }
    else{
    // Zahlen anzeigen
    let fizzBuzzArray = logikFunktion2(fizzZahl, buzzZahl);
    display(fizzBuzzArray);
    } 
}

// Logik Funktion 1
function logikFunktion1(fizzZahl, buzzZahl){

    let fizzBuzzArray = [];

    for (let index = 1; index <= 100; index++) {

        if(index % fizzZahl == 0 && index % buzzZahl == 0 && index != 0){
            fizzBuzzArray.push("FizzBuzz");
        }
        else if(index % fizzZahl == 0 && index != 0){
            fizzBuzzArray.push("Fizz");
        }
        else if(index % buzzZahl == 0 && index != 0){
            fizzBuzzArray.push("Buzz");
        }
        else{
            fizzBuzzArray.push(index);
        }     
    }
    return fizzBuzzArray;
}

// Logik Funktion 2
function logikFunktion2(fizzZahl, buzzZahl){

    let fizzBuzzArray = [];
    let Fizz = false;
    let Buzz = false;

    for (let index = 1; index <= 100; index++) {
        
        Fizz = index % fizzZahl == 0;
        Buzz = index % buzzZahl == 0;

        switch(true){
            case Fizz && Buzz:{
                fizzBuzzArray.push("FizzBuzz");
                break;
            }
            case Fizz:{
                fizzBuzzArray.push("Fizz");
                break;
            }
            case Buzz:{
                fizzBuzzArray.push("Buzz");
                break;
            }
            default:{
                fizzBuzzArray.push(index);
                break;
            }
        }
      
    }
    return fizzBuzzArray;
}

// Logik Funktion 3
function logikFunktion3(fizzZahl, buzzZahl){

    let fizzBuzzArray = [];

    for (let index = 1; index <= 100; index++) {
        
        let wert = ((index % fizzZahl == 0 ? "Fizz" : "" ) + (index % buzzZahl == 0 ? "Buzz" : "") || index);
        fizzBuzzArray.push(wert);       
    }
    return fizzBuzzArray;

}


// Display Funktion
function display(fizzBuzzArray){
     
     let tableBody = document.getElementById("ergebnis");

     let templateRow = document.getElementById("fizzBuzzTemplate");
 
     tableBody.innerHTML = "";
 
     for (let index = 0; index <= 100; index+=5) {
         
         let tableRow = document.importNode(templateRow.content, true);
 
         let rowCols = tableRow.querySelectorAll("td");

         rowCols[0].classList.add(fizzBuzzArray[index]);
         rowCols[0].textContent = fizzBuzzArray[index];
         
         rowCols[1].classList.add(fizzBuzzArray[index+1]);
         rowCols[1].textContent = fizzBuzzArray[index+1];
         
         rowCols[2].classList.add(fizzBuzzArray[index+2]);
         rowCols[2].textContent = fizzBuzzArray[index+2];
         
         rowCols[3].classList.add(fizzBuzzArray[index+3]);
         rowCols[3].textContent = fizzBuzzArray[index+3];
         
         rowCols[4].classList.add(fizzBuzzArray[index+4]);
         rowCols[4].textContent = fizzBuzzArray[index+4];
 
         tableBody.appendChild(tableRow);
     }
}