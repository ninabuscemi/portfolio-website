console.log('Hi, there! Welcome to my portfolio site.;')
// Function that opens the menu when it is closed, and closes the menu when it is open
function menuToggle (x) {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}

$('#click_advance').click(function () {
  $('#display_advance').toggle('1000')
   $('i', this).toggleClass('fas fa-bars fas fa-x')
})
