var app = app || {};
$(function () {
    var userInfo = sessionStorage.getItem("username");
    if (userInfo !== null) { 
        $('#sing-in').removeAttr("hidden");
        $(".navbar-link").text(userInfo);
};});
    


    
$(function () {
$('[data-toggle="tooltip"]').tooltip()
})
$(function() {
    $('#registration').click(function() {
        var user = $('#username').val();
        var pass = $('#password').val();
        $.ajax({
            url: '/new_registration',
            data: $('form').serialize(),
            type: 'POST',
            success: function(response) {
                if (response.status === 'Invalid username'){
                    $("#validation").attr("class", "form-group has-error has-feedback");
                    $("#invalid-username").text("This Username already exists!");
                } else if (response.status === true) {
                    var userInfo = {"user_id":response.user_id,"username": response.username};
                    $(".form").empty();
                    $("div").removeAttr("hidden");
                    $("form").removeAttr("hidden");
                    $(".navbar-link").text(response.username)
                    $("button").attr("data-user_id",response.user_id);
                    $("button").attr("data-username",response.username);                  
                    $("#success").on('click', function(){
                        var button = $(this); // Button that triggered the modal
                        var user_id = button.data('user_id'); // Extract info from data-* attributes
                        var username =button.data('username');
                        sessionStorage.clear();
                        sessionStorage.setItem('username', response.username);
                        sessionStorage.setItem('user_id', response.user_id);

                    
                    });
                };   
            },
            error: function(error) {
                console.log(error);
            },
        });
    });   
})