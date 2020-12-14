// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

// var currentCover;
var mainImage = document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');

// Add your event listeners here 👇
document.querySelector('.random-cover-button').addEventListener('click', function() {
  var randomCover = createRandomCover();
  mainImage.src = randomCover.cover;
  title.innerHTML = randomCover.title;
  // console.log(title.innerText)
  descriptor1.innerHTML = randomCover.tagline1;
  descriptor2.innerHTML = randomCover.tagline2;
});

// Create your event handlers and other functions here 👇
function getRandomIndex(covers) {
  return Math.floor(Math.random() * covers.length);
};

function createRandomCover(){
  var randomImage = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];
  var randomCover = new Cover(randomImage, randomTitle, randomDescriptor1, randomDescriptor2)
  return randomCover
};

//////////////////////////////////////////
//Change visibility of the form
//////////////////////////////////////////
document.querySelector('.make-new-button').addEventListener('click',function() {
  document.getElementsByClassName('random-cover-button')[0].style.display = 'none';
  document.getElementsByClassName('save-cover-button')[0].style.display = 'none';
  document.getElementsByClassName('home-button')[0].style.display = 'block';
  document.getElementsByClassName('view home-view')[0].style.display = 'none';
  document.getElementsByClassName('view form-view hidden')[0].style.display = 'block';
  document.getElementsByClassName('view saved-view')[0].style.display = 'none';
});

//////////////////////////////////////////
//Saved covers button, iteration 2
//////////////////////////////////////////
document.querySelector('.view-saved-button').addEventListener('click',function() {
  document.getElementsByClassName('random-cover-button')[0].style.display = 'none';
  document.getElementsByClassName('save-cover-button')[0].style.display = 'none';
  document.getElementsByClassName('home-button')[0].style.display = 'block';
  document.getElementsByClassName('view home-view')[0].style.display = 'none';
  document.getElementsByClassName('view form-view hidden')[0].style.display = 'none';
  document.getElementsByClassName('saved-view')[0].style.display = 'block';
});

//////////////////////////////////////////
//Home button, iteration 2
//////////////////////////////////////////
document.querySelector('.home-button').addEventListener('click',function() {
  document.getElementsByClassName('random-cover-button')[0].style.display = 'block';
  document.getElementsByClassName('save-cover-button')[0].style.display = 'block';
  document.getElementsByClassName('home-button')[0].style.display = 'none';
  document.getElementsByClassName('view home-view')[0].style.display = 'block';
  document.getElementsByClassName('view form-view hidden')[0].style.display = 'none';
  document.getElementsByClassName('saved-view')[0].style.display = 'none';
});

//////////////////////////////////////////
//Create a new cover, iteration 3
//////////////////////////////////////////
var myCover = document.querySelector('.user-cover');
var newTitle = document.querySelector('.user-title');
var descOne = document.querySelector('.user-desc1');
var descTwo = document.querySelector('.user-desc2');
var makeBookButton = document.querySelector('.create-new-book-button');
var mainTitle = document.querySelector('.cover-title');
var mainDescOne = document.querySelector('.tagline-1');
var mainDescTwo = document.querySelector('.tagline-2');

makeBookButton.addEventListener('click', function(event) {
  var newCover = new Cover(myCover.value,newTitle.value,descOne.value,descTwo.value);
  document.getElementsByClassName('view home-view')[0].style.display = 'block';
  document.getElementsByClassName('view form-view hidden')[0].style.display = 'none';

  mainImage.src = newCover.cover;
  mainTitle.innerHTML = newCover.title;
  mainDescOne.innerHTML = newCover.tagline1;
  mainDescTwo.innerHTML = newCover.tagline2;

  event.preventDefault();

});

//////////////////////////////////////////
//Saving and Viewing Covers, iteration 4 
//////////////////////////////////////////
document.querySelector('.save-cover-button').addEventListener('click', function() {
  var newCover = new Cover(mainImage.src,mainTitle.innerHTML,mainDescOne.innerHTML,mainDescTwo.innerHTML);
  var duplicate = false;
  for (var i = 0; i < savedCovers.length; i++) {
      if (savedCovers[i].cover === newCover.cover &&
          savedCovers[i].title === newCover.title &&
          savedCovers[i].tagline1 === newCover.tagline1 &&
          savedCovers[i].tagline2 === newCover.tagline2) 
      {
        duplicate = true;
        break;
      }
    }

    if (duplicate === false) {
      savedCovers.push(newCover);
    }
});

var viewSavedCovers = document.querySelector('.view-saved-button');
viewSavedCovers.addEventListener('click', function(){
  document.querySelector('.saved-view').style.display = 'block';
var savedCoversHtml = '';
  for(i=0;i<savedCovers.length;i++){

    var newCoverHtml = `
      <section class="mini-cover">
      <img class="cover-image" src="${savedCovers[i].cover}">
      <h2 class="cover-title">${savedCovers[i].title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
      <img class="price-tag" src="./assets/price.png">
      <img class="overlay" src="./assets/overlay.png">

    </section>`;
    savedCoversHtml = savedCoversHtml + newCoverHtml;
  }
  document.querySelector('.saved-covers-section').innerHTML = savedCoversHtml;
});

//////////////////////////////////////////
//Deleting Saved Covers, iteration 5
//////////////////////////////////////////

document.addEventListener('dblclick',function(e) {
  if(e.target && e.target.parentElement.className === "mini-cover" ) {
    e.target.parentElement.parentElement.removeChild(e.target.parentElement)
  };

  var clickCover = e.target.parentElement.querySelector('.cover-image').src
  var clickTitle = e.target.parentElement.querySelector('.cover-title').innerHTML;
  var clickTag1 = e.target.parentElement.querySelector('.tagline-1').innerHTML;
  var clickTag2 = e.target.parentElement.querySelector('.tagline-2').innerHTML;

  var removeCover = new Cover(clickCover, clickTitle, clickTag1, clickTag2);
  var index = 0

  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].cover === removeCover.cover &&
        savedCovers[i].title === removeCover.title &&
        savedCovers[i].tagline1 === removeCover.tagline1 &&
        savedCovers[i].tagline2 === removeCover.tagline2) 
    {
      index = i
      break;
    }
  }
  savedCovers.splice(index, 1)
});
  









