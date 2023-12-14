const elf = document.getElementById("elf")
const btn = document.getElementById("btn")
const elfCountElement = document.getElementById('elf-counter')

btn.addEventListener("click", duplicateElf);

let elfCount = 1;
elfCountElement.textContent = elfCount;

function duplicateElf(){
  /** Challenge:
    - Write a function to duplicate the elf when the button is clicked.
    - See index.css for optional styling challenges.
    
    <div id="elf" class="elf">🧝</div>
  **/

  const elf = document.getElementById('elf');
  
  console.log('Button clicked')
  
  if (elfCount < 10) {
    elfCount += 1;
    elfCountElement.textContent = elfCount;
    elf.textContent += '🧝';
  } else {
    btn.textContent = 'Max Elf Count Reached!'
    btn.disabled = true;
  }

  
  // elfZone.innerHTML += `<div class="elf">🧝</div>`
  
}

/** Stretch goals:
  - Write a function to give the elves some tools, or a cup of tea!
  - Limit the total number of elves to 100.
**/