<?php 
  $created_str = date('F d, Y', $node->created);
  $created_rdf = preg_replace('|(.*)content=\"(.*)\"\s(.*)|', '$2', $date); //date('Y-m-d\TH:i:s', $node->created); 

  $extra_data['guest_author'] = NULL;
  if (!empty($node->field_extra_data['und'][0]['value'])) {
    $extra_data = unserialize($node->field_extra_data['und'][0]['value']);
    //dpm($extra_data);
    $extra_data['guest_author'] = $author_name = !empty($extra_data['guest_author']) ? $extra_data['guest_author'] : NULL;
  }

  if (!$extra_data['guest_author']) {
    $authorExtendedData = ch_misc_loadUserExtendedData($node->uid);
    $author_name = $authorExtendedData->realname;
  }

  global $language;

  if (!$extra_data['guest_author']) {
    $author_url = url('user/' . $node->uid);
    //$gplus_profile = (isset($author->field_u_gplus_profile['und'][0]['safe_value']) && $author->field_u_gplus_profile['und'][0]['safe_value']) ? ' <a class="gplus" title="Google+ profile of ' . $author_name . '" href="' . $author->field_u_gplus_profile['und'][0]['safe_value'] . '?rel=author">(G+)</a>' : '';
    ////$gplus_profile = ($authorExtendedData->field_u_gplus_profile_value) ? ' <a class="gplus" title="Google+ profile of ' . $author_name . '" href="' . $authorExtendedData->field_u_gplus_profile_value . '?rel=author">(G+)</a>' : '';
    $gplus_profile = ($authorExtendedData->field_u_gplus_profile_value) ? '<a class="gplus-hidden" title="Google+ profile of ' . $author_name . '" href="' . $authorExtendedData->field_u_gplus_profile_value . '?rel=author"></a>' : '';
    $author_title = t('!author\'s profile', array('!author' => $author_name));
  }
  
  if($view_mode == 'side_block_teaser') {
    $side_block_teaser = TRUE;
  }
  else {
    $side_block_teaser = FALSE;
  }
  
  //dpm($extra_data);
?>

<?php if (!$page): ?>
  
  <?php 
    if($side_block_teaser) {
      if (!empty($extra_data['teaser_side_block'])) {
        $teaser_data = $extra_data;
      }
      else {
        $teaser_data = ch_misc_getArticleTeaserData('all', $node->body['und'][0]['value'], $node->nid);
      }
      $teaser_data['teaser'] = $extra_data['teaser_side_block'];
      $teaser_data['main_image'] = $extra_data['side_block_main_image'];
    }
    elseif (empty($node->body['und'][0]['summary'])) {
      if (!empty($extra_data['teaser'])) {
        $teaser_data = $extra_data;
      }
      else {
        $teaser_data = ch_misc_getArticleTeaserData('all', $node->body['und'][0]['value'], $node->nid);
      }
    }
    
    //if (strpos($teaser_data['teaser'], 'class="thumb') !== FALSE) {
    if (strpos($teaser_data['teaser'], 'class="thumb') !== FALSE) {
      $class_thumb_presented = ' with_thumb';
    }
    else {
      $class_thumb_presented = '';
    }
  ?>
  <article id="node-<?php print $node->nid; ?>" class="<?php print $classes . $class_thumb_presented; ?> clearfix"<?php print $attributes; ?>>
 
<?php else: ?>
  <?php

    $url = 'http://cloudhostinghq.com'. url('node/' . $node->nid);
    echo '<div class="float share">' . ch_blocks_getSocialiteButtons($url, $node->title) . '</div>';

  ?>

  <div class="main-content"> 
