/* ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- -------- GLOBAL VARS */
let navToggle = document.getElementById('nav-menu');
let navMenuImg = document.getElementById('nav-menu').firstChild;
let navBtns = document.getElementById('navigation');

// /* ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- -------- MOBILE MENU */
function menuSwitch(status, img, vis=null) {
    navToggle.setAttribute('data-flag', status);
    if (vis) { navBtns.style.display = 'flex' } else { navBtns.style.display = 'none' }
    navMenuImg.src = img;
}

navToggle.addEventListener('click', (e)=> {
    let status = navToggle.getAttribute('data-flag');
    if (status === 'up') { menuSwitch('down', 'images/menu-btns/nav-menu-v.png', 'vis') } else { menuSwitch('up', 'images/menu-btns/nav-menu-h.png') }
});
navMenuImg.addEventListener('click', (e)=> {
    e.stopPropagation();
    let status = navToggle.getAttribute('data-flag');
    if (status === 'up') { menuSwitch('down', 'images/menu-btns/nav-menu-v.png', 'vis') } else { menuSwitch('up', 'images/menu-btns/nav-menu-h.png') }
});

/* ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- --------- ACTIVE NAV */
console.log("Beep Boop Bop")