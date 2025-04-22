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

function isEmpty(obj) {
    if (typeof obj !== 'object') throw(TypeError);
    let countProperties = 0;
    for (let key in obj) countProperties++;
    return (countProperties === 0);
}

function addSalaries(salaries) {
    let ret = 0;
    for (const salarie of salaries) ret += salarie;
    return ret;
}

function muliplyNumeric(obj) {
    if (typeof obj  !== 'object') throw(TypeError);
    for (const key in obj) {
        if (typeof obj[key] === 'number') obj[key] *= 2;
    }
}




