// Generated by CoffeeScript 1.6.2
$(function() {
  $.fn.imageLoad = function(fn) {
    this.load(fn);
    return this.each(function() {
      if (this.complete && this.naturalWidth !== 0) {
        return $(this).trigger('load');
      }
    });
  };
  $('i').remove();
  return $('img').on('mousedown', function(e) {
    var $backdrop, $img;

    $(document.body).css({
      'overflow-y': 'hidden'
    });
    $backdrop = $('<div>').css({
      position: 'absolute',
      background: 'rgb(217,217,217)',
      'z-index': 1000,
      width: '100%',
      height: '101%',
      left: '0px',
      top: document.body.scrollTop - 1 + 'px'
    });
    $backdrop.appendTo(document.body);
    $img = $('<img id="centered">').attr('src', e.target.src).appendTo($backdrop).imageLoad(function(e) {
      var $this;

      $this = $(this);
      $this.css({
        position: 'relative',
        'max-width': '95%',
        'max-height': '95%',
        'z-index': 1001
      });
      $this.css({
        display: 'block',
        margin: '0 auto',
        top: ((document.body.clientHeight - this.height) / 2) + 'px'
      });
      return $this.appendTo($backdrop);
    });
    $backdrop.on('mousedown', function(e) {
      e.stopPropagation();
      $backdrop.remove();
      $img.remove();
      $(document.body).css({
        'overflow-y': 'auto'
      });
      return null;
    });
    return null;
  });
});
