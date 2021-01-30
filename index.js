/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time){
  time = parseInt(time)
  if (time > 12 && time < 17){
    return "Good Afternoon"
  } else if (time > 17){
      return "Good Evening"
  } else {
      return "Good Morning"
  }
}

function displayMessage(message){
  let header = document.querySelector('h1#greeting')
  header.innerText = message
}
