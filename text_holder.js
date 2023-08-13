// let addToy = false;

// const url =  " http://localhost:3000/toys";
// const addBtn = document.querySelector("#new-toy-btn");
// const toyFormContainer = document.querySelector(".container");
// const toyCollectionDiv = document.getElementById("toy-collection");
// const toyForm = document.querySelector(".add-toy-form");
// addBtn.addEventListener("click", () => {
//     // hide & seek with the form
//     addToy = !addToy;
//     if (addToy) {
//       toyFormContainer.style.display = "block";
//     } else {
//       toyFormContainer.style.display = "none";
//     }
//   });

// fetch(url)
// .then(resp => resp.json())
// .then(toy => {
//   toy.forEach(renderToy);
// })

// function renderToy(toy) {
//   const card = document.createElement("div");
//   card.classList.add("card");


//   const h2 = document.createElement("h2");
//   h2.textContent = toy.name

//   const imag = document.createElement("img");
//   imag.src = toy.image
//   imag.classList.add("toy-avatar")
  

//   const p = document.createElement("p");
//   p.textContent = `${toy.likes} Likes`
 

//   const button = document.createElement("button")
//   button.textContent = "Like"

//   button.addEventListener("click", () => {
//     toy.likes++;
//     p.textContent = `${toy.likes} Likes`
//   })

//   // card.append(h2,);
//   card.appendChild(h2);
//   card.appendChild(imag);
//   card.appendChild(p);
//   card.appendChild(button);
//   toyCollectionDiv.append(card);
  
// }

// toyForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const toy = Object.fromEntries(new FormData(e.target))
//   console.log(Object.fromEntries(new FormData(e.target)))
//   toy.likes = 0
//   fetch(url, {
//     method: "POST", 
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json"
//     }, 
//     body: JSON.stringify(toy)
//   })
//   .then((response) => response.json())
//   .then((toy) => renderToy(toy))
//   })

