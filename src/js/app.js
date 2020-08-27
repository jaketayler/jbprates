// Smooth Effect for navbar

function smoothScroll(target, duration) {
  var target = document.querySelector(target); 
  var targetPositon = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPositon-startPosition;

  var startTime= null;

  function animationScroll(currentTime){
    if(startTime === null) startTime = currentTime;

    var timeElapsed = currentTime - startTime;    
    var run = easing(timeElapsed,  startPosition, distance, duration);

    window.scrollTo(0, run);

    if(timeElapsed < duration)requestAnimationFrame(animationScroll);
  }

  function  easing(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  };
  
  requestAnimationFrame(animationScroll);
}

var link2 = document.querySelector('#link2');
var link3 = document.querySelector('#link3');
var link4 = document.querySelector('#link4');

link2.addEventListener('click', function(){
  smoothScroll('#product', 150);
});

link3.addEventListener('click', function(){
  smoothScroll('#msg', 150);
});

link4.addEventListener('click', function(){
  smoothScroll('#about', 150);
});

