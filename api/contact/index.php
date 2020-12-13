<?php
  include_once('sendmail.php');
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Content-Type");
  $rest_json = file_get_contents("php://input");
  $_POST = json_decode($rest_json, true);

  if (empty($_POST['firstName']) && empty($_POST['email'])) {
    echo json_encode(
      [
        "sent" => false,
        "message" => "Please fill in all fields."
      ]
      );
    exit();
  }

  if ($_POST)
    {
      // set response code - 200 OK
      http_response_code(200);
      $subject = 'Message from: ' . $_POST['firstName'];
      $from = $_POST['email'];
      $msg = $_POST['msg'];
      $adminEmail = "kproulxdev@gmail.com";

      $sendEmail = new Sender($adminEmail, $from, $subject, $message);
      $sendEmail->send();

    } else {
      // tell the user about the error
      echo json_encode(
        [
          "sent" => false,
          "message" => "Something went wrong, please try again."
        ]
      )
    }