<?php

$errors = [];

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if(!empty($_POST)) {
    // Load the environment variables from Dotenv
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->safeLoad();

    // Get the captcha submission and verify it using Googles APIs
    $captcha = $_POST['g-recaptcha-response'];
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$_ENV['RECAPTCHA_SECRET_KEY']."&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']);
    $g_response_decoded = json_decode($response);

    // If the captcha was a success, then continue with the mailing, otherwise die.
    //if($g_response_decoded->success === true) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phoneNum'];
        $message = $_POST['generalMessage'];
        $queryType = $_POST['queryType'];
        $packageCat = $_POST['packageCat'];
        $specificPackage = $_POST['specificPackage'];

        if(empty($phone)) {
            $phone = "Not Provided";
        } else if (empty($packageCat)) {
            $packageCat = "Not Provided";
        } else if(empty($specificPackage)) {
            $specificPackage = "Not Provided";
        }

        if(empty($name) || empty($email) || empty($message)) {
            die("Some fields weren't entered");
        } else if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            die("Not valid email");
        }

        $mail = new PHPMailer(true);

        // Setup SMTP connection
        $mail->isSMTP();
        $mail->Host = $_ENV['smtp_host'];
        $mail->SMTPAuth = true;
        $mail->Username = $_ENV['smtp_username'];
        $mail->Password = $_ENV['smtp_password'];
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Setup addressing of mail form
        $mail->setFrom($email,$name);
        $mail->addAddress($_ENV['to_address']);
        $mail->addReplyTo($email,$name);

        $mail->isHTML(true);
        $mail->Subject = "New Website Contact Form Submission";
        $bodySections = ["Name: {$name}", "Email: {$email}", "Phone: {$phone}", "Query Type: {$queryType}", "Package Category: {$packageCat}", "Specific Package: {$specificPackage}", "Message:", nl2br($message)];
        $body = join("<br />", $bodySections);
        $mail->Body = $body;

        if($mail->send()) {
            echo "mail successful";
            header("Location: success.html");
        } else {
            echo "Something wen't wrong with the contact process, if this error persists please reach out to us on social media.";
        }
    } else {
        die("Recaptcha failed");
    }
//} else {
    //die("not a valid submission");
//}