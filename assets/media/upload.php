<?php
$web_dir = '/__guide/uploads/';
$uploads_dir = $_SERVER["DOCUMENT_ROOT"].$web_dir;

if (!empty($_FILES)) {
	$temp_name = $_FILES['file']['tmp_name'];
	$name = basename($_FILES['file']['name']);
	move_uploaded_file($temp_name, $uploads_dir.$name);
}

if (isset($_POST["name"])) {
	$filename = $uploads_dir.$_POST["name"];
	unlink($filename);
}

$jsonArray = array();
$files = scandir($uploads_dir);

if ($files !== false) {
	$counter = 0;
	foreach ($files as $file) {
		if('.' !=  $file && '..' != $file) {
			$jsonArray[$counter]['src'] = $uploads_dir.$file;
			$jsonArray[$counter]['href'] = $web_dir.$file;
			$jsonArray[$counter++]['id'] = $file;
		}
	}
}
print_r(json_encode($jsonArray));
?>
