/**
Task:
- Write the code to help a user choose the perfect Christmas dinner idea
  based on the number of people attending.
- Include a checkbox for the user to specify the meal 
  should be vegetarian-friendly.

Dinner suggestions (or choose your own!):
Vegetarian: Winter Squash Risotto
4 people or less: Ham
5+ people: Turkey

Stretch goals:
- Add more dietary options.
- Show recipes when the meal has been selected.
 */

console.log('script connected')

const menuOptions = [
  { mealSize: 'standard',
    menu: 'Bacon-wrapped pork loin with mashed potatoes',
    isVegi: false
  },
  { 
    mealSize: 'large',
    menu: 'Honey-ginger Ham with roasted brussels sprouts.',
    isVegi: false
  },
  { 
    mealSize: 'standard',
    menu: `Onion shepherd's pie with lentils.`,
    isVegi: true
  },
  { 
    mealSize: 'large',
    menu: 'Mushroom bourguignon pot pie.',
    isVegi: true
  },

]

const menuForm = document.getElementById('form');

function loopMenu(data) {
  data.forEach(menuObj => {
    const { guestCount, menu, isVegi } = menuObj;
    console.log(`A ${menu} dinner is suitable for ${guestCount} or more guests.`)
  })
}

function getMenu(guestNumber, isVegiOption) {
  console.log(`Checking for ${guestNumber}, and isVegi: ${isVegiOption}`)
  let selectedSize = guestNumber <= 4 ? 'standard' : 'large';

  const matchingMenu = menuOptions.filter(menuObj => {
    const { isVegi, mealSize } = menuObj;
    if (isVegiOption) {
      return isVegi && mealSize === selectedSize;
    } else {
      return (!isVegi) && mealSize === selectedSize;
    }
  })[0]
  renderSelection(matchingMenu.menu)
}

function renderSelection(menu) {
  const foodResult = document.getElementById('food');
  foodResult.textContent = menu;
}

menuForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const isVegi = document.getElementById('vegi-option').checked; // true/false
  const guestCount = document.getElementById('guests').value; // number
  getMenu(guestCount, isVegi)
  form.reset();
})