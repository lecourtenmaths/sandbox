let vowels = ["a","e","i","o","u"];

console.log("Object.getPrototypeOf(vowels)",
Object.prototype.toString.call(Object.getPrototypeOf(vowels)))
console.log("Object.getPrototypeOf(Object.getPrototypeOf(vowels))",
Object.prototype.toString.call(Object.getPrototypeOf(Object.getPrototypeOf(vowels))))
console.log("Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(vowels)))",
Object.prototype.toString.call(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(vowels)))))

console.log("vowels.__proto__: %s", Object.prototype.toString.call(vowels.__proto__));
console.log("vowels.__proto__.__proto__: %s", Object.prototype.toString.call(vowels.__proto__.__proto__));
console.log("vowels.__proto__.__proto__.__proto__: %s", Object.prototype.toString.call(vowels.__proto__.__proto__.__proto__));

if ((Object.getPrototypeOf(vowels) === vowels.__proto__) && (vowels.__proto__  === Array.prototype)) { 
  console.log("(Object.getPrototypeOf(vowels) === vowels.__proto__) && (vowels.__proto__  === Array.prototype)");
}

if (vowels.__proto__ != vowels.prototype) { 
  console.log("Array.prototype != vowels.prototype");
  console.log("vowels.prototype: %s", vowels.prototype)
}


function A() {
    this.truc = 'toto';
    function B() {
        return this.truc;
    }
}

const O = new A();

