var CookieStand = function(location, minCustHour, maxCustHour, avgCookiesCust, loc) {
	this.location = location;
	this.minCustHour = minCustHour;
	this.maxCustHour = maxCustHour;
	this.avgCookiesCust = avgCookiesCust;
  this.cookiesSold = [];
  this.dailySold = 0;
  this.locHTML = loc;
  this.hours = ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', 'Total: '];

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

  this.makeUL = function(locHTML) {
   for (var i = 0; i < this.cookiesSold.length; i++) {
   var awesomeList = document.getElementById(this.locHTML);
   var item = document.createElement('li');
   item.appendChild(document.createTextNode(this.hours[i] + this.cookiesSold[i]+ ' cookies'));
   awesomeList.appendChild(item);
    }
  };

  this.calcCookiesSold();
  this.makeUL(this.locHTML);

}

var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2, "pike");
var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2, "seaTac");
var southCenter = new CookieStand('Southcenter Mall', 11, 38, 1.9, "southCenter");
var bellevueSquare = new CookieStand('Bellevue Square', 20, 48, 3.3, "bellevueSquare");
var alki = new CookieStand('Alki', 3, 24, 2.6, "alki");
