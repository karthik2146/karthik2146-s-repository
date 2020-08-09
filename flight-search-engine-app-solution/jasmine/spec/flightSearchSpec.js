describe("FlightSearch", function () {

    var flightSearchObj;
    var inputData = flightInfoInputData;
    var formOnewayInput = {
        "origin": "MAA",
        "destination": "DEL",
        "depdate": "6th December  2019",
        "passengers": "4",
        "returndate": ""
    };

    var formtwowayInput = {
        "origin": "MAA",
        "destination": "DEL",
        "depdate": "6th December  2019",
        "passengers": "4",
        "returndate": "7th December  2019"
    };


    beforeEach(function () {
        flightSearchObj = new flightSearch(inputData);
        flightSearchObj.init();
    });

    it("should instantiate and define the object", function () {
        expect(flightSearchObj).toBeDefined();
    });

    it("should check the input Array with match constructor Array length", function () {

        expect(inputData.length).toEqual(flightSearchObj.flightInfo.length);
    });

    it("should check the Oneway or Twoway search Filtering result behaviour", function () {

        var twoWayData = [
            {
                "fid": "AI-202",
                "fDeparture": "2019-12-06",
                "fArrival": "2019-12-06",
                "fDepartureTime": "09:10 PM",
                "fArrivalTime": "01:05 AM",
                "duration": "1h 55m",
                "noOfStops": "Non Stop",
                "origin": "MAA",
                "destination": "DEL",
                "availbleSeat": 5,
                "rfid": "AI-205",
                "price": 7500,
                "rDepartureTime": "09:10 PM",
                "rArrivalTime": "12:05 AM"
            },
            {
                "fid": "AI-202",
                "fDeparture": "2019-12-06",
                "fArrival": "2019-12-06",
                "fDepartureTime": "09:10 PM",
                "fArrivalTime": "01:05 AM",
                "duration": "1h 55m",
                "noOfStops": "Non Stop",
                "origin": "MAA",
                "destination": "DEL",
                "availbleSeat": 5,
                "rfid": "AI-206",
                "price": 8000,
                "rDepartureTime": "08:10 PM",
                "rArrivalTime": "12:05 AM"
            },
            {
                "fid": "AI-203",
                "fDeparture": "2019-12-06",
                "fArrival": "2019-12-06",
                "fDepartureTime": "08:30 PM",
                "fArrivalTime": "02:05 AM",
                "duration": "1h 55m",
                "noOfStops": "Non Stop",
                "origin": "MAA",
                "destination": "DEL",
                "availbleSeat": 10,
                "rfid": "AI-205",
                "price": 8000,
                "rDepartureTime": "09:10 PM",
                "rArrivalTime": "12:05 AM"
            },
            {
                "fid": "AI-203",
                "fDeparture": "2019-12-06",
                "fArrival": "2019-12-06",
                "fDepartureTime": "08:30 PM",
                "fArrivalTime": "02:05 AM",
                "duration": "1h 55m",
                "noOfStops": "Non Stop",
                "origin": "MAA",
                "destination": "DEL",
                "availbleSeat": 10,
                "rfid": "AI-206",
                "price": 8500,
                "rDepartureTime": "08:10 PM",
                "rArrivalTime": "12:05 AM"
            }
        ];

        flightSearchObj.searchResultHandler(formtwowayInput);

        var twoWaytestData = twoWayData.sort();
        var twoWayresultData = flightSearchObj.filterResult.sort();

        for (var i = 0; i < twoWaytestData.length; i++) {
            expect(twoWaytestData[i]).toEqual(twoWayresultData[i]);
        }
    });

    it("should sort the given JSON based on Low Price", function () {

        flightSearchObj.sortHandler(inputData, 'low');
        expect(flightSearchObj.sortedResult[0].price).toEqual(3000);

    });
    it("should sort the given JSON based on High Price", function () {

        flightSearchObj.sortHandler(inputData, 'high');
        expect(flightSearchObj.sortedResult[0].price).toEqual(5000);
        
    });

});

