(function ($) {

  Drupal.behaviors.ch_requestquote_block_v1 = {
    attach: function (context, settings) {
       
       captcha_val = 'kjhjhkgsjdhgjk';
       //console.log('Initial captcha: ' + captcha_val);
       
       //$('#defaultReal').realperson();
       
       //$('.QapTcha').QapTcha({disabledSubmit:false,autoRevert:true,autoSubmit:false});

        $('input[name="referrer"]').val(document.referrer);
        $('input[name="url"]').val(document.URL);
        
        
//        $("body").on("focus", "input.lastInput", function() {
//          alert('d');
//        });


        $('#code').click(function(){
          console.log('cooooode');
        });  
        //$("body").on("focus", 'input[name="ct_capture"]', function() {
        //$('input[name="ct_capture"]').bind("focusin", function() {
        ///$('input[name="ct_capture"]').click(function(){
        $('input[name="ct_captcha"]').focus(function(){
          
           // Get a current captcha value.
          (jQuery).ajax({
            
                url: '/check_ctcaptcha', 
                data: {
                        op: 'get'
                        //,
                        //url: window.location.href,
                        //referer: document.referrer
                       
                      }, 
                    type: 'POST', 
                    dataType: 'json'
                    , 
                    success: function(data) 
                            { 
                                if(!data.error) {
                                    captcha_val = data.cap;
                                    //console.log('The header is arrived: ' + captcha_val);
                                }
                                return false;
                            } 
                    
            }); // end of (jQuery).ajax
       
        });
        
        $('input[id="firstname"], input[id="lastname"], input[id="email"], input[id="company"], input[id="phone"]').hint();
        
        $('input[id="firstname"], input[id="lastname"], input[id="email"], input[id="company"], input[id="phone"]').each(function(){
          if ($(this).val() == '') {
            $(this).val($(this).attr('title'));
          }
          if ($(this).val() == $(this).attr('title')) {
            $(this).addClass('blur');
          }
        });


        // After reloading a page (ctrl-R) hints mecome normal texts and it should be cleared additionally.
        $('input[id="firstname"], input[id="lastname"], input[id="email"], input[id="company"], input[id="phone"]').focus(function(){
          if ($(this).val() == $(this).attr('title')) {
            $(this).val('');
          }
        });
       
        $('input[id="phone"]').keydown(function (event) { 
            
            //console.log($(this).val());
            //console.log(event.keyCode);
            
            //var l = $(this).val().length;
            if( !(     event.keyCode == 8                                // backspace
                    || event.keyCode == 9
                    || event.keyCode == 46                              // delete
                    || (event.keyCode >= 35 && event.keyCode <= 40)     // arrow keys/home/end

                    || (event.keyCode >= 48 && event.keyCode <= 57)     // numbers on keyboard
                    || (event.keyCode >= 96 && event.keyCode <= 105)    // number on keypad
                  
                    || (event.keyCode == 32 || event.keyCode == 189 || event.keyCode == 190 || event.keyCode == 173)    // space, dash, dot
                 )   
              ) {
                    event.preventDefault();     // Prevent character input
            }
            else {
              /*
              if (l >= 3 
                  && !(event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 46 || (event.keyCode >= 35 && event.keyCode <= 40) ) 
                  ) {
                  event.preventDefault();
              }
              */
            }
        });
        
        
        $('input[id="firstname"], input[id="lastname"]').keydown(function (event) { 
            
            if( 
                    (event.keyCode >= 48 && event.keyCode <= 57)     // numbers on keyboard
                    || (event.keyCode >= 96 && event.keyCode <= 105)    // number on keypad
                    || (event.keyCode == 186) // :
                    || (event.keyCode == 191) // /
                    || (event.keyCode == 190) // .
              ) {
                    event.preventDefault();     // Prevent character input
            }

        });

        // Overriding the default Required message.
//        jQuery.extend(jQuery.validator.messages, {
//            required: Drupal.t('All fields with * are required')
//        });
        
        jQuery.validator.addMethod("notEqualsTo", function(value, element, param) {
          return !(this.optional(element) || value === param);
        //}, jQuery.format("You must not enter {0}"));
        }, "All fields with are required");

        jQuery.validator.addMethod("wrongCaptcha", function(value, element, param) {
          //console.log('captcha_val = ' + captcha_val);
          //console.log('va = ' + value.toLowerCase());
          return value.toLowerCase() === captcha_val;
        //}, jQuery.format("You must not enter {0}"));
        }, "Wrong captcha");
        
        

        // Click on a label will click on a radio button.
        $(".label_after").click(function(){
          $(this).prev().click();
        });
        
        $("#requestQuoteFormWrapper .multipartForm").formwizard({ 
				 	formPluginEnabled: true,
				 	validationEnabled: true,
				 	//focusFirstInput: true,
          textSubmit : 'Submit Now',// 'Submit & Get Quotes',
          textNext: 'Get Quotes',//'Submit & Get Quotes',
          
          //inAnimation : {height: 'show'},
          //outAnimation: {height: 'hide'},
//          inAnimation : {left: 100},
//          outAnimation: {left: 100},
//				inDuration : 700,
//					outDuration: 700,
          //easing: 'slide',// 'easeOutBounce',
          //easing: 'easeOutBounce',
          //easing: 'slide',
          //easing: 'easeOutExpo',
          
          
          validationOptions: {
            groups: {
              username: "firstname lastname email phone ct_captcha"
              ,first_step: "phones_amt q_type buying_time"
            },
            errorPlacement: function(error, element) {
              if (element.attr("name") == "phones_amt" || element.attr("name") == "q_for" || element.attr("name") == "buying_time" || element.attr("name") == "q_type" )
                //error.insertAfter( $(".last_radio", element.parent()) );
                ////error.insertAfter("#buying_time");
                ////error.insertAfter("#on_error");
              error.insertAfter(".step");
              
              else if(element.attr("name") == "ct_captcha" || element.attr("name") == "firstname" || element.attr("name") == "lastname"  || element.attr("name") == "company" || element.attr("name") == "email" || element.attr("name") == "phone")
                error.insertAfter("#phone");
              else
                error.insertAfter(element);
            },
//            showErrors: function(errorMap, errorList) {
//              alert("Your form contains " + this.numberOfInvalids());
//              console.log(this);
//              console.log(this.invalidElements());
//              
//              this.defaultShowErrors();
//            },
            rules: {
              
//              http://docs.jquery.com/Plugins/Validation#List_of_built-in_Validation_methods    
//                        
              // Rules from jquery.validate.js              
              /*
              classRuleSettings: {
                required: {required: true},
                email: {email: true},
                url: {url: true},
                date: {date: true},
                dateISO: {dateISO: true},
                dateDE: {dateDE: true},
                number: {number: true},
                numberDE: {numberDE: true},
                digits: {digits: true},
                creditcard: {creditcard: true}
              },
              */
              
              
              phones_amt: "required",
              q_for: "required",
              q_type: "required",
              buying_time: "required",
              connection: "required",
             
              firstname: {
                required: true,
                notEqualsTo: $('input[id="firstname"]').attr('title')
							},
              lastname: {
                required: true,
                notEqualsTo: $('input[id="lastname"]').attr('title')
							}
              ,
              ct_captcha: {
                required: true,
                wrongCaptcha: 'aaa'
							},
              phone: {
                number: true,
                minlength: 3,
                maxlength: 12
							}
              /*
              phone_1: {
                number: true,
                minlength: 3,
                maxlength: 3
							},
              phone_2: {
                number: true,
                minlength: 3,
                maxlength: 3
							},
              phone_3: {
                number: true,
                minlength: 4,
                maxlength: 4
							}
              */
              // works
              /* 
							myemail: {
								required: true,
								email: false,
                number: true
							}
              */
						},
						messages: {
              
              // Rules from jquery.validate.js
              /*
              messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                accept: "Please enter a value with a valid extension.",
                maxlength: $.validator.format("Please enter no more than {0} characters."),
                minlength: $.validator.format("Please enter at least {0} characters."),
                rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
                range: $.validator.format("Please enter a value between {0} and {1}."),
                max: $.validator.format("Please enter a value less than or equal to {0}."),
                min: $.validator.format("Please enter a value greater than or equal to {0}.")
              },   
              */
             
              // Doesn't work... Used snipped above for it.
              //required: Drupal.t('All fields with * are required'),
              
              
              // Works!
              /*
              phones_amt: Drupal.t('Make your choice!'),
              q_for: Drupal.t('Make your choice!'),
              buying_time: Drupal.t('Make your choice!'),
              connection: Drupal.t('Make your choice!'),
              */
             
             //Works
             firstname: Drupal.t('First Name is required'),
             lastname: Drupal.t('Last Name is required'), //Drupal.t('All fields with * are required'),
             phone: Drupal.t('Enter a valid phone number'),
             
             // Works!
             /*
             firstname: {
               notEqualsTo: Drupal.t("xxxx")
             },
             */
              email: {
                required: Drupal.t("Email format: name@domain.com"),
                email: Drupal.t("Email format: name@domain.com")
              }
            }
          },
				 	formOptions :{
						//success: function(data){alert('Success!'); $("#status").fadeTo(50,1,function(){ $(this).html("You are now registered!").fadeTo(5000, 0); })},
            //success: function(data){$('#requestQuoteFormWrapper .sending').hide('clip'); $("#requestQuoteFormWrapper .success").append(data.data); $("#requestQuoteFormWrapper .success").show('clip');},
            
            success: function(data){$('#requestQuoteFormWrapper .sending').hide(); $("#requestQuoteFormWrapper .success").append(data.data); $("#requestQuoteFormWrapper .success").show();},
						
            //beforeSubmit: function(data){$('#requestQuoteFormWrapper .multipartForm').hide('clip'); $("#requestQuoteFormWrapper .sending").append('Data is sendingt: ' + $.param(data)); $("#requestQuoteFormWrapper .sending").show('clip'); },//function(data){$("#data").html("data sent to the server: " + $.param(data));},
            //beforeSubmit: function(data){$('#requestQuoteFormWrapper .multipartForm').hide('clip'); $("#requestQuoteFormWrapper .sending").append('<p>Please wait a moment while processing your request.</p>'); $("#requestQuoteFormWrapper .sending").show('clip'); },
            beforeSubmit: function(data){$('#requestQuoteFormWrapper .multipartForm').hide(); $("#requestQuoteFormWrapper .sending").append('<div class="wait"><p><strong>Please wait</strong> a moment while processing your request...</p></div>'); $("#requestQuoteFormWrapper .sending").show(); },
            
            
            dataType: 'json',
						resetForm: true
				 	}	
				 }
				);
    
    
    }
  };

}(jQuery));

