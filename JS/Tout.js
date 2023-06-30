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
    if(y>=310){
        let moi = document.querySelector(".moi");
        moi.style.display="block";
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

window.document.addEventListener("load", function(){
window.document.querySelector("#btn_envoyer").addEventListener("click", function(event){ 
  
const nom = window.document.querySelector("#nom").value;
const prenom = window.document.querySelector("#prenom").value;;
const mail = window.document.querySelector("#mail").value;
const mess = window.document.querySelector("#message").value;



    if(nom === ""){
        event.preventDefault();
        document.querySelector("#reponse").innerHTML= " Oups ! N'oubiez pas votre nom ";
       
    }
     if(prenom === ""){
         event.preventDefault();
        document.querySelector("#reponse").innerHTML= " Oups ! Vous avez oublié votre prénom";
       
    }
     if(mail === ""){
         event.preventDefault();
        document.querySelector("#reponse").innerHTML= "Oups ! Vous avez oublié votre mail ";
       
    }
     if(mess === ""){
         event.preventDefault();
        document.querySelector("#reponse").innerHTML= " Oups ! Saisissez le message !";
    }
    if(document.querySelector("#accord").checked === false){
        event.preventDefault();
     document.querySelector("#reponse").innerHTML= " Oups ! Veuillez cochez la case ci-dessus !";   
    }
   
}, false);
},);
window.document.querySelector("#btn_envoyer").addEventListener("click", function(){ 
const nom = window.document.querySelector("#nom").value;
const prenom = window.document.querySelector("#prenom").value;;
const mail = window.document.querySelector("#mail").value;
const mess = window.document.querySelector("#message").value;
 if(nom !== "" && prenom !== "" && mail !== "" && mess !== "" &&document.querySelector("#accord").checked === true )
    {
        document.querySelector("#reponse").innerHTML="";
        document.querySelector("#fleche").style.display="block";
        document.querySelector("#envoie").innerHTML="Envoyé !";
    }else{
         document.querySelector("#fleche").style.display="none";
         document.querySelector("#envoie").innerHTML="";
    }
    
  }, false);
 window.document.querySelector("#btn_envoyer_com").addEventListener("click", function(comm_event){ 
   const comm = window.document.querySelector("#commentaire").value;
    if(comm === ""){
       comm_event.preventDefault();
      alert("Saisissez le commentaire");
  }
 }, false );
 
 
        
        
        
        

