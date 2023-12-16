const btn = document.getElementById("btn")
btn.addEventListener("click", sortPeople)

const sorteesArr = [
    {
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    }
]

/** Challenge: 
  - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.
**/
function sortPeople() {
    const naughtyNames = sorteesArr.filter(person => !person.hasBeenGood)
        .map(person => person.name);
    renderList(naughtyNames, 'naughty');
    const niceNames = sorteesArr.filter(person => person.hasBeenGood)
        .map(person => person.name);
    renderList(niceNames, 'nice');
}

function renderList(people, list) {
    const niceListEl = document.getElementById('nice-list');
    const naughtyListEl = document.getElementById('naughty-list');
    
    people.forEach(person => {
        const li = document.createElement('li');
        li.textContent = person;
        list === 'nice' ? niceListEl.appendChild(li) : naughtyListEl.appendChild(li);
    })
}

/** Stretch goals:
  - Add the option to add new names to the sorteesArr.
  - Make it possible to switch people to the other list.
**/