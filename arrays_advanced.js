// Oppgave 1
/* I den første konstanten blir en array initalisert og deklarert. Deretter blir en ny konstant laget med den første
konstanten som sin verdi. Den tredje linjen med kode gjør ikke egentlig noe for utskriften, som blir "c", fordi det er c
som er på index 2 i arrayen.*/

// Oppgave 2
/*Utskriften på denne koden blir "NY VERDI", det er fordi elementet på index 0 blir endret av funksjonen, og deretter logget sånn.
Grunnen til at denne funksjonen funker er fordi funksjoner blir "hoister", det betyr at funksjoner kan bli skrevet hvor som helst
i koden, men blir alltid lest før alt annet. Så en funksjon skrevet på linje 234, funker på linje 2.*/

// Oppgave 3
/*a) En grunn kopi kopierer referansen til et objekt, så hvis du endrer noe i det originale objektet eller i kopien
så vil det endres begge steder. En dyp kopi kopierer verdien til objektet, som gjør at kopien blir selvstendig.*/
// b)
function arrayCopyMachine(...array){
    array = JSON.parse(JSON.stringify(array));
    return array
}

console.log(arrayCopyMachine(1, 2, 3, 4))