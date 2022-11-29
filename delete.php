<?php

include('db.php');

$id = $_POST['id'];

$sql = "DELETE FROM `users` WHERE `id` = '$id'";

if (mysqli_query($con, $sql)){
    echo "User Deleted Successfully";
}else{
    echo "Error: " . $sql . "<br>" . mysqli_error($con);
}

?>