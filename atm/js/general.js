// Show class
function getPics() {} 
const imgs = document.querySelectorAll('.gallery img');
const fullPage = document.querySelector('#fullpage');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';
  });
});

// shuffle
const Shuffle = window.Shuffle;

const shuffleWithPadding = new Shuffle(document.querySelector('.js-grid'), {
  itemSelector: '.js-item',
  sizer: '.js-sizer',
  buffer: 1,
});

const shuffleWithAspectRatio = new Shuffle(document.querySelector('.js-aspect-ratio'), {
  itemSelector: '.js-item',
  sizer: '.js-sizer',
  buffer: 1,
});

let on = true;
document.getElementById('toggle-images').addEventListener('click', () => {
  on = !on;
  const images = Array.from(document.getElementsByTagName('img'));
  images.forEach((image) => {
    if (on) {
      image.style.display = '';
    } else {
      image.style.display = 'none';
    }
  });
  
  shuffleWithPadding.layout();
  shuffleWithAspectRatio.layout();
});