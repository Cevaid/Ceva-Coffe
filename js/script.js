// Toggle Class Active Sidebar
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#sidebar').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

// Toggle Class Active Search
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active')
    searchBox.focus();
    e.preventDefault();
};

// Toggle Class Active Shopping Cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active')
    e.preventDefault();
};

// Toggle Class Active Detail Item
const detailItem = document.querySelector('#box-item-detail');
const boxDetails = document.querySelectorAll('.item-detail-button');
boxDetails.forEach((btn) => {
btn.onclick = (e) => {
    detailItem.style.display = 'flex';
    e.preventDefault();
    }
});

// Toggle Close Side Bar, Search And Shopping Cart
const sidebar = document.querySelector('#sidebar');
const searchButton = document.querySelector('#search-button');
const shoppingButton = document.querySelector('#shopping-cart-button')
document.addEventListener('click', function(e){
    if(!sidebar.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
    if(!searchButton.contains(e.target) && !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
    }
    if(!shoppingButton.contains(e.target) && !shoppingCart.contains(e.target)){
        shoppingCart.classList.remove('active');
    }
});

// Google Drive Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbxG5VmdTFHxgF60_BcEOi0iNGrzruKodUGxBUg1WQ1E-qMxSenj74BZkWnWPPyyzuvG/exec';
const formContact = document.forms['contact-form'];
const btnSubmit = document.querySelector('.contact-btn');
const btnSubmitLoading = document.querySelector('.contact-btn-loading');
const contactAlert = document.querySelector('.alert-contact');
formContact.addEventListener('submit', e => {
    e.preventDefault();
    btnSubmit.style.display = 'none';
    btnSubmitLoading.style.display = 'inline-block';
    fetch(scriptURL, { method: 'POST', body: new FormData(formContact)})
    .then(response => {
        btnSubmit.style.display = 'inline-block';
        btnSubmitLoading.style.display = 'none';
        contactAlert.style.display = 'inline-block';
        formContact.reset();
        console.log('Success!', response);
    })
    .catch(error => console.error('Error!', error.message));
});

// Toogle Close Alert Contact
const closeAlertContact = document.querySelector('.close-alert-contact');
closeAlertContact.addEventListener('click', (e) => {
    contactAlert.style.display = 'none';
    e.preventDefault();
});

// Toogle Close Detail Item
document.querySelector('.box-item-detail .close-icon').onclick = (e) => {
    detailItem.style.display = 'none';
    e.preventDefault();
};

window.onclick = (e) => {
    if (e.target === detailItem) {
        detailItem.style.display = 'none';
    }
};