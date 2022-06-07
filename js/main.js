document.addEventListener('DOMContentLoaded',()=>{
    const uslugiWrap = document.querySelector('.uslugi__inner');
const uslugiBlock = document.querySelectorAll('.uslugi__block');


if(uslugiWrap != null){
    uslugiWrap.addEventListener('mouseover',(e)=>{
        if(e.target === uslugiBlock[1]){
            uslugiWrap.style.backgroundImage = "url('../img/bg-uslugi-2.png')"
        }else if(e.target === uslugiBlock[2]){
            uslugiWrap.style.backgroundImage = "url('../img/bg-uslugi-3.png')"
        }
        else if(e.target === uslugiBlock[3]){
            uslugiWrap.style.backgroundImage = "url('../img/bg-uslugi-4.png')"
        }else if(e.target === uslugiBlock[4]){
            uslugiWrap.style.backgroundImage = "url('../img/bg-uslugi-5.png')"
        }else if(e.target === uslugiBlock[0]){
            uslugiWrap.style.backgroundImage = "url('../img/bg-uslugi.png')"
        }
    })
}
    

const preloader = document.querySelector('.preloader');
let counterLoader = 0;
const loaderCount = document.querySelector('.counter');
window.onload = function () {
    preloader.style.display = 'flex';
    window.setTimeout(function () {
        
    
    }, 1000);
}
var count = 0;
var number = 100;
var interval = setInterval(function(){
   document.querySelector('.counter').innerHTML = count += 10;
   if( count === number){
       preloader.style.display = 'none';
   }
   if (count === number) { clearInterval(interval) }
}, 200);
const swiper2 = new Swiper('.swiper-container-mob-s1',{
    slidesPerView: 1.2,
    spaceBetween: 10,
})
const swiper3 = new Swiper('.sfera__slider__mob',{
    slidesPerView: 1.2,
    spaceBetween: 15,
})
})
const swipe3 = new Swiper('.swiper-container-s2' ,{
    spaceBetween: 20,
    slidesPerView: 5,
    breakpoints:{
        320:{
            spaceBetween: 10,
            slidesPerView: 1.5, 
        },
        640:{
            spaceBetween: 10,
            slidesPerView: 2.5, 
        },
        820:{
            spaceBetween: 10,
            slidesPerView: 3.5, 
        },
        1020:{
            spaceBetween: 10,
            slidesPerView: 4.5, 
        },
        1200:{
            spaceBetween: 10,
            slidesPerView: 5, 
        },
    }
})
const swiperEvents = new Swiper('.swiper-container-events', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    observer: true,
    observeParents: true,
})
const swiper1 = new Swiper('.swiper-container-s1', {
    slidesPerView: 1.5,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
      },
    spaceBetween: 20,
})
const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 7.5,
    spaceBetween: 10,
    breakpoints: {
        360: {
            slidesPerView: 1.5,
            spaceBetween: 5,
        },
        600:{
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1000:{
            slidesPerView: 3.5,
            spaceBetween: 10,
        },
        1300:{
            slidesPerView: 5.5,
            spaceBetween: 10,
        },
        1600:{
            slidesPerView: 7.5,
            spaceBetween: 10,
        }
    }
})

const tabs = document.querySelectorAll('.tab')
const tabsMob = document.querySelectorAll('.tabs-mob')
const tabOpen = document.querySelectorAll('.tab__open')
const tabDesk = document.querySelectorAll('.tab-desk');
let activeTab = 0;
if(tabDesk != null && tabOpen != null){
    tabDesk.forEach((item,index) =>{
        item.addEventListener('click',(e)=>{
            tabDesk[activeTab].classList.remove('active');
            tabOpen[activeTab].classList.remove('active');
            activeTab = index;
            e.target.classList.add('active')
            tabOpen[activeTab].classList.add('active');
        })
    })
}
if(tabsMob != null && tabOpen != null){
    tabsMob.forEach((item,index) =>{
        item.addEventListener('click',(e)=>{
            tabsMob[activeTab].classList.remove('active');
            tabOpen[activeTab].classList.remove('active');
            activeTab = index;
            e.target.classList.add('active')
            tabOpen[activeTab].classList.add('active');
        })
    })
}
const tabsUslugiText = document.querySelectorAll('.tabs__uslugi__text');

