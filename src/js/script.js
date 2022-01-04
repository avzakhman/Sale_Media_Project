const swiper = new Swiper('.main', {
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});

//закрытие баннера

const banner = document.querySelector('.banner'),
      bannerClose = banner.querySelector('.banner__close');
      
bannerClose.addEventListener('click', ()=> {
    banner.style.display = 'none';
});


//табы во вкладке с городами

const citiesMenu    = document.querySelector('.cities__menu'),
      citiesButtons = citiesMenu.querySelectorAll('button'),
      cityBlocks = document.querySelectorAll('.city-block');
let cityId = 0;
citiesButtons.forEach((city, id) => {
    city.addEventListener('click', ()=> {
        cityId = id;
        ChangeButtons();
    });
});
function ChangeButtons() {
    citiesButtons.forEach((city, id) => {
        if (id == cityId) {
            city.classList.add('cities__menu_active');
        }
        else if (id != cityId){
            city.classList.remove('cities__menu_active');
        }
    });
    cityBlocks.forEach((block, blockId) => {
        console.log('ss');
        if (blockId == cityId) {
            block.classList.remove('city-block__hidden');
        }
        else if (blockId != cityId){
            block.classList.add('city-block__hidden');
        }
    });
}

ChangeButtons();

//открытие / закрытие окна с соцсетями

const writeModal = document.querySelector('.write-modal'),
      writeModalClose = writeModal.querySelector('.write-modal__close'),

      writeModalTriggers = document.querySelectorAll('.contactModalTrigger');
      
writeModalClose.addEventListener('click', ()=> {
    writeModal.classList.add('write-modal__hidden');
});

writeModalTriggers.forEach((trigger) => {
    trigger.addEventListener('click', ()=> {
        writeModal.classList.remove('write-modal__hidden');
    });
})

//открытие / закрытие окна для портфолио

const portfolioModal = document.querySelector('.portfolio-modal'),
      portfolioModalClose = portfolioModal.querySelector('.portfolio-modal__close'),

      portfolioModalTriggers = document.querySelectorAll('.portfolioModalTrigger');
      
portfolioModalClose.addEventListener('click', ()=> {
    portfolioModal.classList.add('portfolio-modal__hidden');
});

portfolioModalTriggers.forEach((trigger) => {
    trigger.addEventListener('click', ()=> {
        portfolioModal.classList.remove('portfolio-modal__hidden');
    });
})