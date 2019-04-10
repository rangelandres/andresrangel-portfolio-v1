<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];



use PHPMailer\PHPMailer\PHPMailer;
require '../vendor/autoload.php';

//Create a new PHPMailer instance
$mail = new PHPMailer;

//Tell PHPMailer to use SMTP
$mail->isSMTP();

//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 0;

//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';

//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
$mail->Port = 587;

$mail->SMTPSecure = 'tls';

//Whether to use SMTP authentication
$mail->SMTPAuth = true;

//Username to use for SMTP authentication - use full email address for gmail
$mail->Username = "29arangel@gmail.com";
//Password to use for SMTP authentication
$mail->Password = "noHack29";
//Set who the message is to be sent from
$mail->setFrom('andres@rangelandres.com', 'Andres Rangel');

//Set an alternative reply-to address
//$mail->addReplyTo('replyto@example.com', 'First Last');

//Set who the message is to be sent to
$mail->addAddress($email, $name);

//Set the subject line
$mail->Subject = 'Hello, '. $name ;

//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
//$mail->msgHTML(file_get_contents('contents.html'), __DIR__);

$mail->Body    = "Thank you for contacting me. Here is a copy of your message: \r\n" . $message;


//Attach an image file
//$mail->addAttachment('images/phpmailer_mini.png');

//send the message, check for errors
if (!$mail->send()) {
    //echo "Mailer Error: " . $mail->ErrorInfo;
    
} else {
    //echo "Message sent!";

}

$mail->ClearAllRecipients();
//Set who the message is to be sent to
$mail->addAddress('andres@rangelandres.com', 'Andres Rangel');

//Set the subject line
$mail->Subject = 'Email from '.$name;

//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
//$mail->msgHTML(file_get_contents('contents.html'), __DIR__);

$mail->Body    = $email. "\r\n" . $message;


//Attach an image file
//$mail->addAttachment('images/phpmailer_mini.png');

//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
    
} else {
    echo "Message sent!";

}
