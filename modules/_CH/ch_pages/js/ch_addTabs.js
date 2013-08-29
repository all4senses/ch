(function ($) {

  Drupal.behaviors.ch_addTabs = {
    attach: function (context, settings) {

        //console.log('Tabs!');
        $( ".data.tabs" ).tabs();
        console.log('Tabs!');
        console.log($( ".data.tabs .visit-site" ));
        $( ".data.tabs ul" ).append('<li><a href="http://cloudhostinghq.com">Visit Website</a></li>');     
            
        // Buttun to go to the tab to Write review right on the provider page
        /*
        $( "a#write-review-first" ).click(function(){
          $( ".data.tabs" ).tabs( { selected: 2 } );
          var aTag = $("a[name='provider-tabs']");
          $('html,body').animate({scrollTop: aTag.offset().top},'slow');
          return false;
        });
        
        $( "a#write-review" ).click(function(){
          $( ".data.tabs" ).tabs( { selected: 3 } );
          var aTag = $("a[name='provider-tabs']");
          $('html,body').animate({scrollTop: aTag.offset().top},'slow');
          return false;
        });
        */
    }
  };

}(jQuery));