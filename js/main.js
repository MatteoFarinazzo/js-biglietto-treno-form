// variabili

let name;
let surname;
let age;
let rangeKilometers;


function userHasFinishDataCompletion(event) {
    event.preventDefault();

    let name = document.getElementById("nameInput").value;
    let surname = document.getElementById("surnameInput").value;
    let rangeKilometers = document.getElementById("distanceInKm").value;
    let age = document.getElementById("ageInput").value;

    parseInt(age);
    parseInt(rangeKilometers);
    

    let discountedPrice;

    if (age<18){discountedPrice = (rangeKilometers *0.21) + " " + "Scontato" + '&nbsp' + ((rangeKilometers *0.21) / 100 * 80).toFixed(2);}
    else if (age>=65) {discountedPrice = (rangeKilometers *0.21) + " " * "Scontato" + '&nbsp' + ((rangeKilometers *0.21) / 100 * 60).toFixed(2);}
    else {discountedPrice = rangeKilometers *0.21; }

    let ageTipe;
    if (age<18){ageTipe = "Minorenne";}
    else if (age>=65){ageTipe = "Over 65";}
    else {ageTipe = "Maggiorenne";}

    let min = 1;
    let max = 12;

    let random = Math.floor(Math.random() * (max - min) + min);

    
    document.getElementById("name").innerHTML = name;
    document.getElementById("surname").innerHTML = surname;
    document.getElementById("age").innerHTML = age;
    document.getElementById("ageTipe").innerHTML = ageTipe;
    document.getElementById("distance").innerHTML = rangeKilometers + " " + "Km";
    document.getElementById("wagon").innerHTML = random;
    document.getElementById("price").innerHTML = discountedPrice + " " + "£";

}

// bottone per eliminare i dati

document.getElementById("deleteBt").addEventListener("click", myFunction);

function myFunction() {

    document.getElementById("name").innerHTML ="";
    document.getElementById("surname").innerHTML = "";
    document.getElementById("age").innerHTML = "";
    document.getElementById("ageTipe").innerHTML = "";
    document.getElementById("distance").innerHTML = "";
    document.getElementById("wagon").innerHTML = "";
    document.getElementById("price").innerHTML = "";

  
}