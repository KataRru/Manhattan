//BURGER
$(document).ready(function () {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
})

//SLIDER
$(document).ready(function() {
    $('.slider').slick({
        dots: true,
    });
});

//TABS
const tabsBtn = document.querySelectorAll(".promo__btn-tabs");
const tabsItems = document.querySelectorAll(".promo__afisha-page");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }

    });
}

document.querySelector('.promo__btn-tabs').click();