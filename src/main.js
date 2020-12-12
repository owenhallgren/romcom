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
document.querySelector('.random-cover-button').addEventListener('click', function(){
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
}

function createRandomCover(){
  var randomImage = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];
  var randomCover = new Cover(randomImage, randomTitle, randomDescriptor1, randomDescriptor2)
  return randomCover
}

//Change visibility of the form
document.querySelector('.make-new-button').addEventListener('click',function(){
  document.getElementsByClassName('random-cover-button')[0].style.display = 'none';
  document.getElementsByClassName('save-cover-button')[0].style.display = 'none';
  document.getElementsByClassName('home-button')[0].style.display = 'block';
  document.getElementsByClassName('view home-view')[0].style.display = 'none';
  document.getElementsByClassName('view form-view hidden')[0].style.display = 'block';
})

//Saved covers button, iteration 2 
document.querySelector('.view-saved-button').addEventListener('click',function(){
  document.getElementsByClassName('random-cover-button')[0].style.display = 'none';
  document.getElementsByClassName('save-cover-button')[0].style.display = 'none';
  document.getElementsByClassName('home-button')[0].style.display = 'block';
  document.getElementsByClassName('view home-view')[0].style.display = 'none';
  document.getElementsByClassName('view form-view hidden')[0].style.display = 'none';
  document.getElementsByClassName('saved-covers-section')[0].style.display = 'block';
})

//Home button, iteration 2 
document.querySelector('.home-button').addEventListener('click',function(){
  document.getElementsByClassName('random-cover-button')[0].style.display = 'block';
  document.getElementsByClassName('save-cover-button')[0].style.display = 'block';
  document.getElementsByClassName('home-button')[0].style.display = 'none';
  document.getElementsByClassName('view home-view')[0].style.display = 'block';
  document.getElementsByClassName('view form-view hidden')[0].style.display = 'none';
  document.getElementsByClassName('saved-covers-section')[0].style.display = 'none';
})

//Create a new cover, iteration 3  
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
  covers.push(newCover.cover);
  titles.push(newCover.title);
  descriptors.push(newCover.tagline1, newCover.tagline2);
  document.getElementsByClassName('view home-view')[0].style.display = 'block';
  document.getElementsByClassName('view form-view hidden')[0].style.display = 'none';
  
  mainImage.src = newCover.cover
  mainTitle.innerHTML = newCover.title
  mainDescOne.innerHTML = newCover.tagline1
  mainDescTwo.innerHTML = newCover.tagline2
 
  event.preventDefault();
});


//Saving and Viewing Covers, iteration 4
////////////////////////////////////////////
// 1. When a user clicks the “Save Cover” button, the current cover will be added to the savedCovers array

// 2. If a user clicks the “Save Cover” more than once on a single cover, it will still only be saved once (no duplicates)
// verify it doesn't exist before pushin

// 3. When a user clicks the “View Saved Covers” button, we should see the saved covers section
// 4. All the covers in the savedCovers array should be displayed in the saved covers section

var mainCover = document.querySelector('.cover-image');
var mainTitle = document.querySelector('.cover-title');
var mainTag1 = document.querySelector('.tagline-1');
var mainTag2 = document.querySelector('.tagline-2');

document.querySelector('.save-cover-button').addEventListener('click',function() {
  console.log(savedCovers)
  var homeCover = new Cover(mainCover.src, mainTitle.innerHTML, mainTag1.innerHTML, mainTag2.innerHTML);
  var duplicate = false;

  for (var i = 0; i < savedCovers.length; i++) { 
    if (savedCovers[i].cover === homeCover.cover &&
        savedCovers[i].title === homeCover.title &&
        savedCovers[i].tagline1 === homeCover.tagline1 &&
        savedCovers[i].tagline2 === homeCover.tagline2)
    {
      duplicate = true
      break
    }
  }

  if (duplicate === false) {
    savedCovers.push(homeCover)
  }
})








