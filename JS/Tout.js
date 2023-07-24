
const barre_nav = window.document.querySelector("nav");

document.addEventListener("scroll", () => {
var y = window.pageYOffset;


console.log( "Hauteur du scroll = " + y);
if(y >= 510){
    barre_nav.classList.add("scroll");
    
    
}else{
    barre_nav.classList.remove("scroll");
}
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
 
//Envoyer un commentaire//
document.querySelector("#valid_comm").addEventListener("click", function(){
    const comm = window.document.querySelector("#commentaire").value;
    if(comm ==""){
        alert("Veuillez saisir le commentaire");
    }
    else{
        alert("Veuillez patientez !");
        window.location.href="mailto:sdayar318@gmail.com?subject=Commentaire&body="+comm+"";
    }
}, false );


//Fleche pour descendre de la page profil//
var pointer = window.document.querySelector("#descendre");
//Capture du pointeur//
pointer.addEventListener("pointerdown", function(event){
    pointer.setPointerCapture(event.pointerId);

});
// Evénement à condition que le pointer soit capturé//
pointer.addEventListener("pointermove", function(event){
    if(event.pointerId === pointer.getPointerCapture(event.pointerType)){
        var bloc = window.document.querySelector(".photoprofil");
        bloc.scroll({
            top:100,
            left:0,
            behavior:"smooth",
            
        });
    }
}
    );
//Evénement lorsqu'on relache la flèche//
pointer.addEventListener("pointerup", function(event){
    pointer.releasePointerCapture(event.pointerId);
});


 
 
        
        
        
        

