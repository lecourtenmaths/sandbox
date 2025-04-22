/**
 * Le Système de Gestion d'Événements avec Contexte Closuré :

    Description : Créez un système d'événements où l'enregistrement d'un écouteur 
        permet de lui associer des données de contexte (une simple chaîne ou un nombre). 
        Lorsque l'événement est déclenché, chaque écouteur doit être appelé et avoir accès 
        à ses données de contexte spécifiques via une variable "fermée" (accessible grâce à une closure).
    Contraintes :   
        Les écouteurs sont stockés par type d'événement.
        La fonction d'enregistrement prend le type d'événement,
        l'écouteur (la fonction à appeler) et le contexte (les données à associer).
        Lors du déclenchement, chaque écouteur reçoit les données de l'événement 
        et doit pouvoir accéder à son contexte "fermé".
    Défi Closure : Comment utiliser les closures pour lier des données 
                de contexte uniques à chaque écouteur au moment de son enregistrement,
                 et s'assurer que cet accès persiste lors de l'exécution de l'écouteur ?
 */

const events = {
    sent : [],
    received : [],
}

function createListenerWithContext(context) {
    return function(callback) {return {callback, context};}
}

function addListener(event, callback, context) {
    if (events[event] !== undefined){
        events[event].push(createListenerWithContext(context)(callback));
    }
    else {throw(TypeError);}
}

function triggerEvent(event) {
    if (events[event] !== undefined) {
        for (const listener of events[event]) listener.callback(listener.context);
    }
}



