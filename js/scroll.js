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
let options = {
  rootMargin: '0px',
  threshold: [0.2, 0.5, 0.75]
};

let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}

// scroll_animation_block_4----------------------------
let options2 = {
  rootMargin: '0px',
  threshold: [0.2, 0.5, 0.75]
};

let observer2 = new IntersectionObserver(onEntry2, options2);
let elements2 = document.querySelectorAll('.element-animation_2');

for (let elm of elements2) {
  observer2.observe(elm);
}

// ----------------------------------------------------
let options3 = {
  rootMargin: '0px',
  threshold: [0.2, 0.5, 0.75]
};

let observer3 = new IntersectionObserver(onEntry3, options3);
let elements3 = document.querySelectorAll('.element-animation_3');

for (let elm of elements3) {
  observer3.observe(elm);
}

function onEntry(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('element-show');
    }
  });
}

function onEntry2(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('element-show_2');
    }
  });
}

function onEntry3(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('element-show_3');
    }
  });
}
















