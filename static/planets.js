var app = app || {};

app.init = function () {
    var pageCount = 1;
    app.events.pageHandlers(pageCount);
    app.dataHandler.getPlanetsData(pageCount);
    app.events.eventHandler();
    
    
    
    
};
app.init();


