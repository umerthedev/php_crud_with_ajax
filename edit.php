<?php

include ('db.php');
$id = $_POST['id'];
$sql = "SELECT * FROM `users` WHERE `id` = '$id'";
$res = mysqli_query($con, $sql);
$row = mysqli_fetch_assoc($res);
echo json_encode($row);

 


?>