<?php
/*======================================
=            PHP send email            =
======================================*/

$email = "your@email.com"; /* add your email */

$headerFields = array(
  "From: your@email.com", /* add your email */
  "MIME-Version: 1.0",
  "Content-Type: text/html;charset=utf-8"
);

$log_data['ip'] = $_SERVER['HTTP_X_REAL_IP'];
$log_data['userAgent'] = $_SERVER["HTTP_USER_AGENT"];
$log_data['post_data'] = $_POST;


if (isset($_POST['comments'])) {

  $mailText = '
  IP: '.$log_data['ip'].'<br />
  User agent: '.$log_data['userAgent'].'<br />
  ContactName: '.$_POST['contactName'].'<br />
  Email: '.$_POST['email'].'<br />
  Comments: '.$_POST['comments'].'<br />
  ';

  if ( mail($email, 'Contact form webpage 1E-shop by www.angelostudio.net.', $mailText, implode("\r\n", $headerFields) ) ) {
    error_log(serialize($log_data)."\n", 3, '_log/contact.log');
  } else {
    error_log(serialize($log_data)."\n", 3, '_log/contact_error.log');
  }

}

/*-----  End of PHP send email  ------*/

?>