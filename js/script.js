// Raccolta dati
const datiutentiinput = document.getElementById("datiutenti");
const nome = document.getElementById("Nome");
const inputcognome = document.getElementById("cognomeinput");
const inputEmail = document.getElementById("emailinput");
const TipodiLavoroinput = document.getElementById("TipodiLavoro");
const DescrizioneLavoroinput = document.getElementById("DescrizioneLavoro");
const CodicePromozionaleinput = document.getElementById("CodicePromozionale");
const risultato = document.getElementById("risultato");



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

    let prezzoFinale = (Math.round(oreLavoro * prezzoOrario)).toFixed(2);
        console.log(prezzoFinale);

    const scontiValidi = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]
       
       let codiceValido = false;
    for (let i = 0; i < scontiValidi.length; i++) {
        const eleSconti = scontiValidi[i];
        

       
        if (eleSconti === CodicePromozionale ) {
            codiceValido = true;
            let sconto = prezzoFinale * 25 / 100;
            prezzoFinale = prezzoFinale - sconto;
            console.log(prezzoFinale);
            
         }
        
        }
        if (codiceValido === false){
            alert ("codice promozionale non valido");}

    



    

       
        
      


    })

   
    

