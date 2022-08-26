var keysAndValues = {
    d: "Daft Punk",
    b: "Bon Jovi",
    c: "Coldplay",
    a: "Aerosmith"
}
var claves = Object.keys(keysAndValues);
var valores = Object.values(keysAndValues);
var nuevoArray = [claves, valores]
claves.sort();
valores.sort();
console.log(nuevoArray)
nuevoArray