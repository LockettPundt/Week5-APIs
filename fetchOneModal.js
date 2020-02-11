"use strict"

const quoteButton = document.getElementById("quoteFetch");
let inputValue;
const formLocation = document.getElementById("categorySelect");
const submitButton = document.getElementById("submitButton");
let chuckSays = document.querySelector(".chuckSays");
const closeModalButton = document.querySelector("#closeModal");

const getCategory = () => {
    fetch(`https://api.chucknorris.io/jokes/categories`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const categoryList = data.filter(item => item !== `explicit`);
        categoryList.map(listItem => {
            const selectItem = document.createElement("option");
            selectItem.value = listItem;
            selectItem.text = listItem;
            categoryDropdown.appendChild(selectItem);
            return categoryList;
        });
    });
    const categoryDropdown = document.createElement("select");
    formLocation.insertBefore(categoryDropdown, submitButton);
}

(getCategory)();

closeModalButton.addEventListener("click", (e) => {
    e.preventDefault();
    const modalWindow = document.querySelector(".modal-overlay");
    modalWindow.classList.toggle("open");
})

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const selectOption = document.querySelector("select");
    const modalWindow = document.querySelector(".modal-overlay");
    modalWindow.classList.toggle("open");
    console.log(selectOption.value);
    fetch(`https://api.chucknorris.io/jokes/random?category=${selectOption.value}`)
    .then(response => response.json())
    .then(data => {
        return chuckSays.innerHTML = data.value; 
    });
});

