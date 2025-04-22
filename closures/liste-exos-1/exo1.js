/**Description : Écrivez une fonction creerMultiplicateur qui prend un nombre (le multiplicateur) et retourne une fonction qui prend un deuxième nombre 
 * et retourne leur produit. La fonction retournée doit accéder au premier nombre via une closure.
Contraintes :
La fonction interne ne doit pas avoir le multiplicateur comme paramètre direct.
Défi Closure : 
    Comment la fonction interne "se souvient"-elle du multiplicateur grâce à la 
    closure formée sur l'environnement de creerMultiplicateur ? */

function creerMultiplicateur(b) {
    const mult = b;
    return function (a) {return a*mult;}
}
