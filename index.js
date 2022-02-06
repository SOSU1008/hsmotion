// exports.nav = require('./lib/nav').default;

const hsMotion = {};

hsMotion.navScroll = function () {
  const ScrollChk = window.scrollY || document.documentElement.scrollTop;
  const setScroll = document.querySelector('body').classList;
  ScrollChk <= 0 ? setScroll.remove('nav-fixed') : setScroll.add('nav-fixed');
};

let intervalScroll;
hsMotion.scrollMove = function (tagName, gap) {
  if (document.querySelector(tagName) === null) {
    return false;
  }
  gap !== undefined ? gap : (gap = 25);
  let positionY =
    window.pageYOffset +
    document.querySelector(tagName).getBoundingClientRect().top -
    (document.querySelector('header') !== null
      ? document.querySelector('header').offsetHeight
      : 0);
  let scrollPosition = window.scrollY || document.documentElement.scrollTop;
  let scrollMoving = scrollPosition;
  clearInterval(intervalScroll);

  intervalScroll = setInterval(function () {
    if (Math.floor(positionY / gap) === Math.floor(scrollMoving / gap)) {
      scrollMoving = positionY;
      window.scrollTo({ top: positionY });
      clearInterval(intervalScroll);
    } else if (positionY < scrollMoving) {
      window.scrollTo({ top: scrollMoving });
      scrollMoving -= gap;
    } else if (positionY > scrollMoving) {
      window.scrollTo({ top: scrollMoving });
      scrollMoving += gap;
    }
  }, 1);
};

hsMotion.consoleTest = function (text) {
  console.log(text);
};

module.exports = hsMotion;
