(function ($) {

  Drupal.behaviors.ch_floatingSocials = {
    attach: function (context, settings) {
       
          console.log('teeest');
          
       $(".float.share").stickyfloat({ 
         duration: 200, 
         stickToBottom: true
         //,
         //startOffset: 300,
         //offsetY: -150
       });

       
    }
  };

}(jQuery));
