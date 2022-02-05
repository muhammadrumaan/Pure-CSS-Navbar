const hamburger = document.querySelector('.hamburger');
const navlist = document.querySelector('.nav-links');
const cross = document.querySelector('.cross');

hamburger.addEventListener('click',  () => {
  navlist.classList.add('nav-links-active');
  hamburger.classList.add('hamburger-off');
  cross.classList.add('cross-on');
});
cross.addEventListener('click',  () => {
  navlist.classList.remove('nav-links-active');
  cross.classList.remove('cross-on');
  hamburger.classList.remove('hamburger-off');
});
console.log(2+3);