// Raccolta dati
const datiutentiinput = document.getElementById("datiutenti");
const TipodiLavoroinput = document.getElementById("TipodiLavoro");
const CodicePromozionaleinput = document.getElementById("CodicePromozionale");
const risultato = document.getElementById("risultato");

TipodiLavoroinput.innerHTML = `
<option selected>Seleziona il tipo di lavoro</option>
<option value="Backend Development">Backend Development</option>
<option value="Frontend Development">Frontend Development</option>
<option value="Project Analysis">Project Analysis</option>
`;






datiutentiinput.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("submit");
    const TipodiLavoro = TipodiLavoroinput.value;
    const CodicePromozionale = CodicePromozionaleinput.value;









    const oreLavoro = 10;
    let prezzoOrario = 0;
    


    if (TipodiLavoro === "Backend Development") {
        prezzoOrario = 20.50;
    } else if (TipodiLavoro === "Frontend Development") {
        prezzoOrario = 15.30;
    } else if (TipodiLavoro === "Project Analysis") {
        prezzoOrario = 33.60;
    }
   
    let prezzoFinalestr =  (Math.round(oreLavoro * prezzoOrario)).toFixed(2);
    prezzoFinale= parseFloat (prezzoFinalestr);
    console.log(prezzoFinale);

   
    

    const scontiValidi = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]

    let codiceValido = false;
    for (let i = 0; i < scontiValidi.length; i++) {
        const eleSconti = scontiValidi[i];



        if (eleSconti === CodicePromozionale) {
            codiceValido = true;
            let sconto = prezzoFinalestr * 25 / 100;
            prezzoFinale = prezzoFinalestr - sconto;
            console.log(prezzoFinale);

        }

    }
    if (!codiceValido && CodicePromozionale !== "") {
        alert("codice promozionale non valido");
    }

    document.getElementById("risultato").innerHTML = `€ ${prezzoFinale.toFixed(2)}`;

    datiutenti.reset();

})




