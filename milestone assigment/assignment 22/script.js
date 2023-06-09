var progressBar = document.querySelector('.progress-bar');
var progress = document.querySelector('.progress');

window.addEventListener('scroll', function() {
  var scrollPercentage = window.scrollY / document.documentElement.clientHeight;
  progress.style.width = scrollPercentage * 100 + '%';
});