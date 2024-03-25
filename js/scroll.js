// scroll_btn_up_&_down-------------------
const anchors = document.querySelectorAll('a[href*="#scroll_1"], a[href*="#scroll_2"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// scroll_animation_block------------------------
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}

// scroll_animation_block_4----------------------------
function onEntry2(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show_2');
    }
  });
}
let options2 = {
  threshold: [0.5] };
let observer2 = new IntersectionObserver(onEntry2, options2);
let elements2 = document.querySelectorAll('.element-animation_2');
for (let elm2 of elements2) {
  observer2.observe(elm2);
}

// ----------------------------------------------------
function onEntry3(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show_3');
    }
  });
}
let options3 = {
  threshold: [0.5] };
let observer3 = new IntersectionObserver(onEntry3, options2);
let elements3 = document.querySelectorAll('.element-animation_3');
for (let elm3 of elements3) {
  observer3.observe(elm3);
}
















