import localization from './localization';
import createDescription from './createDescription';

let currentLanguage = 'en';

const listDescription = document.querySelector('[id="list-app-description"]');
const changeLanguageContainer = document.querySelector('.contaner-select-lang');
const shortDescription = document.querySelector('.short-description');
const createdWith = document.querySelector('.created-with');
const technology = document.querySelector('.technology');
const contactMessage = document.querySelector('.contact-message');
const usageLink = document.querySelector('.application-link');
const mustBeLaterHeader = document.querySelector('.header-must-be-later');
const mustBeLaterList = document.querySelector('[id="must-be-later"]');
const linksTitle = document.querySelector('.links-title');
const titleLinkAbout = document.querySelector('.link-video-about');
const titleLinkUsage = document.querySelector('.link-video-usage');

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
  usageLink.innerHTML = localization[lang]['application-link'];
  technology.innerHTML = localization['technology'];
  mustBeLaterHeader.innerHTML = localization[lang]['soon']['title'];
  linksTitle.innerHTML = localization[lang]['video-links-title'];
  titleLinkAbout.innerHTML = localization[lang]['video-link-about-txt'];
  titleLinkUsage.innerHTML = localization[lang]['video-link-usage-txt'];
};

createContentWithLocalization({ localization, lang: currentLanguage });