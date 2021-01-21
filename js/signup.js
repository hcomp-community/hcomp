$(document).ready(function(){
    $("#sign-up-button").click(function(){
        var email = $("#sign-up-email").val();
        $.post("https://hcomp-manual-invite.herokuapp.com/invite", {"email":email}, function(response){
            $("#sign-up-message").html(response["message"]);
        });
    });
});