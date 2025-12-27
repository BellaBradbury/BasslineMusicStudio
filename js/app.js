

// /* MOBILE MENU ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- -------- MOBILE MENU */
let navToggle = document.getElementById('nav-menu');
let navMenuImg = document.getElementById('nav-menu').firstChild;
let navBtns = document.getElementById('navigation');

// displays or hides additional menu buttons based on data-flag status
function menuSwitch(status, img, vis=null) {
    navToggle.setAttribute('data-flag', status);
    if (vis) { navBtns.style.display = 'flex' } else { navBtns.style.display = 'none' }
    navMenuImg.src = img;
}

// event listeners on mobile nav menu click
navToggle.addEventListener('click',(e)=>{let status = navToggle.getAttribute('data-flag');if(status === 'up'){menuSwitch('down', 'images/menu-btns/nav-menu-v.png', 'vis')}else{menuSwitch('up', 'images/menu-btns/nav-menu-h.png')}});
navMenuImg.addEventListener('click',(e)=>{e.stopPropagation();let status = navToggle.getAttribute('data-flag');if(status === 'up'){menuSwitch('down', 'images/menu-btns/nav-menu-v.png', 'vis')}else{menuSwitch('up', 'images/menu-btns/nav-menu-h.png')}});


/* FUNSIES ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- --------- FUNSIES */
console.log("Beep Boop Bop")