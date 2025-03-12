// Raccolta dati
const datiutentiinput = document.getElementById("datiutenti");
const nome = document.getElementById ("Nome");
const inputcognome = document.getElementById ("cognomeinput");
const inputEmail = document.getElementById ("emailinput");
const TipodiLavoroinput = document.getElementById ("TipodiLavoro");
const exampleDescrizioneLavoro = document.getElementById ("exampleDescrizioneLavoroinput");
const CodicePromozionaleinput = document.getElementById ("CodicePromozionale");

const sconti = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]

datiutenti.addEventListener ("submit", function (event){
    event.preventDefault();
    console.log("submit");
    const TipodiLavoro= TipodiLavoroinput.value;
    console.log(TipodiLavoro);
    
    const CodicePromozionale = CodicePromozionaleinput.value
    console.log(CodicePromozionale);
    

    const oreLavoro = 10 
    const prezzoOrario = [20.50, 15.30, 33.60]
   
    for (let i = 0; i <= prezzoOrario.length; i++){
        const inpprezzoOrario = prezzoOrario [i];
        console.log(inpprezzoOrario);
        
    
    if (TipodiLavoro === "Backed Development")
         {
        inpprezzoOrario = 20.50;
    } else if (TipodiLavoro === "Frontend Development ") {
        inpprezzoOrario = 15.30;
    } else if(TipodiLavoro === "Project Analysis") {
        inpprezzoOrario = 33.60;
    }
    
    let prezzoFinale =(Math.round (oreLavoro * inpprezzoOrario)).toFixed(2);

   

    console.log(prezzoFinale);
}


    
})


