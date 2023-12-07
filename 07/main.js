const wishlist = [
  'Macbook Air M2',
  'Subaru Crosstrek Sport',
  'Sony PS5'
]

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('wishlist');
const addBtn = document.getElementById('btn-add');
const clearBtn = document.getElementById('clear');

// *** ToDo *** //
/*
  - Add items to wishlist array
  - iterate over the wishlist array
  - display wishlist on the page
  - style with CSS
*/

function addWishlistItem(e) {
  e.preventDefault();
  const newItem = itemInput.value;

  if (newItem === '') {
    alert('Please add an item')
    return;
  }

  addItemToDOM(newItem)
  addItemToStorage(newItem)
  itemInput.value = '';
}

// display saved items
function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach(item => addItemToDOM(item));
  // check UI State
}

// add items to local storage
function addItemToStorage(item) {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.push(item);
  localStorage.setItem('wishItems', JSON.stringify(itemsFromStorage));
}

// get items from storage
function getItemsFromStorage() {
  let itemsFromStorage;
  if (localStorage.getItem('wishItems') === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem('wishItems'));
  }
  return itemsFromStorage;
}

// function removeItem(e) {
//   if (e.target.parentElement)
// }

// function onClickItem(e) {
//   console.log(e.target.closest('button'))

//   if (e.target.closest('button')) {
//     console.log(e.target.closest('li'))
//     item.remove();

//     removeItem(e.target.closest('li'))
//   }
// }

function removeItem(e) {
  console.log(e.target.closest('button'))

  if (e.target.closest('button')) {
    console.log(e.target.closest('li'))
    const itemToRemove = e.target.closest('li');
    itemToRemove.remove();
    removeItemFromStorage(itemToRemove);
  }  
}

function removeItemFromStorage(item) {
  let itemsFromStorage = getItemsFromStorage();

  // Filter out item to be removed
  itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

  // Re-set to localstorage
  localStorage.setItem('wishItems', JSON.stringify(itemsFromStorage));
}



function addItemToDOM(item) {
  console.log(item)
  // const itemHTML =
  // `<li class="item">${item}
  //   <button><i class="fa-solid fa-xmark"></i></i></button>
  // </li>`;
  const li = document.createElement('li');
  li.classList.add('item');
  li.appendChild(document.createTextNode(item));
  const button = document.createElement('button');
  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';
  button.appendChild(icon)
  li.appendChild(button)
  itemList.appendChild(li);
}

function init() {
  itemForm.addEventListener('submit', addWishlistItem);
  // itemList.addEventListener('click', onClickItem);
  document.addEventListener('DOMContentLoaded', displayItems);
  itemList.addEventListener('click', removeItem);
}

init();