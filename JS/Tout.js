
const barre_nav = window.document.querySelector("nav");
//Boite "moi" et les infoderoulants//
const boite = document.querySelector(".boitemoi");
const infoderou = document.querySelector(".infoderoulant");


document.addEventListener("scroll", () => {
let y = window.pageYOffset;
let w = screen.width;
console.log(w);



console.log( "Hauteur du scroll = " + y);
if(y >= 510){
    barre_nav.classList.add("scroll");
    
    
}else{
    barre_nav.classList.remove("scroll");
}
/*if(y>=613 && w>= 780){
    boite.style.visibility="visible";
    boite.style.transform="translateY(-10px)";
    
}
    else if(y<613 && w>= 780){
        boite.style.transform="translateY(10px)";
        boite.style.visibility="hidden";
    }*/

if ( y>=1080 && w>= 780){
   infoderou.style.visibility="visible";
     boite.style.transform="translateY(-10px)"
}
    /*else if(y<1080 && w>= 780){
        infoderou.style.transform="translateY(10px)";
        infoderou.style.visibility="hidden";
    }*/
    
}
);
    
    document.addEventListener("scroll", function(){
let y = window.pageYOffset;
var larg_niveau_fr= window.document.querySelector("#niveau_fr");
var larg_niveau_fr_e= window.document.querySelector("#niveau_fr_e");
var larg_niveau_an= window.document.querySelector("#niveau_an");
var larg_niveau_an_e= window.document.querySelector("#niveau_an_e");
if(y>1162 && y<=2600){
    larg_niveau_fr.style.width="90%";
    larg_niveau_fr_e.style.width="89%";
    larg_niveau_an.style.width="65%";
    larg_niveau_an_e.style.width="70%";

}
else{
    larg_niveau_fr.style.width="0";
    larg_niveau_fr_e.style.width="0";
    larg_niveau_an.style.width="0";
    larg_niveau_an_e.style.width="0";
}
}
);
                                        
//Barre lateralle//

    window.document.querySelector(".btn_menu_lat").addEventListener("click", function(){
        
       let valeur = document.querySelector(".cont_menu_lat");
        valeur.style.display="flex";
    document.querySelector(".btn_menu_lat").style.display="none";
    let fermeture = document.querySelector(".barrelat");
   fermeture.style.display="flex";
    document.querySelector(".croix").style.display="block";
  

    }, false);
    let fermeture = document.querySelector(".barrelat");
    window.document.querySelector(".croix").addEventListener("click", function(){
        fermeture.style.display="none";
        let valeur = document.querySelector(".cont_menu_lat");
        valeur.style.display="none";
        document.querySelector(".croix").style.display="none";
document.querySelector(".btn_menu_lat").style.display="block";
         

    }, false);
//Envoyer un commentaire//
document.querySelector("#valid_comm").addEventListener("click", function(){
    const comm = window.document.querySelector("#commentaire").value;
    if(comm ==""){
        alert("Veuillez saisir le commentaire");
    }
    else{
        let confirmation = confirm("Vous serez dirigez vers votre boite mail !");
        if(confirmation == true){
        window.location.href="mailto:sdayar318@gmail.com?subject=Commentaire&body="+comm+"";
        }
        else{
            alert("Commentaire non envoyé !");
        }
    }
}, false );


window.document.querySelector("#btn_envoyer").addEventListener("click", function(event){ 
 event.preventDefault(); 
var  nom = window.document.querySelector("#nom").value;
var  prenom = window.document.querySelector("#prenom").value;;
var  mail = window.document.querySelector("#mail").value;
var mess = window.document.querySelector("#message").value;

    if(nom == ""){
       
        document.querySelector("#reponse").innerHTML= " Oups ! N'oubiez pas votre nom ";
       
    }
     if(prenom ==""){
       
        document.querySelector("#reponse").innerHTML= " Oups ! Vous avez oublié votre prénom";
       
    }
     if(mail == ""){
         
        document.querySelector("#reponse").innerHTML= "Oups ! Vous avez oublié votre mail ";
       
    }
     if(mess == ""){
        
        document.querySelector("#reponse").innerHTML= " Oups ! Saisissez le message !";
    }
    if(document.querySelector("#accord").checked === false){
       
     document.querySelector("#reponse").innerHTML= " Oups ! Veuillez cochez la case au-dessus !";   
    }
   
}, false);

window.document.querySelector("#btn_envoyer").addEventListener("click", function(){ 
var nom = window.document.querySelector("#nom").value;
var  prenom = window.document.querySelector("#prenom").value;;
var  mail = window.document.querySelector("#mail").value;
var  mess = window.document.querySelector("#message").value;
 if(nom != "" && prenom != "" && mail != "" && mess != "" && document.querySelector("#accord").checked === true )
    {
        document.querySelector("#reponse").innerHTML="";
        document.querySelector("#fleche").style.display="block";
        document.querySelector("#envoie").innerHTML="Envoyé !";
        window.location.href="mailto:sdayar318@gmail.com?subject=Message provenant de "+ prenom +" " + nom + " &body="+mess+"";
    }else{
         document.querySelector("#fleche").style.display="none";
         document.querySelector("#envoie").innerHTML="";
    }
    
  }, false);
 




 
 
        
        
        
        

