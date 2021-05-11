var utenteCognome = "Frassini";

var cognomi = ["Curlante", "Pardini", "Rossi", "Deli"]
cognomi.push(utenteCognome);

console.log(cognomi);

var listaOrdinata = cognomi.slice();
listaOrdinata.sort();
console.log(listaOrdinata);

// for(var i = 0; i < listaOrdinata.length; i++){
//     var cognome = listaOrdinata[i];
//     console.log(cognome);

// }

var posizione = listaOrdinata.indexOf(utenteCognome) + 1;
console.log(posizione);