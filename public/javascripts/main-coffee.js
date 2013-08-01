// Generated by CoffeeScript 1.6.2
var artClicked, isSafari, posImageCenter, removeImageCenter;

artClicked = function(e) {
  var $img, $this, src;

  $this = $(this);
  console.log('an image was clicked, here it is');
  console.dir(this);
  e.stopPropagation();
  src = $(this).attr('src');
  $img = $('<img>').attr('src', src);
  $img.appendTo(document.body);
  $img.on('load', posImageCenter);
  return null;
};

/*
isOpera = !!window.opera || navigator.userAgent.indexOf('Opera') >= 0
# Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
isFirefox = typeof InstallTrigger != 'undefined'   # Firefox 1.0+
*/


isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;

/*
# At least Safari 3+: "[object HTMLElementConstructor]"
isChrome = !!window.chrome                          # Chrome 1+
*/


if (isSafari || window.innerWidth <= 800) {
  window.location.href += 'm';
}

posImageCenter = function(e) {
  var $modal, $this, height, width;

  e.stopPropagation();
  console.log('the image is now loaded, here it is');
  console.dir(this);
  $this = $(this);
  width = this.naturalWidth;
  height = this.naturalHeight;
  $this.addClass('artCenter');
  $this.css({
    position: 'absolute',
    top: (document.body.clientHeight - this.naturalHeight) / 2 + 'px',
    left: (document.body.clientWidth - this.naturalWidth) / 2 + 'px',
    'z-index': 100
  });
  $modal = $('<div id="modalCatch">').css({
    width: window.innerWidth,
    height: window.innerHeight,
    position: 'absolute',
    top: '0px',
    left: '0px',
    'z-index': 101
  }).appendTo(document.body).data('imageTarget', $this);
  return $modal.on('mousedown', removeImageCenter);
};

removeImageCenter = function(e) {
  var $img;

  e.stopPropagation();
  console.log('made it into remove Image Center');
  $img = $(this).data('imageTarget');
  $img.remove();
  $(this).remove();
  return null;
};

$(function() {
  var MOVEAMNT, TIME, fadeOuty, left, removeElt;

  left = 0;
  $('.artwork').on('mousedown', artClicked);
  console.dir($('.artwork'));
  console.log('loaded main.coffee');
  removeElt = function() {
    return $(this).remove();
  };
  fadeOuty = function() {
    return $('#help').css({
      opacity: 0
    }).on('transitionEnd', removeElt).on('webkitTransitionEnd', removeElt);
  };
  window.setTimeout(fadeOuty, 2000);
  MOVEAMNT = 20;
  TIME = 15;
  $('#leftArrow').mousedown(function(e) {
    var moveLeft, movingLeft;

    e.stopPropagation();
    moveLeft = function() {
      left = (left + MOVEAMNT) < 0 ? left + MOVEAMNT : 0;
      return $('.bundle').css('left', left + 'px');
    };
    movingLeft = window.setInterval(moveLeft, TIME);
    $(this).mouseup(function(e) {
      e.stopPropagation();
      window.clearInterval(movingLeft);
      return null;
    });
    $(this).mouseleave(function(e) {
      e.stopPropagation();
      window.clearInterval(movingLeft);
      return null;
    });
    return null;
  });
  return $('#rightArrow').mousedown(function(e) {
    var moveRight, movingRight;

    e.stopPropagation();
    moveRight = function() {
      left = left - MOVEAMNT;
      return $('.bundle').css('left', left + 'px');
    };
    movingRight = window.setInterval(moveRight, TIME);
    $(this).mouseup(function(e) {
      e.stopPropagation();
      window.clearInterval(movingRight);
      return null;
    });
    $(this).mouseleave(function(e) {
      e.stopPropagation();
      window.clearInterval(movingRight);
      return null;
    });
    return null;
  });
});
