import {renderTemplate, RenderPosition} from './render.js';
import {createSiteFilterTemplate} from './view/filterer-view.js';
import {createSiteSortTemplate} from './view/sorter-view.js';
import {createSiteMenuTemplate} from './view/site-menu-view.js';
import {createEditPointTemplate} from './view/point-editor-view.js';
import {createAddNewPointTemplate} from './view/point-editor-new-view.js';
import {createPoint} from './view/one-point-view.js';

const controlsNavigation = document.querySelector('.trip-controls__navigation');
renderTemplate(controlsNavigation, createSiteMenuTemplate(), RenderPosition.BEFOREEND);

const controlsFilters = document.querySelector('.trip-controls__filters');
renderTemplate(controlsFilters, createSiteFilterTemplate(), RenderPosition.BEFOREEND);

const tripEvents = document.querySelector('.trip-events');
renderTemplate(tripEvents, createSiteSortTemplate(), RenderPosition.BEFOREEND);

const events = document.querySelector('.trip-events');
renderTemplate(events, '<ul class="trip-events__list"></ul>', RenderPosition.BEFOREEND);

const eventsList = events.querySelector('.trip-events__list');
renderTemplate(eventsList, createEditPointTemplate(), RenderPosition.BEFOREEND);
renderTemplate(eventsList, createAddNewPointTemplate(), RenderPosition.BEFOREEND);

for (let i = 0; i < 3; i++) {
  renderTemplate(eventsList, createPoint(), RenderPosition.BEFOREEND);
}
