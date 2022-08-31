// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

/**const catalogBtn = document.querySelector('.header__catalog');
const subMenu = document.querySelector('.sub-menu');

function openMenu(catalogSubmenu) {
  subMenu.classList.add('sub-menu_opened');
  closePopupEventEscape();
}

function closeMenu(catalogSubmenu) {
  subMenu.classList.remove('sub-menu_opened');
  removeEventEscape();
}

/** События на Escape */
/**function handleEscKey(event) {
  if (event.key === 'Escape') {
    const activeMenu = document.querySelector('.sub-menu_opened');
    closeMenu(activeMenu);
  }
}

function closePopupEventEscape() {
  document.addEventListener('keydown', handleEscKey);
}

function removeEventEscape() {
  document.removeEventListener('keydown', handleEscKey);
}



catalogBtn.addEventListener('click', openMenu);

const config = {
  gallery: '.catalog__list',
  galleryImage: 'product-card',
  activeImage: 'product-card_acvtive',
  formName: '.catalog__menu-list',
  formInput: '.radio__box',
};

const imagesList = Array.from(document.querySelectorAll(`.${config.galleryImage}`));
const galleryForm = document.querySelector(`${config.formName}`);
const gallery = document.querySelector(`${config.gallery}`);
let prevValue = 'all';
let prevList = [];

const getData = formInput => galleryForm.querySelector(`${formInput}:checked`).value;
const getImagesList = value => imagesList.filter(item => item.dataset.type === value);
const renderGallery = (array, activeClass, prevArray = null) => {
  prevArray ? prevList.forEach(item => item.classList.remove(activeClass)) : null;
  array.forEach(item => item.classList.add(activeClass));
  prevValue = getData(config.formInput);
  prevList = array;
};
const sendForm = (e, prevValue = null) => {
  e.preventDefault();
  let dataParam = getData(config.formInput);
  let selectedArray = getImagesList(dataParam);
  if (dataParam == 'all') {
    let selectedArray = imagesList
  }
  selectedArray = getImagesList(getData(config.formInput));
  prevValue ? renderGallery(selectedArray, config.activeImage, prevList) : renderGallery(selectedArray, config.activeImage);
};


document.querySelector(config.formName).addEventListener('change', (e) => {
  sendForm(e, prevValue)
});

document.addEventListener('DOMContentLoaded', (e) => {
  sendForm(e)
});
*/

function dryFilter() {
  const buttons = document.querySelectorAll('.catalog__menu-item')
  const cards = document.querySelectorAll('.product-card')

  function filter(category, items) {
    items.forEach((item) => {
      const isItemFiltered = !item.classList.contains(category)
      const isShowAll = category.toLowerCase() === 'all'
      if (isItemFiltered && !isShowAll) {
        item.classList.add('product-card_anime')
      } else {
        item.classList.remove('product-card_hide')
        item.classList.remove('product-card_anime')
      }
    })
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const currentCategory = button.dataset.filter
      filter(currentCategory, cards)
    })
  })

  cards.forEach((card) => {
    card.ontransitionend = function () {
      if (card.classList.contains('product-card_anime')) {
        card.classList.add('product-card_hide')
      }
    }
  })
}
dryFilter()

function foldMenu(event) {
  const page = document.querySelector('.page')
  const header = document.querySelector('.header')
  const logo = document.querySelector('.header__logo')
  const foldBtn = document.querySelector('.header__fold-btn')
  const catLabel = document.querySelector('.header__catalog-label')
  const socialBtn = document.querySelector('.toggle')
  const subMenu = document.querySelector('.sub-menu')
  const subMenuList = document.querySelector('.sub-menu__list')
  const headerMenu = document.querySelector('.header__menu')
  const headerContacts = document.querySelector('.header__contacts')
  const headerPhone = document.querySelector('.header__phone')
  const headerPhoneLabel = document.querySelector('.header__phone-label')
  const socialIcons = document.querySelector('.social-icons')
  const footer = document.querySelector('.footer')
  const madeInShveden = document.querySelector('.header__madeinshveden')
  function changeMenu() {

    if (changeMenu) {
      page.classList.toggle('page_min')
      foldBtn.classList.toggle('header__fold-btn_min')
      header.classList.toggle('header_min')
      logo.classList.toggle('header__logo_min')
      catLabel.classList.toggle('header__catalog-label_min')
      subMenu.classList.toggle('sub-menu_min')
      subMenuList.classList.toggle('sub-menu__list_min')
      headerMenu.classList.toggle('header__menu_min')
      headerContacts.classList.toggle('header__contacts_min')
      headerPhone.classList.toggle('header__phone_min')
      headerPhoneLabel.classList.toggle('header__phone-label_min')
      socialBtn.classList.toggle('social-icons-btn_min')
      socialIcons.classList.toggle('social-icons_min')
      footer.classList.toggle('footer_min')
      madeInShveden.classList.toggle('header__madeinshveden_min')
    }

  }
  foldBtn.addEventListener('click', changeMenu);
}
foldMenu()


let count = document.querySelectorAll(".counter")
console.log(count)

let convert = Array.from(count)
console.log(convert)

convert.map(function (e) {
  let counterNumber = 0
  function counterup() {
    counterNumber++
    e.innerHTML = counterNumber
    if (counterNumber == e.dataset.number) {
      clearInterval(timing)
    }
  }

  let timing = setInterval(function () {
    counterup()
  }, e.dataset.time)
})
/*
if(window.location.toString().indexOf('http://drydry.tmweb.ru/')>0)
{
  const popupFeedbackForm = document.querySelector(".popup__content_form")
  const feedbackBtn = document.querySelector(".feedback__btn");
  function activeFdbForm() {
    popupFeedbackForm.classList.add('popup__content_form-cative');
  }
  
  feedbackBtn.addEventListener("click", activeFdbForm);
}*/
