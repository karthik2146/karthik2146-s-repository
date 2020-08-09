//Flight information sample JSON input data

var flightInfo = [{
  "fid": "AI-201",
  "price": 4000,
  "fDeparture": "2019-12-04",
  "fArrival": "2019-12-04",
  "fDepartureTime": "22:10",
  "fArrivalTime": "00:05",
  "duration": "1h 55m",
  "noOfStops": "Non Stop",
  "origin": "MAA",
  "destination": "HYD",
  "availbleSeat": 10,

}, {
  "fid": "AI-202",
  "price": 4500,
  "fDeparture": "2019-12-06",
  "fArrival": "2019-12-06",
  "fDepartureTime": "21:10",
  "fArrivalTime": "01:05",
  "duration": "1h 55m",
  "noOfStops": "Non Stop",
  "origin": "MAA",
  "destination": "DEL",
  "availbleSeat": 5

}, {
  "fid": "AI-203",
  "price": 5000,
  "fDeparture": "2019-12-06",
  "fArrival": "2019-12-06",
  "fDepartureTime": "20:30",
  "fArrivalTime": "02:05",
  "duration": "1h 55m",
  "noOfStops": "Non Stop",
  "origin": "MAA",
  "destination": "DEL",
  "availbleSeat": 10

}, {
  "fid": "AI-204",
  "price": 4000,
  "fDeparture": "2019-12-07",
  "fArrival": "2019-12-07",
  "fDepartureTime": "19:10",
  "fArrivalTime": "00:05",
  "duration": "1h 55m",
  "noOfStops": "Non Stop",
  "origin": "PNQ",
  "destination": "DEL",
  "availbleSeat": 10

}, {
  "fid": "AI-205",
  "price": 3000,
  "fDeparture": "2019-12-05",
  "fArrival": "2019-12-07",
  "fDepartureTime": "21:10",
  "fArrivalTime": "00:05",
  "duration": "1h 55m",
  "noOfStops": "Non Stop",
  "origin": "DEL",
  "destination": "MAA",
  "availbleSeat": 10

},
{
  "fid": "AI-206",
  "price": 3500,
  "fDeparture": "2019-12-05",
  "fArrival": "2019-12-07",
  "fDepartureTime": "20:10",
  "fArrivalTime": "00:05",
  "duration": "1h 55m",
  "noOfStops": "Non Stop",
  "origin": "DEL",
  "destination": "MAA",
  "availbleSeat": 10

}];

// to create an object and instantiate from class
var fs = new flightSearch(flightInfo);

fs.init();