var utenteCognome = "Frassini";

var cognomi = ["Curlante", "Pardini", "Rossi", "Deli"]
cognomi.push(utenteCognome);

console.log(cognomi);

var listaOrdinata = cognomi.slice();
listaOrdinata.sort();
console.log(listaOrdinata);