<?php
    $nome = $_POST['nome'];
    $from = $_POST['email'];
    $telefone = $_POST['telefone'];
    $endereco = $_POST['endereco'];
    $to = "paulohenriquepaiva@ymail.com";
    $subject = $_POST['motivo'];
    $conteudo = $_POST['mensagem'];
    $headers = "De: " . $from;
    $message = 
        "Motivo do contato: " . $subject . " | " . 
        "Nome: " . $nome ." | " . 
        "E-mail: " . $email . " | " . 
        "Telefone: " . $telefone . " | "  . 
        "Mensagem: " . $conteudo . " | " .  
        "Endereço: " . $endereco;
        

    //echo $message;
    mail($to, $subject, $message, $headers);
    header("Location:index.html");
?>