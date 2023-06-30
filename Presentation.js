const barre_nav = window.document.querySelector("nav");

document.addEventListener("scroll", () => {
var y = window.pageYOffset;


console.log( "Hauteur du scroll = " + y);
if(y >= 510){
    barre_nav.classList.add("scroll");
    
    
}else{
    barre_nav.classList.remove("scroll");
}




 

        
);
window.addEventListener("load", function(){
window.document.querySelector("#btn_envoyer").addEventListener("click", function(event){ 
const nom = window.document.querySelector("#nom").value;
const prenom = window.document.querySelector("#prenom").value;;
const mail = window.document.querySelector("#mail").value;
const mess = window.document.querySelector("#message").value;



    if(nom == ""){
        document.querySelector("#reponse").innerHTML= " Oups ! N'oubiez pas votre nom ";
       
    }
     if(prenom == ""){
         event.preventDefault();
        document.querySelector("#reponse").innerHTML= " Oups ! Vous avez oublié votre prénom";
       
    }
     if(mail == ""){
         event.preventDefault();
        document.querySelector("#reponse").innerHTML= "Oups ! Vous avez oublié votre mail ";
       
    }
     if(mess == ""){
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
 
 
        
        
        
        

