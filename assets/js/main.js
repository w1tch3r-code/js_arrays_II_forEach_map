"use strict";

// ===================================================
//      JS-Vertiefung – Array-Iteration-Level-1_1
// ===================================================

console.log("%c JS-Vertiefung – Array-Iteration-Level-1_1", "color: tomato");

// Aufgabenstellung:
// In dieser Übung wirst du forEach() kennenlernen. Die Methode wird dir noch häufig begegnen.
// Schreibe eine Funktion myDrinks(), die jedes Element eines Arrays in deiner Konsole ausgibt und mit document.write() in deine index.html schreibt.
// Verwende die Liste aus dem Code-Snippet und sortiere das Array getraenke vorher alphabetisch.

let getraenke = [
	"Coca-Cola",
	"Apfelsaft",
	"Pepsi",
	"Traubensaft",
	"Sprite",
	"Orangensaft",
	"Red Bull Energy Drink",
	"Fanta",
];

console.log(getraenke.sort());

const output = document.querySelector("#output");
const myDrinks = getraenke.forEach((elem) => {
	output.innerHTML += `${elem}<br>`;
});

// ===================================================
//      JS-Vertiefung – Array-Iteration-Level-1_2
// ===================================================

console.log("%c JS-Vertiefung – Array-Iteration-Level-1_2", "color: tomato");

// Aufgabenstellung:
// In dieser Übung lernst du map() kennen. Dies ist ebenfalls eine Methode, die sehr viel genutzt wird.
// Nutze das Array getraenke aus der vorherigen Übung oder aus dem Code-Snippet.
// Nutze die map()-Methode, um in der neuen Variable upperDrinks alle Getränke in Großbuchstaben zu speichern.
// Wende nun die map() Funktion auf dein Array getraenke an.
// Gib nun upperDrinks in der Konsole aus.

const upperDrinks = getraenke.map(function (elem) {
	return elem.toUpperCase();
});

console.log(upperDrinks);

const upperDrinks2 = getraenke.map((elem) => elem.toUpperCase());
console.log(upperDrinks2);

// ===================================================
//      JS-Vertiefung – Array-Iteration-Level-1_3
// ===================================================

console.log("%c JS-Vertiefung – Array-Iteration-Level-1_3", "color: tomato");

// Aufgabenstellung:
// Schreibe eine Funktion, die jeden Wert aus dem Array (siehe Code-Snippet) mit 2 multipliziert und das Ergebnis sortiert

let array = [
	18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5,
	30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

const result = array.map((elem) => elem * 2).sort((num1, num2) => num1 - num2);

// const result = array.map((elem) => (elem * 2));
// result.sort((num1, num2) => (num1 - num2))
console.log(result);

// ===================================================
//      JS-Vertiefung – Array-Iteration-Level-1_4
// ===================================================

console.log("%c JS-Vertiefung – Array-Iteration-Level-1_4", "color: tomato");

// Aufgabenstellung:
// Schreibe eine Funktion, die mit Hilfe von map() ein Array aus Temperaturen von Fahrenheit in Celsius umwandelt.
// Verwende die mathematische Formel celsius = (℉ - 32) / 1.8 zur Umrechnung.
// Verwende das Array aus dem Code-Snippet.
// Überprüfe das Ergebnis in der Konsole.

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const celsius = fahrenheit.map((elem) => {
	return Math.round((elem - 32) / 1.8);
});
console.log(celsius);

// ===================================================
//      JS-Vertiefung – Array-Iteration-Level-1_5
// ===================================================

console.log("%c JS-Vertiefung – Array-Iteration-Level-1_5", "color: tomato");

// Aufgabenstellung:
// Verwende die Variable checkNumber und map().
// Überprüfe mit einem if-Statement, ob die Zahl durch 3 teilbar ist.
// Wenn ja, addiere 100 zu dieser Zahl hinzu.
// Gib das Ergebnis in der Konsole aus.

let checkNumber = [
	18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5,
	30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

const divisibleByThree = checkNumber.map((elem) => {
	if (elem % 3 === 0) {
		return elem + 100;
	} else {
		return elem;
	}
});

console.log(divisibleByThree);

// ===================================================
//      JS-Vertiefung – Array-Iteration-Level-1_6
// ===================================================

console.log("%c JS-Vertiefung – Array-Iteration-Level-1_6", "color: tomato");

// Aufgabenstellung:
// Erstelle ein neues Array auf Basis des gegebenen Arrays (siehe Code-Snippet).
// Entferne die Dateiendungen (z.B. "image.jpg" => "image").
// Falls keine Dateiendung vorhanden ist, soll der Wert "invalid" gespeichert werden (z.B. "dog" => "invalid").
// Die Werte sollen in Kleinbuchstaben gespeichert werden.
// Es sollte entweder mit der map() oder forEach() Methode gearbeitet werden.

let album = [
	"holidays.jpg",
	"Restaurant.jpg",
	"desktop",
	"rooms.GIF",
	"DOGATBEACH.jpg",
];

// const albumResult = album.map(elem => {
//     return elem.split('.')[0].toLowerCase();
// });

const albumResult = album.map((elem) => {
	const parts = elem.split(".");
	if (parts.length > 1) {
		return parts[0].toLowerCase();
	} else {
		return "invalid";
	}
});

console.log(albumResult);
