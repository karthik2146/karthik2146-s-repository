(() => {
    var app = {};
    app.search = () => {
        var src = $('#from').val(),
            dest = $('#to').val(),
            date = $('#date').val();

        console.log('search clicked');
        var  compiled = _.template(getTemplate());

        getData().then((data)=>{
           var filtered = _.filter(data, (fg) => fg.src === src && fg.dest === dest);
            $("#list").html(compiled({ 'flights': filtered }));
        });
    };


    getTemplate = () => {
        return $("#result-template").text();
    };
    getData = function () {
        return new Promise((resolve, reject) => {
            $.getJSON("data/flights.json", (dataJSON) => {
                resolve(dataJSON);
            });
        });

           /* 
           using this json when no server running on local
           return [
             {
                 "id": "AI-202",
                 "src": "MAA",
                 "dest": "DEL",
                 "dept": "9:10",
                 "arr": "10:00",
                 "cost": "17000"
             },
             {
                 "id": "AI-202",
                 "src": "MAA",
                 "dest": "KOL",
                 "dept": "9:10",
                 "arr": "13:10",
                 "cost": "6000"
             },
             {
                 "id": "AI-202",
                 "src": "MAA",
                 "dest": "MUM",
                 "dept": "9:10",
                 "arr": "13:10",
                 "cost": "9000"
             }
 
         ];*/
    };


    window.app = app;
})()


