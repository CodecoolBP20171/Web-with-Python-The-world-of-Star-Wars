var app = app || {};
app.events = {
    pageHandlers: function (pageCount) {
        $(document).on('click','#next', function(){
        pageCount++;
        app.dataHandler.getPlanetsData(pageCount);
        });
        $(document).on('click','#previous', function(){
            if (pageCount === 0) {
                pageCount = 1;
                app.dataHandler.getPlanetsData(pageCount);
            } else {
                pageCount--;
                app.dataHandler.getPlanetsData(pageCount);
            };       
        });
    },
    eventHandler : function() {
        $(document).ready(function () {
            $(document).on('show.bs.modal','#residents-modal', function (event) {

                var button = $(event.relatedTarget); // Button that triggered the modal
                var recipient = button.data('planet'); // Extract info from data-* attributes
                var urlArray =(button.data('whatever')).split(',');
                app.dom.renderModal(urlArray);
                
                // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
                // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
                var modal = $(this)
                modal.find('.modal-title').text('Residents of ' + recipient) 
            });
            
        });
        $(function() {
            $('#submit-log_out').click(function() {
                $('#sing-in').attr("hidden");
                sessionStorage.clear();
                
            });
        });
        $(function() {
        $('#submit-log_in').click(function() {
            $.ajax({
                url: '/log_in',
                data: $('form').serialize(),
                type: 'POST',
                success: function(response) {
                    if (response.status === false){
                        $("#validation").attr("class", "form-group has-error has-feedback");
                        $("#validation-password").attr("class", "form-group has-error has-feedback");
                        $("#invalid-username").text("Invalid Username or Password!");
                        
                    } else if (response.status === true) {
                        sessionStorage.clear();
                        sessionStorage.setItem('username', response.username);
                        sessionStorage.setItem('user_id', response.user_id);
                        var userInfo = sessionStorage.getItem("username");
                        if (userInfo !== null) { 
                            $('#sing-in').removeAttr("hidden");
                            $(".navbar-link").text(userInfo);
                        };
                        $("#log_in .close").click()

                    };   
                },
                error: function(error) {
                    console.log(error);
                },
            });
        });   
        })  
    },
}
