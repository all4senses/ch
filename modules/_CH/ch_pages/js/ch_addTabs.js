(function ($) {

  Drupal.behaviors.ch_addTabs = {
    attach: function (context, settings) {

        //console.log('Tabs!');
        $( ".data.tabs" ).tabs();
             
        $( "a#write-review" ).click(function(){
          console.log('write-review!');
        });
        
    }
  };

}(jQuery));