  <?php

//session_start();
include ('connectDB.php');
//include ('route.js');
class CheckLogin
{
   function Check($email, $senha){
     $myConnect = new ConnectDB();
     $myConnect->Connect();
     $conn = $myConnect->conn;
      if($_SERVER["REQUEST_METHOD"] == "POST") {
      $sql = "SELECT id FROM usuario WHERE email = '$email'";
      $result = mysqli_query($conn,$sql);
      $count = mysqli_num_rows($result);
      if($count == 1) {
        return true;
      }
      else
      {
         return false;
      }
   }
   }
}
?>


<?php
  $meuobjeto = json_decode(file_get_contents('php://input'));
  $login = new CheckLogin();
  $criptografia = hash('sha256',$meuobjeto->hash);
  if($login->Check($meuobjeto->email, $criptografia) == true)
  {
    echo true;
  }
  else
  {
    echo false;
  }
  $result = $login->Check($meuobjeto->email, $meuobjeto->hash);
  echo json_encode($result);
?>
