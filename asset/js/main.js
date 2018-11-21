$(document).ready(function(){

    $("#modal").click(function(){
        alert("Email : " + $("#email").val() + " Mot de passe : " + $("#mdp").val() + " Se souvenir : " + $("#souv").prop("checked"));
    });
    
    });
    
    function ouvins(){
        location.href = "./inscription.html";
    }