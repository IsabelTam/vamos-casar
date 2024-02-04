// set light/dark mode
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const storedTheme = localStorage.getItem("theme");
const computedTheme = storedTheme || (prefersDarkScheme.matches ? "dark" : "light");
if (computedTheme === "dark") document.body.classList.toggle("dark-theme");
localStorage.setItem("theme", computedTheme);

// change language
function toggleLang() {
    let currentLang = document.documentElement.lang === "pt" ? "en" : "pt";
    for (let element of document.querySelectorAll(":not(html)[lang]")) element.style.display = 'none';
    for (let element of document.querySelectorAll(`:not(html)[lang=${currentLang}]`)) element.style.display = 'block';
    document.documentElement.setAttribute('lang', currentLang);
}

// toggle light/dark mode
function toggleLight() {
    const darkTheme = document.body.classList.contains("dark-theme");
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", darkTheme ? "light" : "dark");
}

// responsive menu
function menu() {
    document.getElementById("nav").classList.toggle("responsive");
}

const seats = [
    { "nome": "Alberto Loureiro", "mesa": "C" },
    { "nome": "Alice Neto", "mesa": "A" },
    { "nome": "Ana Amorim", "mesa": "B" },
    { "nome": "Ana Filipa Mourinho", "mesa": "H" },
    { "nome": "Ana Isabel Tam Loureiro", "mesa": "E" },
    { "nome": "Ana Maria Alves Pinheiro", "mesa": "E" },
    { "nome": "Ana Maria Tam", "mesa": "E" },
    { "nome": "Ana Rodrigues", "mesa": "F" },
    { "nome": "Ana Sofia Pinheiro", "mesa": "A" },
    { "nome": "André Diniz", "mesa": "H" },
    { "nome": "André Farinha", "mesa": "H" },
    { "nome": "Beatriz Mascarenhas", "mesa": "I" },
    { "nome": "Bernardino Poupinho", "mesa": "B" },
    { "nome": "Bernardo Almeida", "mesa": "H" },
    { "nome": "Carla Loureiro", "mesa": "C" },
    { "nome": "Catarina Moreira", "mesa": "F" },
    { "nome": "Cibele da Silva", "mesa": "A" },
    { "nome": "Corina Anok", "mesa": "B" },
    { "nome": "Daniela Poupinho", "mesa": "F" },
    { "nome": "Diana Correia", "mesa": "D" },
    { "nome": "Diogo Correia", "mesa": "H" },
    { "nome": "Elvira Rodrigues", "mesa": "C" },
    { "nome": "Erica Poupinho", "mesa": "F" },
    { "nome": "Filipe Martinho", "mesa": "F" },
    { "nome": "Francisco Martins", "mesa": "E" },
    { "nome": "Gabriel Peres Marques", "mesa": "D" },
    { "nome": "Guilherme Nogueira", "mesa": "H" },
    { "nome": "Inês Castro", "mesa": "H" },
    { "nome": "Inês Drago", "mesa": "F" },
    { "nome": "Inês Loureiro", "mesa": "E" },
    { "nome": "Joana Amorim", "mesa": "B" },
    { "nome": "Joana Luís", "mesa": "G" },
    { "nome": "João Azeredo Pais", "mesa": "I" },
    { "nome": "João Cabral", "mesa": "F" },
    { "nome": "João Diamantino", "mesa": "I" },
    { "nome": "João Nuno Tam Loureiro", "mesa": "E" },
    { "nome": "João Pedro Amorim", "mesa": "B" },
    { "nome": "Jonas Christensen", "mesa": "F" },
    { "nome": "Jorge Pinheiro", "mesa": "A" },
    { "nome": "José Maria Alves", "mesa": "A" },
    { "nome": "José Raposo", "mesa": "I" },
    { "nome": "Joshua Morley", "mesa": "G" },
    { "nome": "Katherine Barrett", "mesa": "H" },
    { "nome": "Leonor Loureiro", "mesa": "C" },
    { "nome": "Lisa \"Micas\" Castro", "mesa": "D" },
    { "nome": "Margarida Azeredo Pais", "mesa": "I" },
    { "nome": "Maria Francisca Silva", "mesa": "H" },
    { "nome": "Maria José Martins", "mesa": "A" },
    { "nome": "Maria Pátria Alves", "mesa": "A" },
    { "nome": "Mariana Azeredo Pais", "mesa": "I" },
    { "nome": "Mariana Ferreira", "mesa": "G" },
    { "nome": "Mariana Oliveira", "mesa": "G" },
    { "nome": "Mariana Pina", "mesa": "F" },
    { "nome": "Matilde Loureiro", "mesa": "C" },
    { "nome": "Miguel Amorim", "mesa": "B" },
    { "nome": "Natasha Boavida", "mesa": "I" },
    { "nome": "Nathaniel Pinheiro", "mesa": "A" },
    { "nome": "Nuno Loureiro", "mesa": "E" },
    { "nome": "Nuno Rodrigues", "mesa": "G" },
    { "nome": "Óscar Amorim", "mesa": "B" },
    { "nome": "Paulo Pinheiro", "mesa": "E" },
    { "nome": "Pedro Amorim", "mesa": "B" },
    { "nome": "Pedro Loureiro", "mesa": "C" },
    { "nome": "Pedro Vieira", "mesa": "G" },
    { "nome": "Rafael Santos", "mesa": "G" },
    { "nome": "Raquel Carrilho", "mesa": "H" },
    { "nome": "Rebeca Gomes", "mesa": "D" },
    { "nome": "Ricardo Ferreira", "mesa": "G" },
    { "nome": "Rita Ozório", "mesa": "D" },
    { "nome": "Rui Miguel Alves", "mesa": "A" },
    { "nome": "Santiago Silva", "mesa": "C" },
    { "nome": "Sofia Correia", "mesa": "D" },
    { "nome": "Susana Cortes", "mesa": "I" },
    { "nome": "Tam Chong Chi", "mesa": "E" },
    { "nome": "Teresa Madeira", "mesa": "B" },
    { "nome": "Tiago Ferreira", "mesa": "F" },
    { "nome": "Tiago Lourenço", "mesa": "I" },
    { "nome": "Tiago Silva", "mesa": "C" },
    { "nome": "Tiago Simões da Silva", "mesa": "D" },
    { "nome": "Vebjørn \"Gadunka\" Elvanes", "mesa": "D" },
    { "nome": "Vicente Silva", "mesa": "C" },
];
// populate seats table
let table = document.getElementById("seats-table");
for (let seat of seats) {
    var row = table.insertRow();
    row.insertCell().innerHTML = seat.nome;
    row.insertCell().innerHTML = seat.mesa;
}

function filter() {
    let input = document.getElementById("seats-input").value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let table = document.getElementById("seats-table");
    table.style.display = input.length >= 3 ? "" : "none";
    for (let row of table.getElementsByTagName("tr")) {
        let td = row.getElementsByTagName("td")[0];
        if (td) row.style.display = (td.textContent || td.innerText).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(input) > -1 ? "" : "none";
    }
}
