(function ($) {

  Drupal.behaviors.ch_SendMsgNnewsletterSubscr_fieldHints = {
    attach: function (context, settings) {
      
      //$('#block-ch_blocks-send_msg_n_subscribe input[id="edit-fname"], #block-ch_blocks-send_msg_n_subscribe input[id="edit-lname"], #block-ch_blocks-send_msg_n_subscribe input[id="edit-email"], #block-ch_blocks-send_msg_n_subscribe textarea[id="edit-message"]').each(function(){
      $('#block-ch-blocks-send-msg-n-subscribe input[id="edit-fname"], #block-ch-blocks-send-msg-n-subscribe input[id="edit-lname"], #block-ch-blocks-send-msg-n-subscribe input[id="edit-email"], #block-ch-blocks-send-msg-n-subscribe textarea[id="edit-message"]').each(function(){
        if ($(this).val() == '') {
          $(this).val($(this).attr('title'));
          $(this).addClass('blur');
        }
        else if ($(this).val() == $(this).attr('title')) {
          $(this).addClass('blur');
        }
      });
      
      //$('#block-ch_blocks-send_msg_n_subscribe input[id="edit-fname"], #block-ch_blocks-send_msg_n_subscribe input[id="edit-lname"], #block-ch_blocks-send_msg_n_subscribe input[id="edit-email"], #block-ch_blocks-send_msg_n_subscribe textarea[id="edit-message"]').focus(function(){
      $('#block-ch-blocks-send-msg-n-subscribe input[id="edit-fname"], #block-ch-blocks-send-msg-n-subscribe input[id="edit-lname"], #block-ch-blocks-send-msg-n-subscribe input[id="edit-email"], #block-ch-blocks-send-msg-n-subscribe textarea[id="edit-message"]').focus(function(){        
        if ($(this).val() == $(this).attr('title')) {
          $(this).val('');
          $(this).removeClass('blur');
        }
        
      });
      
      //$('#block-ch_blocks-send_msg_n_subscribe input[id="edit-fname"], #block-ch_blocks-send_msg_n_subscribe input[id="edit-lname"], #block-ch_blocks-send_msg_n_subscribe input[id="edit-email"], #block-ch_blocks-send_msg_n_subscribe textarea[id="edit-message"]').blur(function(){
      $('#block-ch-blocks-send-msg-n-subscribe input[id="edit-fname"], #block-ch-blocks-send-msg-n-subscribe input[id="edit-lname"], #block-ch-blocks-send-msg-n-subscribe input[id="edit-email"], #block-ch-blocks-send-msg-n-subscribe textarea[id="edit-message"]').blur(function(){
        
        if ($(this).val() == '') {
          $(this).val($(this).attr('title'));
          $(this).addClass('blur');
        }
        
      });
      
    }
  };

}(jQuery));