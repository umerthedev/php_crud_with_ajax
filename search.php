<?php

include ('db.php');
$name = $_POST['name'];
$sql = "SELECT * FROM `users` WHERE LOWER(users.`name`) LIKE '%$name%' OR LOWER(users.`email`) LIKE '$name%' OR LOWER(users.`cell`) LIKE '$name%'";
$res = mysqli_query($con, $sql);
// print_r($res);
while($row = mysqli_fetch_assoc($res)){
    $data[] = $row;
}
echo json_encode($data);


?>