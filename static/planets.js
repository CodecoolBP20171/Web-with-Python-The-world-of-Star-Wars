var app = app || {};

app.init = function () {
    var pageCount = 1;
    function pageHandler(pageCount) {
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
    app.events.pageHandlers(pageCount);
    app.dataHandler.getPlanetsData(pageCount);
    app.events.eventHandler();
    
    
    
    
};
app.init();


