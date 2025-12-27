// /* GALLERY ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- -------- GALLERY */
let btnArr = Array.from(document.getElementsByClassName('gall-btn'));
let imgArr = Array.from(document.getElementsByClassName('gall-img'));
var timer;
var slideIndex = 0;


// hide/display images in a carousel automatically on a timer and updated button & calls the function
autoCarousel();
function autoCarousel() {
  var i;
  for (i = 0; i < imgArr.length; i++) {
    imgArr[i].style.display = "none"; 
  }
  for (i = 0; i < btnArr.length; i++) {
    btnArr[i].style.backgroundColor = "rgb(59, 6, 84)";
  }
  
  slideIndex++;
  
  if (slideIndex > imgArr.length) {slideIndex = 1}
  imgArr[slideIndex-1].style.display = "block";
  btnArr[slideIndex-1].style.backgroundColor = "rgb(191, 107, 230)";  
  timer = setTimeout(autoCarousel, 5000); 
}

// navigate to a specific image (hide all other images) via button selection that updates with picture
function imgSwitch(btn, img) {
    btn.actStat = 'active'
    btn.style.backgroundColor = 'rgb(191, 107, 230)';

    clearTimeout(timer);

    for (let i = 0; i < btnArr.length; i++) {
        if (btnArr[i] !== btn) {
            btnArr[i].actStat = 'inactive';
            btnArr[i].style.backgroundColor = 'rgb(59, 6, 84)';
        }
    }
    for (let i = 0; i < imgArr.length; i++) {
        if (imgArr[i] !== img) {
            imgArr[i].style.display = 'none';
        }
    }

    img.style.display = 'block';
    timer = setTimeout(autoCarousel, 5000);
}

// event listeners on gallery buttons mouseenter
btnArr[0].addEventListener('mouseenter',(e)=>{let img = imgArr[0];imgSwitch(e.target, img);});
btnArr[1].addEventListener('mouseenter',(e)=>{let img = imgArr[1];imgSwitch(e.target, img);});
btnArr[2].addEventListener('mouseenter',(e)=>{let img = imgArr[2];imgSwitch(e.target, img);});
btnArr[3].addEventListener('mouseenter',(e)=>{let img = imgArr[3];imgSwitch(e.target, img);});
// event listeners on gallery buttons click
btnArr[0].addEventListener('click',(e)=>{let img = imgArr[0];imgSwitch(e.target, img);});
btnArr[1].addEventListener('click',(e)=>{let img = imgArr[1];imgSwitch(e.target, img);});
btnArr[2].addEventListener('click',(e)=>{let img = imgArr[2];imgSwitch(e.target, img);});
btnArr[3].addEventListener('click',(e)=>{let img = imgArr[3];imgSwitch(e.target, img);});