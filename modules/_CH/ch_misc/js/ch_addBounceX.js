(function ($) {

  Drupal.behaviors.ch_addBounceX = {
    attach: function (context, settings) {
       
        console.log('ch_addBounceX');
       
        (function(d) {
            var e = d.createElement('script');
            e.src = d.location.protocol + '//bounceexchange.com/tag/800/i.js';
            e.async = true;
            d.getElementsByTagName("head")[0].appendChild(e);
        }(document));
       
    }
  };

}(jQuery));
