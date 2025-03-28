// This code is to Get the button element by its ID
let button = document.getElementById('myButton');

// Define the function that will be executed when the button is clicked
function handlingClick() {
  // Change the text of the paragraph element
  let message = document.getElementById('message');
  message.textContent = " This is an example of a Button clicked event";
}

// Add an event listener to the button for the 'click' event
button.addEventListener('click', handlingClick);
