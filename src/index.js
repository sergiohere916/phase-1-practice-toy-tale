const toysUrl = "http://localhost:3000/toys";

const toyCollection = document.getElementById("toy-collection");
const toyForm = document.querySelector(".add-toy-form");
const toyFormContainer = document.querySelector(".container");
const addBtn = document.getElementById("new-toy-btn");

let addToy = false; 

addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });


fetch(toysUrl)
.then(res => res.json())
.then(toys => {
  toys.forEach(toy => {
    createHeaderToyCard(toy);
  })

})

toyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newToyName = e.target[0].value;
  const newToyImg = e.target[1].value; 
  const newToy = {
    name: newToyName,
    image: newToyImg,
    likes: 0
  }
  fetch(toysUrl, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(newToy)
  })
  .then(res => res.json())
  .then(postedToy => {
    createHeaderToyCard(postedToy);
  })
})




//FUNCTION(s)
function createHeaderToyCard(toy) {
  const toyCard = document.createElement("div");
  const toyName = document.createElement("h2");
  const toyImage = document.createElement("img");
  const toyLikesCount = document.createElement("p");
  const button = document.createElement("button");

  toyCard.className = "card";
  toyName.textContent = toy.name; 
  toyImage.src = toy.image;
  toyImage.className = "toy-avatar"; 
  toyLikesCount.textContent = toy.likes;
  button.className = "like-but";
  button.id = toy.id; 
  button.textContent = "Like";

  button.addEventListener("click", (e) => {
    toy.likes ++;  
    const updatedCount = {likes: toy.likes}
    fetch(`${toysUrl}/${toy.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updatedCount)
    })
    .then(res => res.json())
    .then(updatedToy => {
      toyLikesCount.textContent = updatedToy.likes; 
    })
  })

  toyCard.append(toyName, toyImage, toyLikesCount, button);
  toyCollection.append(toyCard);

}
