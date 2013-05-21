// Generated by CoffeeScript 1.6.2
var artClicked, posImageCenter, removeImageCenter;

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

posImageCenter = function(e) {
  var $this, height, width;

  e.stopPropagation();
  console.log('the image is now loaded, here it is');
  console.dir(this);
  $this = $(this);
  width = this.naturalWidth;
  height = this.naturalHeight;
  $this.addClass('artCenter');
  $this.css({
    position: 'absolute',
    'box-shadow': '0 0 20pt 12pt rgba(0,0,0,0.35)',
    top: (document.body.clientHeight - this.naturalHeight) / 2 + 'px',
    left: (document.body.clientWidth - this.naturalWidth) / 2 + 'px',
    'z-index': 10
  });
  return $this.on('click', removeImageCenter);
};

removeImageCenter = function(e) {
  var $this;

  e.stopPropagation();
  console.log('made it into remove Image Center');
  $this = $(this);
  $this.removeClass('artCenter');
  $this.remove();
  return null;
};

$(function() {
  $('.artwork').on('click', artClicked);
  console.dir($('.artwork'));
  return console.log('loaded main.coffee');
});
