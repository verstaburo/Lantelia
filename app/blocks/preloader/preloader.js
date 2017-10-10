import $ from 'jquery';
import { freeze, unfreeze } from '../../blocks/js-functions/freeze';

/* eslint-disable */
export default () => {
  if ($('.index').length == 0) {
    $('#preloader').remove();
    return
  };

  const PRE = $('#preloader');
  const TEXT = $('.preloader__logo');
  freeze();

  PRE.on('click', function (e) {
    e.preventDefault();
    freeze();
  })

  setTimeout(function () {
    TEXT.fadeIn(1500).addClass('animated');
  }, 500);

  TEXT.fadeOut();
  setTimeout(function () {
    unfreeze();
    PRE.fadeOut();
  }, 3000);

}
/* eslint-enable */
