<?php
  include("DbController.php");

  $meuobjeto = json_decode(file_get_contents('php://input'));

  $myRegister = new Controller();
  $myRegister->registrar($meuobjeto->cpf, $meuobjeto->nome, $meuobjeto->nascimento, $meuobjeto->telefone, $meuobjeto->email, $meuobjeto->matricula, $meuobjeto->corporacao, $meuobjeto->tipo);
?>
