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


/*
if isSafari
    if (window.location.path.indexOf '/m') isnt 0
        window.location.href = window.location.protocol + '//' + window.location.hostname + '/m' + window.location.pathname
*/


if (window.innerWidth <= 800) {
  $('#navbar').remove();
  $(document.body).css('padding', 0);
}

if (navigator.appName === 'Microsoft Internet Explorer') {
  window.location.href = window.location.protocol + '//' + window.location.hostname + '/ie';
}

posImageCenter = function(e) {
  var $modal, $this;

  e.stopPropagation();
  console.log('the image is now loaded, here it is');
  console.dir(this);
  $this = $(this);
  $this.addClass('artCenter');
  $this.css({
    position: 'absolute',
    'z-index': 100
  }).css({
    top: (document.body.clientHeight - this.height) / 2 + 'px',
    left: (document.body.clientWidth - this.width) / 2 + 'px'
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
  $('img.artwork').on('mousedown', artClicked);
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
  $('#rightArrow').mousedown(function(e) {
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
  return $('.bundle img').css({
    'max-width': Math.floor(window.innerWidth * .9) + 'px',
    'max-height': Math.floor(window.innerHeight * .9) + 'px'
  });
});
