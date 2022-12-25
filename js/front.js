/** chenge the background color of the header in scrolling */
function changeHeaderColor(){
let landingHeight = document.querySelector(".landing").offsetHeight;
let current = document.addEventListener('scroll', () => {
    let current = window.scrollY;
    // document.documentElement.dataset.scroll = 
    if(current > landingHeight){
        // console.log(current);
        // console.log("yes");
        document.getElementsByTagName('header')[0].style.backgroundColor="black";
    } else{
        document.getElementsByTagName('header')[0].style.background="none";
    }
    
});
}

changeHeaderColor();

// toggle profile
let profile = document.querySelector(".profile");
profile.onclick = function(){
    document.querySelector(".profile-content").classList.toggle("hide");
}
