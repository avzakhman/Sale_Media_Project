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
      bannerClose = banner.querySelector('.banner__close'),
      footer = document.querySelector('.footer');
      
bannerClose.addEventListener('click', ()=> {
    banner.style.display = 'none';
    footer.classList.add('footer__banner-closed');
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

//мобильное меню

const menubuttons = document.querySelectorAll('.mobile-menu__point'),
      openmenupoint = document.querySelectorAll('.mobile-menu__point_open'),
      subpointsOpen = document.querySelector('.mobile-menu__point_open'),
      subpointsClose = document.querySelectorAll('.mobile-menu__point_close'),
      subpoints = document.querySelectorAll('.mobile-menu__subpoint');
let buttonId;
let closeId;
let submenuId;

openmenupoint.forEach((button, id)=> {
      button.addEventListener('click', ()=> {
          buttonId = id;
          console.log(buttonId);
          hideOptions();
      })
});
subpointsClose.forEach((button, id)=> {
    button.addEventListener('click', ()=> {
        closeId = id;
        showOptions();
    })
});

subpoints.forEach((subpoint, id) => {
    subpoint.addEventListener('click', ()=> {
        submenuId = id;
        subpoints.forEach((subpoint, id) => {
            if (id == submenuId) {
                subpoint.classList.toggle('mobile-menu__subpoint_active');
            } else {
                subpoint.classList.remove('mobile-menu__subpoint_active');
            }
        });
    });
});



function hideOptions(){
    menubuttons.forEach((button, id)=> {
        if (id == buttonId && button.classList.contains('hascontents')) {
            button.classList.add('mobile-menu__point_active');
            menubuttons.forEach((button, id)=> {
                if (!button.classList.contains('hascontents')){
                    button.style.height ='0px';
                    button.style.borderBottom ='none';
                }
          });
        }
  });
}
function showOptions(){
    menubuttons.forEach((button, id)=> {
        if (id == closeId) {
            button.classList.remove('mobile-menu__point_active');
        } else {
            button.style.height ='unset';
            button.style.borderBottom ='1px solid #E1E1E1';
        }
  });
}



const openmobmenu = document.querySelector('.open-mobmenu'),
      body = document.querySelector('body'),
      mobmenu = document.querySelector('.mobile-menu');


openmobmenu.addEventListener('click', ()=> {
    mobmenu.classList.toggle('mobile-menu__opened');
    openmobmenu.classList.toggle('open-mobmenu__opened');
    body.classList.toggle('scroll-disabled');
});