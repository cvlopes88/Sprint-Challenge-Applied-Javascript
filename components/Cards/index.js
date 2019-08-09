// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const containerCard = document.querySelector('.cards-container');

    
        
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) => {
  console.log(response);
 newCard = response.data.map(i => x.name)

// response.forEach(ite => {
//     let newCar = component(ite);
//     containerCard.appendChild(newCar);
// })
return {i: []}

})



//   
//       let newArt = component(ite)
//       containerCard.appendChild(newArt)
//   })

.catch( (err) => {
    console.log(err)
  });




















//////////////////////////////////

function component(items){

    const newCard = document.createElement('div');
    newCard.classList.add('card');

const newHead = document.createElement('div');
newHead.classList.add('headline');
newHead.textContent = items.headline;

const newAuthor = document.createElement('div');
newAuthor.classList.add('author');
newAuthor.textContent = items.authorName;


const newImg = document.createElement('img');
newImg.classList.add('img-container');
// newImg.src = items.authorPhoto;


const newName = document.createElement('span');
newName.textContent = items.authorName;

newCard.appendChild(newImg);
newCard.appendChild(newName);
newCard.appendChild(newHead);
newCard.appendChild(newAuthor);



return newCard;

}