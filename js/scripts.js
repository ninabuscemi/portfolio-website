console.log("Hi, there! Welcome to my portfolio site.")
// Function that opens the menu when it is closed, and closes the menu when it is open
function menuToggle () {
  var x = document.getElementById('myNavtoggle');
// Below changes class name based on existing class name, so that the proper version of the menu (shown or hidden) will be displayed.
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}
