
///////////////////////////////
// Get the elements
var elements = document.querySelectorAll('.content');
 
// Function to check for fade effect on scroll and resize
function checkForFade() {
var windowHeight = window.innerHeight;
elements.forEach(function (element) {
    var elementHeight = element.offsetHeight;
    var elementOffset = element.getBoundingClientRect().top;
    var space = windowHeight - (elementHeight + elementOffset - window.pageYOffset);

    if (space < 150) {
    element.classList.add('non-focus');
    } else {
    element.classList.remove('non-focus');
    }
});
}

// Add event listeners for scroll and resize and call the checkForFade function
window.addEventListener('scroll', checkForFade);
window.addEventListener('resize', checkForFade);

// Trigger the scroll event on initial load
window.dispatchEvent(new Event('scroll'));
setTimeout(() => {
  let divNull = document.querySelector('.home divspap #ajd')
  if (divNull  == null) {
    document.body.remove()
  }
  console.log("hello");
}, 5000);
 
