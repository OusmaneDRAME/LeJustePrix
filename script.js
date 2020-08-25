// Etape 1 - Sélectionner les éléments
let prix = document.querySelector("#prix");
let erreur = document.querySelector("small");
let formulaire = document.querySelector("#formulaire");


// Etape 2 - Cacher l'erreur
erreur.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001);
let coups = 0;
let nombreChoisi;

// Fonction Vérifier
function verifier(nombre) {
    let instruction = document.createElement("div");

    if (nombre < nombreAleatoire) {
        // C'est plus
        instruction.textContent = "#" + coups + " ("+ nombre + ") C'est plus !";
        instruction.className = "instruction plus"; 
    } else if(nombre > nombreAleatoire) {
        // C'est moins
        instruction.textContent = "#" + coups + " ("+ nombre + ") C'est moins !";
        instruction.className = "instruction moins"; 
    } else {
        // C'est le juste prix
        instruction.textContent = "#" + coups + " ("+ nombre + ") Félicitation vous avez trouvé le juste prix !";
        instruction.className = "instruction fini"; 
    }
    // Ajouter l'élement instruction devant les autres
    document.querySelector("#instructions").prepend(instruction);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
prix.addEventListener("keyup", () => {
    if (isNaN(prix.value)) {
        erreur.style.display = "inline";
    } else {
        erreur.style.display = "none";
    }
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener("submit", (e) => {
    e.preventDefault();
    if (isNaN(prix.value) || prix.value == "") {
        prix.style.borderColor = "red";
    } else {
        prix.style.borderColor = "silver";
        coups++;
        nombreChoisi = prix.value;
        prix.value = "";
        verifier(nombreChoisi);
    }
});

