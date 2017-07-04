var app = app || {};

// this object contains the functions which handle the data and its reading/writing

app.dataHandler = {
    
    getPlanetsData: function(pageCount) {
        var planetsRequests= new XMLHttpRequest();
        planetsRequests.open('GET','https://swapi.co/api/planets/?page='+ pageCount+'');
        planetsRequests.onload = function() {
            if (planetsRequests.status >= 200 && planetsRequests.status < 400) {
                var planetsData= JSON.parse(planetsRequests.responseText);
                app.dom.renderHtlm(planetsData.results,pageCount);
            } else {
                alert('Server error,try again later!');
            };
                
        };
        planetsRequests.onerror = function() {
            alert('Connection error,try again later!')
        }
        planetsRequests.send();
    },
}