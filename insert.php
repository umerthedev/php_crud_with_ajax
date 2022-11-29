<?php
include ('db.php');

// Check connection
// if (mysqli_connect_errno())
//   {
//   echo "Failed to connect to MySQL: " . mysqli_connect_error();
//   }
//   print_r($_POST);

  $id = $_POST['id'];
  $name = $_POST['name'];
  $email = $_POST['email'];   
  $phone = $_POST['phone'];
  $address = $_POST['address'];
  $gender = $_POST['gender'];
  $dob = $_POST['dob'];
  $sql = "INSERT INTO `users`(`id`,`name`, `email`, `cell`, `address`, `gender`, `dob`) VALUES  ('$id','$name','$email','$phone','$address','$gender','$dob') ON  Duplicate key update `name` = '$name', `email` = '$email', `cell` = '$phone', `address` = '$address', `gender` = '$gender', `dob` = '$dob'";
   if(mysqli_query($con, $sql)){
    echo "Records added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($con);
   };

?>