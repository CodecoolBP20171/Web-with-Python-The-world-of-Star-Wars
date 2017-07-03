var app = app || {};

// this object contains the functions which create
// and remove dom elements
app.dom = {
    renderHtlm: function(data,pageCount) {
        
        var userInfo = sessionStorage.getItem("username");
            if (userInfo !== null) { 
                $('#sing-in').removeAttr("hidden");
                $(".navbar-link").text(userInfo);
            };

        if (pageCount > 1) {
            $('#previous').prop("disabled", false);
        } else if (pageCount = 1) {
            $('#previous').prop("disabled",true);
        };
        if (data.length < 10){
            $('#next').prop("disabled",true);
        } else{
            $('#next').prop("disabled",false);
        };

        var htmlElements = '';
        for (i =0; i < data.length; i++) {
            htmlElements += ('<tr><td>' + data[i].name + '</td ><td>'
                                         + data[i].diameter+ ' km</td ><td>' 
                                         + data[i].climate + '</td><td>'
                                         + data[i].terrain + '</td><td>'
                                         + data[i].surface_water + '% </td>');
            if (data[i].population==='unknown') {
                htmlElements += ('<td>' + data[i].population +'</td>');
            } else {
                htmlElements += ('<td>'+ parseInt(data[i].population).toLocaleString() + ' people</td>');
            };                        
            if (data[i].residents.length ===0){
                htmlElements += ('<td>'+ 'No known residents' + '</td></tr>');
            } else {
                htmlElements += ('<td><button type="button" class="btn btn-default" data-toggle="modal" data-target="#residents-modal" data-planet='+data[i].name+' data-whatever='+ data[i].residents +'>'+ data[i].residents.length + ' resident(s)</button></td></tr>');
    
            };
        };
        document.getElementById('planets-details').innerHTML= htmlElements;
        app.events.eventHandler();
        
    },
    renderModal:function (urlArray){
        var modalHtmlElements = '';
        for (i=0; i < urlArray.length;i++) { 
            $.getJSON(urlArray[i], function(residentsData){
                modalHtmlElements += ('<tr><td>' + residentsData.name + '</td ><td>'
                                                 + residentsData.height + '</td ><td>' 
                                                 + residentsData.mass + '</td><td>'
                                                 + residentsData.hair_color + '</td><td>'
                                                 + residentsData.skin_color + '</td><td>'
                                                 + residentsData.eye_color + '</td><td>'
                                                 + residentsData.birth_year + '</td><td>'
                                                 + residentsData.gender + '</td></tr>');
                
                $( "#residents-details" ).html(modalHtmlElements);
            });
        };                                    
        
    },
}
    
        


