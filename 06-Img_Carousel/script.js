const images = document.getElementById('imgs');
const imgs = document.querySelectorAll('#imgs img')
let idx = 0;
function run() {
 idx++;
 if (idx > imgs.length - 1) {
  idx = 0;
 }
 images.style.transform = `translateX(${-idx * 500}px)`
 setTimeout(run, 2000);
}
run();