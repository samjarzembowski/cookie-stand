var CookieStand = function(location, minCustHour, maxCustHour, avgCookiesCust, loc) {
	this.location = location;
	this.minCustHour = minCustHour;
	this.maxCustHour = maxCustHour;
	this.avgCookiesCust = avgCookiesCust;
  this.cookiesSold = [];
  this.dailySold = 0;
  //this.locHTML = loc;

	this.randCustHour = function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
	};

	this.totalCookiesHour = function() {
		return Math.floor(this.avgCookiesCust * this.randCustHour());
	};

  this.calcCookiesSold = function() {
    for (var i = 0; i < 8; i++) {
      this.cookiesSold[i] = this.totalCookiesHour();
    }

    for (var i = 0; i < this.cookiesSold.length; i++) {
      this.dailySold += this.cookiesSold[i];
    }

    this.cookiesSold.push(this.dailySold);
    //console.log(this.cookiesSold);
  };

  this.makeTable = function() {
    //create a table row & assign id
    var rowLocation = document.getElementById('data');
    var newRow = document.createElement('tr');
    newRow.id = this.location;
    rowLocation.appendChild(newRow);
    //create th in above tr and fill it with store location
    var locCell = document.getElementById(this.location);
    var loc = document.createElement('th');
    loc.appendChild(document.createTextNode(this.location));
    locCell.appendChild(loc);
    //filll above tr with sales data in td's
    for (var i = 0; i < this.cookiesSold.length; i++){
      var aweTable = document.getElementById(this.location);
      var item = document.createElement('td');
      item.appendChild(document.createTextNode(this.cookiesSold[i]));
      aweTable.appendChild(item);
    }
  };

  this.calcCookiesSold();
  this.makeTable();
}

var thead = function() {
  var hours = ['Locations', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', 'Total'];
  for (var i = 0; i < hours.length; i++) {
    var theader = document.getElementById('theader');
    var th = document.createElement('th');
    th.appendChild(document.createTextNode(hours[i]));
    theader.appendChild(th);
  };
};
thead();


var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2, "pike");
var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2, "seaTac");
var southCenter = new CookieStand('Southcenter Mall', 11, 38, 1.9, "southCenter");
var bellevueSquare = new CookieStand('Bellevue Square', 20, 48, 3.3, "bellevueSquare");
var alki = new CookieStand('Alki', 3, 24, 2.6, "alki");


var log = function (event) {
  event.preventDefault();
  var location = document.getElementById('location').value;
  var minCustHour = document.getElementById('minCustHour').value;
  var maxCustHour = document.getElementById('maxCustHour').value;
  var avgCookCust = document.getElementById('avgCookCust').value;
  console.log(location, minCustHour, maxCustHour, avgCookCust);
  var addLoc = new CookieStand(location, minCustHour, maxCustHour, avgCookCust);
}

var submit = document.getElementById('submit');
submit.addEventListener('click', log, false);