if(tabsUslugiText != null){
    tabsUslugiText.forEach(item=>{
       item.addEventListener('click',()=>{
        item.classList.toggle('active');
       })
    })
}
const swiperSliderNext = new Swiper('.swiper-slider-new',{
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    navigation: {
        nextEl: '.swiper-button-next'
    }
})
const auditRight = document.querySelector('.audit-right');


if( auditRight != null ){
    let countScrolled = 140;

    window.addEventListener('scroll',()=>{
        countScrolled -= 1.25
        auditRight.style.transform = `translateY(-${countScrolled}px)`
    })
    if(pageYOffset === 0){
        auditRight.style.transform = `translateY(-${countScrolled}px)`
    }
}
const modalBtn = document.querySelector('.block-modal');
const modalFormOverlay = document.querySelector('.modal-form-overlay')
const modalFormWrap = document.querySelectorAll('.modal-form-wrap');
const consultLastForm = document.querySelector('.consult__last__form');
if( modalBtn != null ){
    modalBtn.addEventListener('click',()=>{
        modalFormOverlay.classList.add('active');
        document.querySelector('html').style.overflow = 'hidden';
    })

    modalFormOverlay.addEventListener('click',(e)=>{
        if(e.target === document.querySelector('.arrow-right') || e.target === document.querySelector('.arrow-left') ||e.target === sertificates[0] || e.target === sertificates[1] || e.target === sertificates[2] || e.target === sertificates[3] || e.target === sertificates[4] || e.target === sertificates[5] || e.target === sertificates[6] || e.target === sertificates[7] || e.target === consultLastForm || e.target === document.querySelector('.form') || e.target === document.querySelector('.form').querySelectorAll('input')[0] || e.target === document.querySelector('.form').querySelectorAll('input')[1] || e.target === document.querySelector('.form').querySelectorAll('input')[2] || e.target === document.querySelector('.form').querySelectorAll('input')[3] || e.target === document.querySelector('.form').querySelector('button')){
            console.log(1)
        }else{
            modalFormOverlay.classList.remove('active');
            document.querySelector('html').style.overflow = 'scroll';
        }
    })
}


const swiperModal = new Swiper('.swiper-container-modal',{
    slidesPerView: 'auto',
    spaceBetween: 30,
    navigation:{
        nextEl: '.arrow-right',
        prevEl: '.arrow-left'
    }
})
const sertificate = document.querySelectorAll('.sertificate__block-go');
const sertificates = document.querySelectorAll('.sertificate-slide');
const consulateInput = document.querySelectorAll('.input-check')
if( sertificate != null){
    sertificate.forEach(item=>{
        item.addEventListener('click',()=>{
            modalFormOverlay.classList.add('active');
            
        })
    })
}
if(modalFormOverlay != null){
    modalFormOverlay.addEventListener('click',(e)=>{
        if(e.target === document.querySelector('.arrow-right') || e.target === document.querySelector('.arrow-left') ||e.target === sertificates[0] || e.target === sertificates[1] || e.target === sertificates[2] || e.target === sertificates[3] || e.target === sertificates[4] || e.target === sertificates[5] || e.target === sertificates[6] || e.target === sertificates[7] || e.target === consulateInput[0] || e.target === consulateInput[1] || e.target === consulateInput[2] || e.target === consulateInput[3]){
            console.log(1)
        }else{
            modalFormOverlay.classList.remove('active');
            document.querySelector('html').style.overflow = 'scroll';
        }
    })
}

const mobBurger = document.querySelector('.mob-burger');
const navMenuMob = document.querySelector('.nav-menu-mob');
if(mobBurger){
    mobBurger.addEventListener('click',()=>{
        mobBurger.classList.toggle('active');
        navMenuMob.classList.toggle('active');
        document.querySelector('html').classList.toggle('active');
    })
}

const changeImg = document.querySelector('.change__img')
const teamSelectClick = document.querySelectorAll('.team__select__click');
const teamSelectArrow = document.querySelectorAll('.team__select__arrow');
if(teamSelectClick[1] != null || teamSelectClick[0] != null){
    teamSelectClick[0].addEventListener('click',()=>{
        teamSelectArrow[0].classList.add('active');
        teamSelectArrow[1].classList.remove('active');
        changeImg.setAttribute('src', './img/team-2.png')
    })
    teamSelectClick[1].addEventListener('click',()=>{
        teamSelectArrow[0].classList.remove('active');
        teamSelectArrow[1].classList.add('active');
        changeImg.setAttribute('src', './img/director.jpg')
    })
}

const swiperSlides = new Swiper('.swiper-slider-tabs',{
    slidesPerView:'auto',
})