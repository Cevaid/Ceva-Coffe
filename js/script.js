// Toggle Class Active
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#sidebar').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toggle Close Side Bar
const menu = document.querySelector('#sidebar');
document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});