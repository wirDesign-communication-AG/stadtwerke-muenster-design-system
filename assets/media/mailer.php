<?php

if (!isset($_POST['todo'])) {return false;}

$response['success'] = 'ok';
$response['message'] = $_POST['MESSAGE_FAIL'];

$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);
if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
	$response['success'] = 'fail';
}

$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
if (strlen($name) < 2) {
	$response['success'] = 'fail';
}

$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
if (strlen($message) < 2) {
	$response['success'] = 'fail';
}

if ($response['success'] == 'ok') {
	$mimeprefs = array(
		"scheme" => "Q",
		"input-charset" => "UTF-8",
		"output-charset" => "ISO-8859-1",
		"line-break-chars" => "\n"
	);

	$subject = preg_replace('/^:\s+/', '', iconv_mime_encode("", $_POST['MAILSUBJECT'], $mimeprefs));

	$content = "\n\n".$name."\n".$email."\n\n".$message;
	$content = utf8_decode($content);

	$header = "Return-Path: ". "example@example.com" ."\nFrom: "."example@example.com"."\n";
	$header .= "Content-Type: text/plain; charset=\"iso-8859-1\"\n";
	$header .= "Content-Transfer-Encoding: 8bit\n";
	$header .= "X-Mailer: PHP v".phpversion()."\n";

	if (mail("example@example.com", $subject, $content, $header)) {
		$response['message'] = $_POST['MESSAGE_OK'];
	} else {
		$response['success'] = 'fail';
	}
}

print_r(json_encode($response));
?>