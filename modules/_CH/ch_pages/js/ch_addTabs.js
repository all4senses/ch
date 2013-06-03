(function ($) {

  Drupal.behaviors.ch_addTabs = {
    attach: function (context, settings) {

        //console.log('Tabs!');
        $( ".data.tabs" ).tabs();
             
        $( "a#write-review" ).click(function(){
          
          
          $( ".data.tabs" ).tabs( { selected: 2 } );
          
          
          var aTag = $("a[name='write-review-tab']");
          $('html,body').animate({scrollTop: aTag.offset().top},'slow');
          
          
          
          return false;
          
          
          
          
        });
        
    }
  };

}(jQuery));