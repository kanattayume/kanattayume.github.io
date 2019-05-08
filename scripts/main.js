var image = document.querySelector('img');
image.onclick = function(){
  var src = image.getAttribute('src');
  if(src === 'images/new-york-city-landscapes.jpg'){
    image.setAttribute('src', 'images/new-york-city-background.jpg');
  } else {
    image.setAttribute('src', 'images/new-york-city-landscapes.jpg');
  }
}

var welcomeMessage = document.querySelector('#welcome-message');

function setUserName() {
  var userName = prompt('Please enter your name');
  localStorage.setItem('name', userName);
  welcomeMessage.textContent = 'Hello ' + userName + ', this is the landscapes of New York City.';
}

if(!localStorage.getItem('name')){
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  welcomeMessage.textContent = 'Hello ' + storedName + ', this is the landscapes of New York City.';
}

var button = document.querySelector('button');
button.onclick = function(){
  setUserName();
}
