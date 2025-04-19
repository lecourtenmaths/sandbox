/**
 * @file 141-objets.js
 * @description Exercices de Tutoriel
 * @author LeCourtenMaths
 * @date 2025-04-10
 * @see [Objets](https://fr.javascript.info/object)
*/
'use strict'

function helloObject() {
    let user = {};
    user.name = "John";
    user.surname = "Smith";
    user.name = "Pete";
    delete user.name;
}

