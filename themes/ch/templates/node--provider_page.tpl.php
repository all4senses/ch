      
  <div class="main-content" xmlns:v="http://rdf.data-vocabulary.org/#" typeof="v:Review-aggregate">
    
    
      <?php

//            $url = 'http://cloudhostinghq.com'. url('node/' . $node->nid);
//            echo '<div class="float share">' . ch_blocks_getSocialiteButtons($url, $node->title) . '</div>';

      ?>





    <div class="content"<?php print $content_attributes; ?>>

          
          
          <div id="left-col" style="overflow: hidden;">
            
                      <div class="logo-info">

                              <?php
                                if (isset($content['field_p_logo'][0]['#item']['uri'])) {
                                  echo '<div class="logo">' . ch_misc_getTrackingUrl(theme('image_style', array( 'path' =>  $content['field_p_logo'][0]['#item']['uri'], 'style_name' => 'logo_provider_page', 'alt' => $content['field_p_logo'][0]['#item']['alt'], 'title' => $content['field_p_logo'][0]['#item']['title'], 'attributes' => array('rel' => 'v:photo')))) . '</div>';
                                }
                                else {
                                  echo render($title_prefix), '<h2', $title_attributes,'>', $node->field_p_name['und'][0]['value'] /*$content['field_p_name'][0]['#markup']*/, '</h2>', render($title_suffix);
                                }

                              ?>

                              <div class="image">
                              <?php
                                if (isset($content['field_p_image'][0]['#item']['uri'])) {
                                  echo '<div>' . ch_misc_getTrackingUrl(theme('image_style', array( 'path' =>  $content['field_p_image'][0]['#item']['uri'], 'style_name' => 'image_provider_page', 'alt' =>  $content['field_p_image'][0]['#item']['alt'], 'title' =>  $content['field_p_image'][0]['#item']['title']))), '</div>';
                                }
                              ?>

                              </div>
                            
                              
                              <?php
                                if (!$node->p_data['info']['i_web_hide'] && !empty($node->p_data['info']['i_web'])) {
                                  echo '<div class="site">' , ch_misc_getTrackingUrl('Visit ' . $node->field_p_name['und'][0]['value']), '</div>';
                                }
                              ?>   

                              <div class="basic-info" rel="v:itemreviewed">
                                <div typeof="Organization">
                                  <div class="caption"><?php echo t('!p Corporate Info:', array('!p' => '<span property="v:itemreviewed">' . $node->field_p_name['und'][0]['value'] /*$content['field_p_name'][0]['#markup']*/ . '</span>')); ?></div>
                                  <div><?php echo '<span class="title">Headquarters:</span><span property="v:address">' . $node->p_data['info']['i_heads'] . '</span>'; ?></div>
                                  <div><?php echo '<span class="title">Founded In:</span>' . $node->p_data['info']['i_founded']; ?></div>
                                  <div><?php echo '<span class="title">Service Availability:</span>' . $node->p_data['info']['i_availability']; ?></div>
                                  <div>
                                    <?php 
                                      if (!$node->p_data['info']['i_web_hide'] && !empty($node->p_data['info']['i_web'])) {
                                        $goto_link_title = (isset($node->p_data['info']['i_web_display']) && $node->p_data['info']['i_web_display']) ? $node->p_data['info']['i_web_display'] : str_replace(array('http://', 'https://'), '', $node->p_data['info']['i_web']);
                                        echo '<span class="title">Website:</span>' . ch_misc_getTrackingUrl($goto_link_title, NULL, NULL, NULL, NULL, array('key' => 'rel', 'value' => 'v:url'));
                                      }
                                      ?>
                                  </div>
                                </div>
                              </div>


                      </div> <!-- <div class="logo-info">-->

                      
                      
                      <div id="ratings">
              
                            <div class="ch_votes">
                              <?php
                                if ($node->ch_voters) {
                                  echo '<div class="voters"><div class="title">Total Number of Reviews:</div><div class="count" property="v:count"><a href="#reviews">' . $node->ch_voters . '</a></div></div>';
                                }
                                echo '<div class="caption">Overall Consumer Ratings</div>' . render($content['ch_ratings']); 
                                if ($node->ch_voters) {
                                  echo '<div class="recommend"><div class="title">Would recommend: </div><div class="data">' . $node->ch_recommend . '% of Users' . '</div></div>';
                                }
                              ?>
                            </div>
                        
                            <div class="overall"> 

                                <?php 
                                  if ($node->ch_rating_overall) {
                                    echo 'Overall Score: <span class="count" content="' . $node->ch_rating_overall . '" property="v:rating">' . $node->ch_rating_overall . '</span>out of 5'; 
                                  }
                                  else {
                                    echo '<div class="descr be-first">Be the first to review</div>'; 
                                  }
                                ?>

                            </div>


                        
                      </div> <!-- <div id="ratings">-->
                          
            </div>
               
              
              
              
      
      
            <div class="data tabs">
                
                <ul>
                  <?php if ($page && isset($content['reviews_entity_view_1']) && $content['reviews_entity_view_1']): ?>
                    <li><a href="#tabs-0"><?php echo 'Consumer Reviews'; ?></a></li>
                  <?php endif; ?>
                    
                  <li><a href="#tabs-1"><?php echo t('About !p', array('!p' => isset($node->field_p_name['und'][0]['value']) ? $node->field_p_name['und'][0]['value'] : t(' Provider') )); ?></a></li>
                  
                  <?php 
                  
                  if ($user->uid && !empty($node->p_data['provider_options']) && (!isset($node->p_data['provider_options']['enabled']) || !empty($node->p_data['provider_options']['enabled']))) {
                    echo '<li><a href="#tabs-2">Available Options</a></li>';
                  }
                  
                  ?>
                  
                </ul>
                
                
                
                
                <?php if (!empty($content['reviews_entity_view_1'])): ?>
                  <div id="tabs-0">
                    <div class="reviews">
                        <a id="reviews"></a>

                      <?php echo render($content['reviews_entity_view_1']); ?>

                    </div>
                  </div>
                <?php endif; ?>
                
                <div id="tabs-1">
                  <?php echo render($content['body']); ?>
                </div>
                
                
                
                <?php 
                  if ($user->uid && !empty($node->p_data['provider_options']) && (!isset($node->p_data['provider_options']['enabled']) || !empty($node->p_data['provider_options']['enabled']))) {
                    
                  
                    echo '<div id="tabs-2">';

                      $provider_options = '';

                      unset($node->p_data['provider_options']['enabled']);

                      foreach ($node->p_data['provider_options'] as $options_set => $options_data) {

                        $provider_options .= '<tr></tr><tr class="caption"><td colspan="2">' . $options_set . '</td></tr>';

                        $odd = TRUE;

                        foreach ($options_data as $option_title => $option_value) {
                          if (strpos($option_title, '-text-')) {
                            continue;
                          }
                          $option_title = str_replace('Num ', '# ', $option_title);
                          $option_value = (is_int($option_value) ? ($option_value ? 'Yes' : 'No') : ($option_value ? $option_value : 'N/A'));
                          if ($odd) {
                            $odd = FALSE;
                            $row_class = 'even';
                          }
                          else {
                            $odd = TRUE;
                            $row_class = 'odd';
                          }

                          if ($option_value == 'Yes' && !empty($options_data[$option_title . ' -text-'])) {
                            $additional_text = ' <span>' . $options_data[$option_title . ' -text-'] . '</span>';
                          }
                          else {
                            $additional_text = '';
                          }
                          if (is_array($option_value)) {
                            $option_value = $option_value['value'];
                          }
                          $provider_options .= '<tr class="' . $row_class . '"><td class="title">' . $option_title . '</td><td class="value' . ($option_value == 'Yes' ? ' yes' : ($option_value == 'No' ? ' no' : '')) . '"><div class="check">' . $option_value . '</div><span>' . $additional_text . '</span></td></tr>';
                        }
                      }
                      echo '<table class="specs"><tbody>' . $provider_options . '</tbody></table>';

                    echo '</div>';
                  }
                  ?>
                
                
               
                <div class="bottom-clear"></div>
                
              </div> <?php // End of <div class="data tabs"> ?>
              
              
              
              
              
              
              
          <?php echo render($content['metatags']); //ch_misc_renderMetatags_newOrder($content['metatags']);?>
          
          
              
              
              
          
    </div> <!-- content -->

      

</div> <!-- main-content -->
  
