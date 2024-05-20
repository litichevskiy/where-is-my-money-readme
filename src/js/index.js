import localization from './localization';
import createDescription from './createDescription';

let currentLanguage = 'en';

const listDescription = document.querySelector('[id="list-app-description"]');
const changeLanguageContainer = document.querySelector('.contaner-select-lang');
const shortDescription = document.querySelector('.short-description');
const createdWith = document.querySelector('.created-with');
const technology = document.querySelector('.technology');
const contactMessage = document.querySelector('.contact-message');
const usageLink = document.querySelector('.usage-link');
const mustBeLaterHeader = document.querySelector('.header-must-be-later');
const mustBeLaterList = document.querySelector('[id="must-be-later"]');

changeLanguageContainer.addEventListener('click', ({ target }) => {
  if( !target.dataset ) return;

  const { lang } = target.dataset;

  if( currentLanguage === lang ) return;
  currentLanguage = lang;
  createContentWithLocalization({ localization, lang });
});

const createContentWithLocalization = ({ localization, lang }) => {
  const descriptionListHTML = createDescription( localization[lang]['description'] );
  const mustBeLaterListHTML = createDescription( localization[lang]['soon']['description'] );

  listDescription.innerHTML = descriptionListHTML;
  mustBeLaterList.innerHTML = mustBeLaterListHTML;

  shortDescription.innerHTML = localization[lang]['short-description'];
  createdWith.innerHTML = localization[lang]['created-with'];
  contactMessage.innerHTML = localization[lang]['contact-message'];
  usageLink.innerHTML = localization[lang]['usage-link'];
  technology.innerHTML = localization['technology'];
  mustBeLaterHeader.innerHTML = localization[lang]['soon']['title'];
};

createContentWithLocalization({ localization, lang: currentLanguage });