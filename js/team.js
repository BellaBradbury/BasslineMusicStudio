// Screen Size Variables
let wTablet = window.matchMedia("(min-width: 768px)");
let wDesktop = window.matchMedia("(min-width: 1024px)");

// Bella Bradbury Variables
let bbBtn = document.getElementById('bb-more-btn');
let bbMore = document.getElementById('bb-more-sect');
let bbHide = document.getElementById('bb-hide-btn');
let bbArr = [bbBtn, bbMore, bbHide]

// Zack Bradbury Variables
let zbBtn = document.getElementById('zb-more-btn');
let zbMore = document.getElementById('zb-more-sect');
let zbHide = document.getElementById('zb-hide-btn');
let zbArr = [zbBtn, zbMore, zbHide]

// Evelyn Koop Variables
let ekBtn = document.getElementById('ek-more-btn');
let ekMore = document.getElementById('ek-more-sect');
let ekHide = document.getElementById('ek-hide-btn');
let ekArr = [ekBtn, ekMore, ekHide]

let allArr = [bbArr, zbArr, ekArr]

// function to show or hide more bio text depending on button click
function showMore(btn, mId) {
    if (btn.textContent.includes('MORE')) {
        for (let i = 0; i < allArr.length; i ++) {
            if (i === mId) {
                allArr[i][0].style.display = 'none';
                allArr[i][1].style.display = 'block';
            } else {
                allArr[i][1].style.display = 'none';
                allArr[i][0].style.display = 'block';
            }
        }
    } else {
        allArr[mId][1].style.display = 'none';
        allArr[mId][0].style.display = 'block';
    }
}

function handleChange(btn) {
    let staffMember = btn.id.slice(0, 2)
    var mId;
    
    if (staffMember === 'bb') {mId = 0} 
    else if (staffMember === 'zb') {mId = 1} 
    else if (staffMember === 'ek') {mId = 2}
    
    showMore(btn, mId)
}

    // Bella Bradbury Event Listeners
    bbBtn.addEventListener('click',(e)=>{handleChange(e.target)});
    bbHide.addEventListener('click',(e)=>{handleChange(e.target)});
    // Zack Bradbury Event Listeners
    zbBtn.addEventListener('click',(e)=>{handleChange(e.target)});
    zbHide.addEventListener('click',(e)=>{handleChange(e.target)});
    // Evelyn Koop Event Listeners
    ekBtn.addEventListener('click',(e)=>{handleChange(e.target)});
    ekHide.addEventListener('click',(e)=>{handleChange(e.target)});
