<?php

/**
 * @file
 * Module constants list.
 */

// Ratings titles.
define('PRICE', 'Price Value');
define('FEATURES', 'Features');
define('RELY', 'Reliability & Uptime');
define('CUSTOMER', 'Customer Support');
define('CONTROL', 'Control Panel Interface');

define('OVERALL', 'Overall Average Rating');

define('RECOMMEND', 'Would you recommend this provider?');



// Fields hints.
define('FNAME_HINT', 'First');
define('LNAME_HINT', 'Last');
define('EMAIL_HINT', 'Enter a valid email');
define('PROS_HINT', 'Optional');
define('CONS_HINT', 'Optional');

// Provider data
$service_types = serialize(array('ch' => 'Cloud Hosting', 'mh' => 'Managed Hosting', 'vps' => 'VPS Hosting', 'ds' => 'Dedicated Servers', 'sh' => 'Shared Hosting', 'cb' => 'Cloud Backup'));

$service_descriptions = serialize(array('pti' => 'Plan title', 'sp' => 'Space', 'bw' => 'Bandwidth', 'vr-y' => 'Video Review (YouTube video ID)'));
$fee_types = serialize(array('mon' => array('Monthly fees', '$'), 'set' => array('Setup fees', ''), 'oth' => array('Other fees', '') ));

define('SERVICE_TYPES', $service_types);
define('SERVICE_DESCRIPTIONS', $service_descriptions);
define('FEE_TYPES', $fee_types);





$provider_options = array(
          'Provider Info' => array(
              'Year Founded' => 'textfield',
              'Headquarters Location' => 'textfield',
              'Service Location' => 'textfield',
              'Service Type Availability' => 'textfield',
              'Popular Service Plan' => 'textfield',
              'Money Back Guarantee' => 'textfield',
          ),
          
          'Services & Pricing' => array(
              'Monthly Cost of Cheapest Service' => 'textfield',
              'Amount of Lines Per Price Tier' => 'textarea',
              'Month to Month Option' => 'checkbox',
              'Metered Plans' => 'textfield',
              'Requires Contract' => 'checkbox',
              'Contract Length (in yrs)' => 'textfield',
              'Customizable Plans' => 'checkbox',
              'Activation Fee' => 'textfield',
              'Setup Fee' => 'textfield',
              'Number Porting Fee' => 'textfield',
              'Shipping' => 'textfield',
              'Equipment Leasing' => 'checkbox',
              'Mobile App' => 'checkbox',
              'Own Softphone' => 'checkbox',
              'Works with 3rd party Softphones' => 'checkbox',
              'Fax Options' => 'checkbox',
              'Fax Pricing' => 'textarea',
              'Desktop Integration Client' => 'checkbox',
              'IP Phones Supported' => 'textfield',
              //'IP Phones Non Supported' => 'textfield',
              'Toll Free Numbers' => 'checkbox',
              'Local Numbers' => 'checkbox',
              'Vanity Numbers' => 'checkbox',
              'BYOD Option' => 'checkbox',
          ),
          
          
          'Available Features (some features cost extra, as per provider rates)' => array(
              'Advanced Call Forwarding' => 'checkbox',
              'Anonymous Call Rejection' => 'checkbox',
              'Auto Attendant' => 'checkbox',
              'Busy Lamp Field' => 'checkbox',
              'Call Queuing' => 'checkbox',
              'Call Me Now' => 'checkbox',
              'Call Notifications' => 'checkbox',
              'Call Parking' => 'checkbox',
              'Call Recording' => 'checkbox',
              'Call Return' => 'checkbox',
              'Call Waiting' => 'checkbox',
              'Caller ID' => 'checkbox',
              'Conference Calls' => 'checkbox',
              'Dial-by-name Directory' => 'checkbox',
              'Directed Call Pickup' => 'checkbox',
              'Do Not Disturb' => 'checkbox',
              'E911' => 'checkbox',
              'Find Me/Follow Me' => 'checkbox',
              'Group Paging' => 'checkbox',
              'Hoteling Guest' => 'checkbox',
              'Hunt Group' => 'checkbox',
              'IVR' => 'checkbox',
              'Line Mirroring' => 'checkbox', 
              'Mobile/Deskphone Sync' => 'checkbox', 
              'On-Hold Music' => 'checkbox',
              'Privacy Options' => 'checkbox',
              'Push To Talk' => 'checkbox',
              'Selective Call Acceptance' => 'checkbox',
              'Selective Call Rejection' => 'checkbox',
              'Shared Call Appearance' => 'checkbox',
              'Simultaneous Ring' => 'checkbox',
              'Switchboard Software for Live Receptionist' => 'checkbox',
              'Three-way Calling' => 'checkbox',
              'Unlimited Extensions' => 'checkbox',
              'Voicemail Transcriptions' => 'checkbox',
              'Virtual Extensions' => 'checkbox',
              'Virtual Numbers' => 'checkbox',
          ),
          
          'Integrations' => array(
              'ACT!' => 'checkbox',
              'Filemaker' => 'checkbox',
              'Outlook' => 'checkbox',
              'NetSuite' => 'checkbox',
              'SalesForce' => 'checkbox',
              'SugarCRM' => 'checkbox',
          ),
          
          'Support' => array(
              'Hours' => 'textfield',
              'Telephone Support' => 'checkbox',
              'Email Support' => 'checkbox',
              'Instant Chat' => 'checkbox',
              '24/7 Call-in Support' => 'checkbox',
              'FAQs Section' => 'checkbox',
              'Video Tutorials' => 'checkbox',
              'E-Guides' => 'checkbox',
              'Online Ticket Submissions' => 'checkbox',
        ),
          
      );
      
define('PROVIDER_OPTIONS', serialize($provider_options));