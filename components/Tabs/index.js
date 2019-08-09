// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


// const 


function topicTab(array){
const newTab = document.createElement('div');
newTab.classList.add('tab');




// const newTopic = document.createElement('div');
// const newTitle = document.createElement('span');

// newTab.appendChild(newTitle);
// newTab.appendChild(newTopic);


// newTab.classList.add('tab');
// newTopic.classList.add('topics');
// newTitle.classList.add('title');



//  newTab.textContent = array.tab;
//  newTopic.textContent = array.topic;


return newTab;

}









const topicsTab = document.querySelector('.topics')


    
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((response) => {
  console.log(response);

// let newTab = topicTab(response.data);
// topicsTab.appendChild(newTab);

response.data.topics.forEach( item => {
    let newTab = topicTab(item)
    topicsTab.appendChild(newTab)
})




})
  



.catch((err) => {
  console.log(err);
})