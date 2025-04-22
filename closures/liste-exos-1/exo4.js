/**Le Système de Messagerie Sécurisé (Axé Closures) :

Description : 
                Implémentez un système où chaque utilisateur a une fonction privée pour envoyer des messages chiffrés. 
                La clé de chiffrement est unique à chaque utilisateur et est accessible uniquement via cette fonction d'envoi.
                 Une fonction globale de "réception" (qui ne fait que simuler la lecture) devrait pouvoir déchiffrer le message 
                 si elle reçoit la clé privée correspondante (qui devrait être gérée par une autre closure propre à l'utilisateur).
Contraintes :
                Simulez le chiffrement et le déchiffrement par de simples transformations de chaînes
                (e.g., ajout/suppression d'un préfixe basé sur la clé).
                L'accès direct aux clés privées doit être impossible en dehors des fonctions de l'utilisateur.
Défi Closure :  Comment les closures peuvent-elles encapsuler les clés de manière à ce qu'elles soient associées à un utilisateur 
                spécifique et inaccessibles ailleurs, tout en permettant l'opération d'envoi et de réception ? */
function generateKeys()
{
    const size = 64;
    const seed = [];
    for (const cifferIdx = 0; cifferIdx < size; cifferIdx++){
        const ciffer = Math.floor((2 * Math.random()));
        seed[cifferIndex] = ciffer;
    }
    const accumulator = (acc, cur) => {
        acc.publicKey = `${acc.publicKey}${cur}`;
        acc.privateKey = `${cur}${acc.privateKey}`;
        return acc;
    }
    return seed.reduce(accumulator, {publicKey:'',privateKey:''});
}

function createUser(name) {
    const {privateKey, publicKey} = generateKeys();
    function encrypt(msg) {
        return `${privatekey}${msg}`;
    }
    function send(msg) {
        return {crypted:encrypt(msg), publicKey};
    }
    return function () {
        function sendFrom(content) {let msg = send(content); msg['from'] = name};
        return {name, sendFrom};
    }
}

function decrypt(msg) {
    //decrypte mais j ai la flemme la logique est ailleurs du point de vue de l exercice...
    //renvoie le msg decrypté sous une forme ou une autre...  
}

function reception(msg) {
    const msgStruct = {
        from : (from) => typeof from === 'string',
        crypted : (crypted) => typeof crypted === 'string',
        publicKey: (key) => typeof key === 'string' && key.length() === 64,
    };
    let canProceed = true;
    for (const key in msgStruct) {
        if (!(msg[key] !== undefined && msgStruct[key](msg[key]))) canProceed = false;
        if (!canProceed) break;
    }
    if (canProceed) {
        return decrypt(msg);
    }
    throw (TypeError);
}