<?php endif; ?>

 
  

          

      <?php if (!$page): ?>
        <?php echo $teaser_data['main_image']; ?>
        <header>
      <?php endif; ?>

          <?php 
          if ($page): ?>
          <h1 
          <?php elseif($_GET['q'] == 'home'): ?>
          <h3  
          <?php else: ?>
          <h2 
          <?php endif; ?>
              
            <?php print ' ' /*. $title_attributes*/ /*preg_replace('/datatype=".*"/', '', $title_attributes);*/ /*preg_replace('/datatype=""/', '', $title_attributes)*/; if (!$node->status) {echo ' class="not-published"';} ?>>
            
            <?php if (!isset($node->title_no_link) && !$page): ?>
              <a href="<?php print $node_url; ?>">
                <?php print $title; ?>
              </a>
            <?php else: ?>
              <?php print $title; ?>
            <?php endif; ?>

          <?php if ($page): ?>
          </h1>
          <?php elseif($_GET['q'] == 'home'): ?>
          </h3>  
          <?php else: ?>
          </h2>
          <?php endif; ?> 

          <?php 

              
              if ($page) {
     
                $submitted = '<span property="dc:date dc:created" content="' . $created_rdf . '" datatype="xsd:dateTime" rel="sioc:has_creator">' .
                                'By: ' .
                                (!$extra_data['guest_author'] ? '<span class="username" lang="' . $language->language . '" xml:lang="' . $language->language . '" typeof="sioc:UserAccount" property="foaf:name">' . $author_name . '</span>'  . $gplus_profile : '<span class="guest-author">' . $author_name . '</span>') .
                                ', on ' . $created_str .

                              '</span>';
               

                echo '<span class="submitted">', $submitted, '</span>';
              }
              else {
                if ($side_block_teaser) {
                  echo '<span class="submitted">', $created_str, '</span>';
                }
                else {
                  echo '<span class="submitted"><span class="author">', $author_name, '</span> - ', $created_str, '</span>';
                }
              }
            ?>
          


      <?php if (!$page): ?>
        </header>
      <?php endif; ?>



      <div class="content <?php echo ($page ? 'page' : 'teaser'); ?>"<?php print $content_attributes; ?>><?php
      
          // Hide comments, tags, and links now so that we can render them later.
          hide($content['comments']);
          hide($content['links']);
          hide($content['field_categories']);
          hide($content['disqus']);
          
           if (!$page) {
            
              hide($content['body']);

              if (!empty($node->body['und'][0]['summary'])) {
                echo l('Read more »', 'node/' . $node->nid, array('attributes' => array('class' => array('more')))) . $node->body['und'][0]['summary'];
              }
              else {
                echo $teaser_data['teaser'];
              }
            
            
          }
          
          $keyword_metatag_name = ($node->type == 'news_post') ? 'news_keywords' : 'keywords';
          
          if (isset($content['metatags']['keywords'])) {
            hide($content['metatags']['keywords']);
          }
          
          if (isset($content['metatags']['keywords']['#attached']['drupal_add_html_head'][0][0]['#value']) && $content['metatags']['keywords']['#attached']['drupal_add_html_head'][0][0]['#value']) {
            ch_misc_addMetatag($keyword_metatag_name, $content['metatags']['keywords']['#attached']['drupal_add_html_head'][0][0]['#value']);
          }
          elseif (@$content['field_topics']) {
            ch_misc_pushTagsToMetatags($keyword_metatag_name, $content['field_topics']);
          }
          
          echo render($content);
        ?></div>


    
    
      <footer>

        <?php 
        
         if (!$page) {
           //echo '<div class="links">' . l('Comments' . ( ($user->uid && $node->comment_count) ? ' (' . $node->comment_count . ')' : ''), 'node/' . $node->nid, array('fragment' => 'comments')) . '</div>';
         }
         else {
           
          //echo '<div class="links">' . l($content['field_categories'][0]['#title'], $content['field_categories'][0]['#href']) . '</div>';
          //dpm($node);
          //dpm($content);
          
        } 
      ?>
    </footer>
    
    
    
    <div class="bottom-clear"></div>
 

  
  
  <?php if ($page && $node->type != 'news_post'): ?>
      
  </div> <!-- main-content -->
  

  <?php endif; ?>
  
    
  <?php 
    if ($page) {
      echo '<a id="comments"></a>', render($content['disqus']), render($content['comments']); 
    }
  ?>

<?php if (!$page): ?>
  <!-- </div> --> <!-- /.inside -->
  <!-- <div class="shadow"></div> -->
  </article> <!-- /.node -->
<?php endif; ?>


