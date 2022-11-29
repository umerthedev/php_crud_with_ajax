<?php

include ('db.php');
$sql = "SELECT * FROM `users`";
$res = mysqli_query($con, $sql);
// print_r($res);
while($row = mysqli_fetch_assoc($res)){
    $data[] = $row;
}
echo json_encode($data);


?>