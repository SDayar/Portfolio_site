<!DOCTYPE html>
<html lang="Fr">
    <head>
        <title>Présentation : Portfolio </title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"/>
        <style>
            body{
                background-color:white;
            }
            section{
                width:37%;
                height:200px;
                margin-top:210px;
                border:1px solid transparent;
                 box-shadow:5px 0px 3px gray;
               box-sizing:border-box;
            }  
            #reponse{
                margin-top:70px;
            }
        </style>
    </head>
    <body><center>
        <section>
            
                
            <p style="font-family:sans-serif; font-size:20px;"> Message envoyé ! <i class="fa-solid fa-check fa-bounce" style="color: #17ed07;" id="fleche"></i></p>
            <p  style="font-family:sans-serif; font-size:14px;">(Cliquez la flèche en dessous pour revenir à la page principale!)</p>
               <article id="reponse">
                <a href="../public_html/index.php"><i class="fa-solid fa-arrow-left fa-bounce fa-2xl" style="color: #061c74;"></i></a>
               </article>
        </section></center>  
    </body>

</html>














<?php
 //Récuperation des valeurs//
 try{
  $nom = filter_input(INPUT_POST, "nom", FILTER_SANITIZE_STRING);
  $prenom = filter_input(INPUT_POST, "prenom", FILTER_SANITIZE_STRING);
  $email = filter_input(INPUT_POST, "mail", FILTER_SANITIZE_STRING);
  $cont_mess =filter_input(INPUT_POST, "message", FILTER_SANITIZE_STRING);
  $commentaire=filter_input(INPUT_POST, "commentaire", FILTER_SANITIZE_STRING);
  //Connexion à la base de données//      
  $cnx=new PDO('mysql:host=localhost;dbname=portfolio','root','');
  $cnx ->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $req = "insert into message (NOM, PRENOM, EMAIL, CONTENU_MESS)"
          . " values ('$nom', '$prenom', '$email', '$cont_mess')";
  //insertion d'un commentaire//
   $req_com =" insert into commentaireano(commentaire)"
           ." values('$commentaire') ";
  //La fonction exec() permet de exécuter la requête sans qu'une valeur soit retournée//
 $cnx -> exec($req);
   $cnx -> exec($req_com);

 }catch(PDOException $e)
 {
   echo $req."<br />".$e->getMessage()."\n";
   echo $req_com."<br />".$e->getMessage();
   $cnx = null;
 }
 
?>