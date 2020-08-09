//Class constructor menthod to Filter Flight search information
//@input: Flight Infomation  JSON

var flightSearch = function (flightInfo) {

  //Global variable to impact all functions
  this.formInfo = {};
  this.filterResult;
  this.sortedResult;
  this.flightInfo = flightInfo;

  this.searchList = $("#searchList");
  this.tabLinks = $('.tab-links');
  this.searchInfoDisplay = $("#searchInfoDisplay");
  this.searchInfo = $("#searchInfo");
  this.oneWayForm = $('#oneWayForm');
  this.returnForm = $('#returnForm');
  this.searchFlight = $("#searchFlight");
  this.sortSelectBox = $('.sort-selectBox');
  this.inputDateFormat = 'MM/DD/YYYY';
  this.displayDateFormat = 'Do MMMM  YYYY';
  this.depDateFormat = 'YYYY-MM-DD';

  //collect data from Forms
  this.searchFormHandler = function () {

    $('#oneWayForm,#returnForm').serializeArray().map(function (item) {
      if (item.name === "depdate" || item.name === "returndate") {
        var momentObj = moment(item.value, this.inputDateFormat);
        var momentString = momentObj.format(this.displayDateFormat);
        momentString = (momentString === "Invalid date") ? momentString = "" : momentString;
        this.formInfo[item.name] = momentString;
      } else {
        this.formInfo[item.name] = item.value;
      }

      //bind to template engine
      var template = _.template(this.searchInfoDisplay.html());
      this.searchInfo.html(template({ items: this.formInfo }));

    }.bind(this));

    this.searchResultHandler(this.formInfo);

  }.bind(this);

  //This method will take care filter the result from oneway/return-form based on user input
  this.searchResultHandler = function (inputFormObj) {

    var depDateObj = moment(inputFormObj.depdate, this.displayDateFormat);
    var depDateString = depDateObj.format(this.depDateFormat);

    var retDateObj = moment(inputFormObj.returndate, this.displayDateFormat);
    var retDateString = retDateObj.format(this.depDateFormat);

    retDateString = (retDateString === "Invalid date") ? retDateString = "" : retDateString;


    var newFilterObj = {};
    var newDepArr = [];
    var newRetArr = [];

    this.flightInfo.forEach(function (val, key, self) {
      //convert time to redable AM/PM
      val.fDepartureTime = moment(val.fDepartureTime, ["h:mm"]).format("hh:mm A");
      val.fArrivalTime = moment(val.fArrivalTime, ["h:mm"]).format("hh:mm A");

      if (inputFormObj.depdate && val.origin === inputFormObj.origin && val.destination === inputFormObj.destination && val.fDeparture === depDateString && val.availbleSeat >= inputFormObj.passengers) {
        newDepArr.push(self[key]);
      } else if (inputFormObj.depdate && inputFormObj.returndate && val.origin === inputFormObj.destination && val.destination === inputFormObj.origin && val.fArrival === retDateString && val.availbleSeat >= inputFormObj.passengers) {
        newRetArr.push(self[key]);
      }
    });
    newFilterObj.newDepArr = newDepArr;
    newFilterObj.newRetArr = newRetArr;

    //iterate filter array and construct a new json to bind view template
    var flag = (newFilterObj.newRetArr.length > 0 ? false : true)
    var filterResultArr = [];
    for (var i = 0; i < newFilterObj.newDepArr.length; i++) {
      var depTempObj = newFilterObj.newDepArr[i];
      if (flag) {
        filterResultArr.push(depTempObj);
      } else {
        for (var j = 0; j < newFilterObj.newRetArr.length; j++) {
          var retTempObj = newFilterObj.newRetArr[j];
          filterResultArr.push({
            fid: depTempObj.fid,
            fDeparture: depTempObj.fDeparture,
            fArrival: depTempObj.fArrival,
            fDepartureTime: depTempObj.fDepartureTime,
            fArrivalTime: depTempObj.fArrivalTime,
            duration: depTempObj.duration,
            noOfStops: depTempObj.noOfStops,
            origin: depTempObj.origin,
            destination: depTempObj.destination,
            availbleSeat: depTempObj.availbleSeat,
            rfid: retTempObj.fid,
            price: depTempObj.price + retTempObj.price,
            rDepartureTime: retTempObj.fDepartureTime,
            rArrivalTime: retTempObj.fArrivalTime
          });

        }
      }

    }
    this.updateSearchResult(filterResultArr);
    this.filterResult = filterResultArr;
  };
  //update the view template based on form user input value
  this.updateSearchResult = function (filterObj) {
    if (this.searchFlight.length > 0) {
      var template = _.template(this.searchFlight.html());
      this.searchList.html(template({ items: filterObj }));
    }
  };
  //sort the flight price result based on user select options
  this.sortHandler = function (jsonData, val) {

    jsonData.sort(function (a, b) {
      if (val === "low") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    this.sortedResult = jsonData;
    this.updateSearchResult(this.sortedResult);
  };
  //below method will take care all UI related Event handler eg:click,submit,keyup ...etc
  this.bindUIEventHandler = function () {

    var self = this;

    this.tabLinks.on('click', function () {
      var id = $(this).data('id');
      $('.tab-content').not(':eq(' + id + ')').hide(500);
      $('.tab-content').eq(id).show(500);
    });

    this.oneWayForm.submit(function (event) {
      event.preventDefault();
      self.searchFormHandler();
    }.bind(self));

    this.returnForm.submit(function (event) {
      event.preventDefault();
      self.searchFormHandler();
    }.bind(self));

    this.sortSelectBox.on('change', function (event) {
      var sortVal = $(event.currentTarget).find('option:selected').val();
      if (self.filterResult) {
        self.sortHandler(self.filterResult, sortVal);
      }
    }.bind(self));
  }
}
//Prototypical inheritance extend from 'flightSearch'class
flightSearch.prototype.init = function () {
  this.bindUIEventHandler();
  this.updateSearchResult([]);
}


