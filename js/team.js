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

// function to show or hide more bio text depending on button click
function showMore(btn, memberArr) {
    if (btn.textContent.includes('more')) {
        memberArr[0].style.display = 'none';
        memberArr[1].style.display = 'block';
    } else {
        memberArr[1].style.display = 'none';
        memberArr[0].style.display = 'block';
    }
}

// Bella Bradbury Event Listeners
bbBtn.addEventListener('click',(e)=>{showMore(e.target, bbArr)});
bbHide.addEventListener('click',(e)=>{showMore(e.target, bbArr)});
// Zack Bradbury Event Listeners
zbBtn.addEventListener('click',(e)=>{showMore(e.target, zbArr)});
zbHide.addEventListener('click',(e)=>{showMore(e.target, zbArr)});
// Evelyn Koop Event Listeners
ekBtn.addEventListener('click',(e)=>{showMore(e.target, ekArr)});
ekHide.addEventListener('click',(e)=>{showMore(e.target, ekArr)});