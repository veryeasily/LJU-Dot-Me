artClicked = (e) ->
    $this = $(this)
    console.log('an image was clicked, here it is')
    console.dir(this)
    e.stopPropagation()
    src = $(this).attr('src')
    $img = $('<img>').attr('src', src)
    $img.appendTo(document.body)
    $img.on('load', posImageCenter)
    return null
###
isOpera = !!window.opera || navigator.userAgent.indexOf('Opera') >= 0
# Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
isFirefox = typeof InstallTrigger != 'undefined'   # Firefox 1.0+
isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0
# At least Safari 3+: "[object HTMLElementConstructor]"
isChrome = !!window.chrome                          # Chrome 1+
###

posImageCenter = (e) ->
    do e.stopPropagation
    console.log('the image is now loaded, here it is')
    console.dir(this)
    $this = $(this)
    width = this.naturalWidth
    height = this.naturalHeight
    $this.addClass('artCenter')
    $this.css({
        position: 'absolute',
        top: (document.body.clientHeight - this.naturalHeight)/2 + 'px',
        left: (document.body.clientWidth - this.naturalWidth)/2 + 'px',
        'z-index': 100,
    })

    # now we have to place something to absorb the click to make the art go away
    $modal = $('<div id="modalCatch">').css({
        width: window.innerWidth,
        height: window.innerHeight,
        position: 'absolute',
        top: '0px',
        left: '0px',
        'z-index': 101,
    }).appendTo(document.body).data('imageTarget', $this)
    $modal.on('click', removeImageCenter)

removeImageCenter = (e) ->
    e.stopPropagation()
    console.log('made it into remove Image Center')
    $img = $(this).data('imageTarget')
    $img.remove()
    $(this).remove()
    return null

$ ->
    $('.artwork').on('click', artClicked)
    console.dir($('.artwork'))
    console.log('loaded main.coffee')
    removeElt = ->
        $(this).remove()
    fadeOuty = ->
        $('#help').css({
            opacity: 0
        }).on('transitionEnd', removeElt).on('webkitTransitionEnd', removeElt)
    window.setTimeout(fadeOuty, 2000)
