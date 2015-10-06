var hours = ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', 'Total: '];

var pikePlace = {
	location: 'Pike Place Market',
	minCustHour: 17,
	maxCustHour: 88,
	avgCookiesCust: 5.2,
  cookiesSold: [],
  dailySold: 0,

	randCustHour: function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
	},

	totalCookiesHour: function() {
		return Math.floor(this.avgCookiesCust * this.randCustHour());
	},

  fillCookiesSold: function() { //need more var's? return?
    for (var i = 0; i < 8; i++) {
    this.cookiesSold[i] = this.totalCookiesHour();
    }
  },

  genDailySold: function() { //need more vars?
    for (var i = 0; i < this.cookiesSold.length; i++) {
    this.dailySold += this.cookiesSold[i];
    }
  },

  pushDailySold: function() {
    this.cookiesSold.push(this.dailySold);
  },
}

// for (var i = 0; i < 8; i++) {
// 	pikePlace.cookiesSold[i] = pikePlace.totalCookiesHour();
// }

// for (var i = 0; i < pikePlace.cookiesSold.length; i++) {
//   pikePlace.dailySold += pikePlace.cookiesSold[i];
// }

// pikePlace.cookiesSold.push(pikePlace.dailySold);

function makeUL() {
 for (var i = 0; i < pikePlace.cookiesSold.length; i++) {
 var awesomeList = document.getElementById('pike');
 var item = document.createElement('li');
 item.className = "data";
 item.appendChild(document.createTextNode(hours[i] + pikePlace.cookiesSold[i]+ ' cookies'));
 awesomeList.appendChild(item);
  }
}


// //BEGIN SEATAC AIRPORT
// var seaTac = {
// 	location: 'SeaTac Airport',
// 	minCustHour: 6,
// 	maxCustHour: 44,
// 	avgCookiesCust: 1.2,

// 	randCustHour: function() {
// 		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
// 	},
// 	totalCookiesHour: function() {
//     return Math.floor(this.avgCookiesCust * this.randCustHour());
//   },

//   cookiesSold: [],
//   dailySold: 0,
// }

// for (var i = 0; i < 8; i++) {
//   seaTac.cookiesSold[i] = seaTac.totalCookiesHour();
// }

// for (var i = 0; i < seaTac.cookiesSold.length; i++) {
//   seaTac.dailySold += seaTac.cookiesSold[i];
// }

// seaTac.cookiesSold.push(seaTac.dailySold);

// function makeULSea() {
//  for (var i = 0; i < seaTac.cookiesSold.length; i++) {
//  var awesomeList = document.getElementById('seaTac');
//  var item = document.createElement('li');
//  item.className = "data";
//  item.appendChild(document.createTextNode(hours[i] + seaTac.cookiesSold[i]+ ' cookies'));
//  awesomeList.appendChild(item);
//   }
// }


// //BEGIN SOUTHCENTER MALL
// var southCenter = {
// 	location: 'South Center Mall',
// 	minCustHour: 11,
// 	maxCustHour: 38,
// 	avgCookiesCust: 1.9,

//   randCustHour: function() {
//     return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
//   },
//   totalCookiesHour: function() {
//     return Math.floor(this.avgCookiesCust * this.randCustHour());
//   },

//   cookiesSold: [],
//   dailySold: 0,
// }

// for (var i = 0; i < 8; i++) {
//   southCenter.cookiesSold[i] = southCenter.totalCookiesHour();
// }

// for (var i = 0; i < southCenter.cookiesSold.length; i++) {
//   southCenter.dailySold += southCenter.cookiesSold[i];
// }

// southCenter.cookiesSold.push(southCenter.dailySold);

// function makeULSouth() {
//  for (var i = 0; i < southCenter.cookiesSold.length; i++) {
//  var awesomeList = document.getElementById('southCenter');
//  var item = document.createElement('li');
//  item.className = "data";
//  item.appendChild(document.createTextNode(hours[i] + southCenter.cookiesSold[i]+ ' cookies'));
//  awesomeList.appendChild(item);
//   }
// }


// //BEGIN BELLEVUE SQUARE
// var bellevueSquare = {
// 	location: 'Bellevue Square',
// 	minCustHour: 20,
// 	maxCustHour: 48,
// 	avgCookiesCust: 3.3,

// 	randCustHour: function() {
//     return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
//   },
//   totalCookiesHour: function() {
//     return Math.floor(this.avgCookiesCust * this.randCustHour());
//   },

//   cookiesSold: [],
//   dailySold: 0,
// }

// for (var i = 0; i < 8; i++) {
//   bellevueSquare.cookiesSold[i] = bellevueSquare.totalCookiesHour();
// }

// for (var i = 0; i < bellevueSquare.cookiesSold.length; i++) {
//   bellevueSquare.dailySold += bellevueSquare.cookiesSold[i];
// }

// bellevueSquare.cookiesSold.push(bellevueSquare.dailySold);

// function makeULBellevue() {
//  for (var i = 0; i < bellevueSquare.cookiesSold.length; i++) {
//  var awesomeList = document.getElementById('bellevueSquare');
//  var item = document.createElement('li');
//  item.className = "data";
//  item.appendChild(document.createTextNode(hours[i] + bellevueSquare.cookiesSold[i]+ ' cookies'));
//  awesomeList.appendChild(item);
//   }
// }


// //BEGIN ALKI
// var alki = {
// 	location: 'Alki',
// 	minCustHour: 3,
// 	maxCustHour: 24,
// 	avgCookiesCust: 2.6,

//  	randCustHour: function() {
//     return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
//   },
//   totalCookiesHour: function() {
//     return Math.floor(this.avgCookiesCust * this.randCustHour());
//   },

//   cookiesSold: [],
//   dailySold: 0,
// }

// for (var i = 0; i < 8; i++) {
//   alki.cookiesSold[i] = alki.totalCookiesHour();
// }

// for (var i = 0; i < alki.cookiesSold.length; i++) {
//   alki.dailySold += alki.cookiesSold[i];
// }

// alki.cookiesSold.push(alki.dailySold);

// function makeULAlki() {
//  for (var i = 0; i < alki.cookiesSold.length; i++) {
//  var awesomeList = document.getElementById('alki');
//  var item = document.createElement('li');
//  item.className = "data";
//  item.appendChild(document.createTextNode(hours[i] + alki.cookiesSold[i] + ' cookies'));
//  awesomeList.appendChild(item);
//   }
// }

makeUL(pikePlace.cookiesSold);
// makeULSea(seaTac.cookiesSold);
// makeULSouth(southCenter.cookiesSold);
// makeULBellevue(bellevueSquare.cookiesSold);
// makeULAlki(alki.cookiesSold);
