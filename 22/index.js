// let people = []

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const peopleListEl = document.getElementById("people-list")

// *** Local Storage Functions *** //

// Fetch people from LS
function getPeopleFromStorage() {
    let peopleFromStorage;
    // update to ternary:
    if (localStorage.getItem('giftPeople') === null) {
        peopleFromStorage = [];
    } else {
        peopleFromStorage = JSON.parse(localStorage.getItem('giftPeople'));
    }

    return peopleFromStorage;
}

// Add a person to LS
function addPersonToStorage(person) {
    const peopleFromStorage = getPeopleFromStorage();
    // check for duplicates
    if (peopleFromStorage.includes(person)) {
        alert('Already on the list!')
        return;
    }
    peopleFromStorage.push(person);
    localStorage.setItem('giftPeople', JSON.stringify(peopleFromStorage));
}

// Remove a person from LS
function removePersonFromStorage(personToRemove) {
    let peopleFromStorage = getPeopleFromStorage();
    // filter person to be removed
    peopleFromStorage = peopleFromStorage.filter(person => person !== personToRemove);
    // reset localstorage
    localStorage.setItem('giftPeople', JSON.stringify(peopleFromStorage));
}

function renderList(array) {
    // clearPeopleListEl()
    for (let i = 0; i < array.length; i++) {
        let currentPerson = array[i]
        appendPersonToDOM(currentPerson)
    }
}

function appendPersonToDOM(person) {
    let newEl = document.createElement("li") 
    newEl.textContent = person
    newEl.addEventListener("dblclick", function(e) {
        removePersonFromStorage(person) // remove person from LS
        e.target.remove();
        renderList(getPeopleFromStorage)
    })
    peopleListEl.append(newEl)
    renderList(getPeopleFromStorage) // render people in LS
}

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    if (inputValue) {
        addPersonToStorage(inputValue);
        peopleListEl.innerHTML = ""
        inputFieldEl.value = ""
        renderList(getPeopleFromStorage())
    }
})

// On page load, render local storage saved people
renderList(getPeopleFromStorage())