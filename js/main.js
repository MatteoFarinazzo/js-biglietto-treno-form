// variabili

let name;
let surname;
let age;
let rangeKilometers;


//chiedere dati all'utente:nome, coignome, età, chilometri da percorrere


function user_data(){
name = prompt("Inserisci il tuo nome");
surname = prompt("Inserisci il tuo cognome");
age = prompt("Inserisci la tua età");
if (isNaN(age)) {
    alert("Inserisci un numero per indicare l'età!");
    return; 
}
rangeKilometers = prompt("Inserisci quanti chilometri vuoi percorrere");
if (isNaN(rangeKilometers))
    alert("Inserisci un numero per indicare i chilometri!");
    return;

// convertire in numeri


}

//calcolare il prezzo del viaggio (numero di chilometri * 0.21£)
function base_price(){
console.log("Il prezzo del tuo biglietto è:" + rangeKilometers * 0.21);
let price = (rangeKilometers * 0.21);

document.getElementById("name").innerHTML = name;
document.getElementById("surname").innerHTML = surname;
document.getElementById("distance").innerHTML = rangeKilometers + "Km";
document.getElementById("price").innerHTML = price + "£";


}


//calcolare eventuale sconto da applicare al prezzo calcolato in precedenza
function discounte_price(){
if (age<18){
    console.log("Il prezzo del tuo biglietto è:" + (rangeKilometers *0.21) / 100 * 80 );}


else if (age>=65){
    console.log("Il prezzo del tuo biglietto è:" + (rangeKilometers *0.21) / 100 * 60 );}

else{
    console.log("Non hai sconti da applicare");}


    let discountedPrice;

    if (age<18){discountedPrice = "Scontato" + '&nbsp' + ((rangeKilometers *0.21) / 100 * 80).toFixed(2);}
    else if (age>=65) {discountedPrice = "Scontato" + '&nbsp' + ((rangeKilometers *0.21) / 100 * 60).toFixed(2);}
    else {discountedPrice =  "" + "Non hai sconti da applicare!"}



    document.getElementById("name").innerHTML = name;
    document.getElementById("surname").innerHTML = surname;
    document.getElementById("distance").innerHTML = rangeKilometers + "Km";
    
    document.getElementById("discountedPrice").innerHTML = '&nbsp' + discountedPrice ;

}



