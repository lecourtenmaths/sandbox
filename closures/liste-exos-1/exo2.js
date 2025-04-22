/** La Fabrique de Compteurs avec Incrément Personnalisé Closuré :

Description : Implémentez creerCompteur qui prend un incrément initial et retourne un objet.
              Cet objet a une méthode incrementer() qui utilise l'incrément initial (mémorisé par une closure) 
              pour augmenter un compteur interne privé, et une méthode afficher() pour obtenir la valeur actuelle.
              Chaque compteur doit avoir son propre incrément "fermé".
Contraintes :
                L'incrément initial est défini à la création du compteur 
                et ne peut pas être modifié directement après.
                La valeur du compteur interne est privée.
Défi Closure : 
            Comment la closure permet-elle de "figer" l'incrément initial pour 
            chaque compteur créé et de maintenir l'état du compteur privé ? */

function creerCompteur(incr) {
    let compteur = 0;
    const incrementer= function () { compteur += incr; }
    const afficher = function() {console.log(compteur);}
    return {incrementer, afficher};
}