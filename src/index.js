let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => { 
fetchToys(); }); function fetchToys() { 
fetch("http://localhost:3000/toys") .then(response => response.json()) .then(toys => { 
const toyCollection = document.getElementById('toy-collection'); 
toys.forEach(toy => { const card = createToyCard(toy);
 toyCollection.appendChild(card); });
 });
 }
 function createToyCard(toy) {
 const card = document.createElement('div');
 card.className = 'card';
 const h2 = document.createElement('h2');
 h2.textContent = toy.name; 
const img = document.createElement('img');
 img.src = toy.image; img.className = 'toy-avatar'; 
 const p = document.createElement('p');
 p.textContent = `${toy.likes} Likes`;
  const button = document.createElement('button');
 button.className = 'like-btn'; button.id = toy.id; 
 button.textContent = 'Like ❤️'; 
button.addEventListener('click', () => increaseLikes(toy)); 
card.append(h2, img, p, button);
 return card; 
}
document.addEventListener("DOMContentLoaded", () => { 
const form = document.querySelector('.add-toy-form');
 form.addEventListener('submit', (event) => { 
event.preventDefault();
 addNewToy(event.target); 
});
 });
  function addNewToy(form) {
   const toyData = {
   name: form.name.value, image: form.image.value, likes: 0 };
    fetch("http://localhost:3000/toys", {
     method: "POST", headers: { 
    "Content-Type": "application/json", Accept: "application/json" }, 
    body: JSON.stringify(toyData) }) .then(response => response.json()) .then(newToy => {
     const toyCollection = document.getElementById('toy-collection'); 
    const newCard = createToyCard(newToy); 
    toyCollection.appendChild(newCard); 
    form.reset(); }); }
    document.addEventListener("DOMContentLoaded", () => {
     const form = document.querySelector('.add-toy-form'); 
    form.addEventListener('submit', (event) => {
     event.preventDefault();
     addNewToy(event.target);
     });
     });
      function addNewToy(form) {
       const toyData = { 
      name: form.name.value, image: form.image.value, likes: 0 }; 
    fetch("http://localhost:3000/toys", { 
      method: "POST", headers: {
       "Content-Type": "application/json", Accept: "application/json" 
      },
       body: JSON.stringify(toyData) }) .then(response => response.json()) .then(newToy => {
       const toyCollection = document.getElementById('toy-collection'); 
      const newCard = createToyCard(newToy);
       toyCollection.appendChild(newCard); form.reset();
       });
       }