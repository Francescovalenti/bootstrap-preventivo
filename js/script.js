// Raccolta dati
const datiutentiinput = document.getElementById("datiutenti");
const nome = document.getElementById("Nome");
const inputcognome = document.getElementById("cognomeinput");
const inputEmail = document.getElementById("emailinput");
const TipodiLavoroinput = document.getElementById("TipodiLavoro");
const exampleDescrizioneLavoro = document.getElementById("exampleDescrizioneLavoroinput");
const CodicePromozionaleinput = document.getElementById("CodicePromozionale");

const sconti = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]

datiutentiinput.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("submit");
    const TipodiLavoro = TipodiLavoroinput.value;


    const CodicePromozionale = CodicePromozionaleinput.value;
    console.log(CodicePromozionale);


    const oreLavoro = 10;
    let prezzoOrario = 0;


    if (TipodiLavoro === "Backed Development") {
        prezzoOrario = 20.50;
    } else if (TipodiLavoro === "Frontend Development") {
        prezzoOrario = 15.30;
    } else if (TipodiLavoro === "Project Analysis") {
        prezzoOrario = 33.60;
    }
  

    const sconti = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]

    let prezzoFinale = (Math.round(oreLavoro * prezzoOrario)).toFixed(2);
    console.log(prezzoFinale);




})


