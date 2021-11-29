import {createSiteMenuTemplate} from './view/site-menu-view.js';
import {renderTemplate, RenderPosition} from './render.js';

const siteMainElement = document.querySelector('.page-header');
const siteHeaderElement = siteMainElement.querySelector('.trip-controls__navigation');

renderTemplate(siteHeaderElement, createSiteMenuTemplate(), RenderPosition.BEFOREEND);
