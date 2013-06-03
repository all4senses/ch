(function ($) {

  Drupal.behaviors.ch_addTabs = {
    attach: function (context, settings) {

        //console.log('Tabs!');
        $( ".data.tabs" ).tabs();
             
        $( "a#write-review" ).click(function(){
          console.log('write-review!');
          
          //$( ".data.tabs" ).tabs( "option", "active", 2 );
          
          $( ".data.tabs" ).tabs( { selected: 2 } );
          return false;
          
          
          
          
        });
        
    }
  };

}(jQuery));