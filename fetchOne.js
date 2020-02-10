"use strict"
//const fetch = require("node-fetch");


const quoteButton = document.getElementById("quoteFetch");
let inputValue = document.getElementById("categoryInput");
quoteButton.addEventListener("click", () => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${inputValue.value}`)
    .then(response => response.json())
    .then(data => {
        let listPs = document.querySelectorAll("p") || [];
        let lastP = listPs.length > 0 ? listPs[listPs.length - 1] : 0;
        lastP !== 0 ? lastP.parentNode.removeChild(lastP) : console.log("empty");
        const paragraph = document.createElement("p");
        document.body.appendChild(paragraph);
        return data.value !== undefined ? paragraph.innerHTML = data.value : paragraph.innerHTML = `Type a category.`; 
    });
});
