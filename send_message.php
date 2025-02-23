<?php
if($_SERVER["REQUEST_METHOD"]=="POST")
{
    //recup de donnes
    $name=htmlspecialchars($_POST['name']);
    $email=htmlspecialchars($_POST['email']);
    $message=htmlspecialchars($_POST['message']);
    //adresses email ou seront stockes les messages
$to="romaricyelkouni1@gmail.com";
$subject="Nouveau message de $name";
$body="Nom:$name\n Email:$email\n\nMessage:\n$message";
//entete pour l'envoi du message
$headers="From:$email";
//envoi de l'email
if(mail($to,$subject,$body,$headers))
{
    echo"Message envoyé avec succes !";
}
else{
    echo"erreur lors de l'envoi du message.";
}

} 
?>