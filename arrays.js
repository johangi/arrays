// Oppgave 1
// a) Hensikten med en array er å samle noen dataer i et objekt / en variabel, slik at du kan bruke de dataene flere steder.
// b) Arrays i javascript kan ha flere typer dataer, som for eksempel string og number, og det kan man ikke i de fleste
// andre språk.

// Oppgave 2
// a)
let anArray = [];
// b)
anArray = ["Donald Duck", "Onkel Skrue", "Ole Duck", "Dole Duck", "Doffen Duck", "Dolly Duck", "Mikke Mus", "Minni Mus", 
"Langbein", "Svarte-Petter"];
// c)
console.log(anArray[1], anArray[4], anArray[7]);
// de jeg har printet ut er den andre, femte og åttende dataen som jeg skrev

// Oppgave 3
// a) Index i en array er hvor et element er plassert i en array. 0 er det første elementet, det siste tallet er antall elementer -1
// b) Første index i en array er 0
// c) Siste index i en array er antall elementer -1
// d) Lengden på en array er hvor mange elementer er i den arrayen, for eksempel [1, 2, 3, 4] har en lengde på 4.
// e) Siste index på en array er lengden på arrayen -1, fordi den starter på 0.

// Oppgave 4
// a) typeof operatøren returnerer hva slags data et element er, men en array er et objekt, fordi den kan inneholde flere
// typer data.
// b) For å finne ut om en variabel eller en konstant er en array, så kan du bare skirve [navn].isArray
// c)
function arrayDetector(maybeAnArray){
        if(maybeAnArray.isArray == true){
            console.log("Argumentet er en array");
        } else{
            console.log("Argumentet er ikke en array");
        }
}
arrayDetector("Okay");