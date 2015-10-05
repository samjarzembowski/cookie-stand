var pikePlace = {
	location: 'Pike Place Market',
	minCustHour: 17,
	maxCustHour: 88,
	avgCookiesCust: 5.2,

	randCustHour: function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
	},

	totalCookiesHour: function() {
		return Math.floor(this.avgCookiesCust * this.randCustHour());
	},

	cookiesSold: [],
  dailySold: 0,
}


for (var i = 0; i < 8; i++) {
	pikePlace.cookiesSold[i] = pikePlace.totalCookiesHour();
}

for (var i = 0; i < pikePlace.cookiesSold.length; i++) {
  pikePlace.dailySold += pikePlace.cookiesSold[i];
}

pikePlace.cookiesSold.push(pikePlace.dailySold);

function makeUL() {

 for (var i = 0; i < pikePlace.cookiesSold.length; i++) {

 //connect list to JS
 var awesomeList = document.getElementById('pike');

 //create list item
 var item = document.createElement('li');

 //Set contents
 item.appendChild(document.createTextNode(pikePlace.cookiesSold[i]+ ' cookies'));

 //Add it to the list
 awesomeList.appendChild(item);
  }
}


//FINISHED WITH PIKE PLACE MARKET


var seaTac = {
	location: 'SeaTac Airport',
	minCustHour: 6,
	maxCustHour: 44,
	avgCookiesCust: 1.2,

	randCustHour: function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
	},
	totalCookiesHour: function() {
    return Math.floor(this.avgCookiesCust * this.randCustHour());
  },

  cookiesSold: [],
  dailySold: 0,
}


for (var i = 0; i < 8; i++) {
  seaTac.cookiesSold[i] = seaTac.totalCookiesHour();
}

for (var i = 0; i < seaTac.cookiesSold.length; i++) {
  seaTac.dailySold += seaTac.cookiesSold[i];
}

seaTac.cookiesSold.push(seaTac.dailySold);

function makeULSea() {

 for (var i = 0; i < seaTac.cookiesSold.length; i++) {

 //connect list to JS
 var awesomeList = document.getElementById('seaTac');

 //create list item
 var item = document.createElement('li');

 //Set contents
 item.appendChild(document.createTextNode(seaTac.cookiesSold[i]+ ' cookies'));

 //Add it to the list
 awesomeList.appendChild(item);
  }
}



var southCenter = {
	location: 'South Center Mall',
	minCustHour: 11,
	maxCustHour: 38,
	avgCookiesCust: 1.9,

  randCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
  },
  totalCookiesHour: function() {
    return Math.floor(this.avgCookiesCust * this.randCustHour());
  },

  cookiesSold: [],
  dailySold: 0,
}

for (var i = 0; i < 8; i++) {
  southCenter.cookiesSold[i] = southCenter.totalCookiesHour();
}

for (var i = 0; i < southCenter.cookiesSold.length; i++) {
  southCenter.dailySold += southCenter.cookiesSold[i];
}

southCenter.cookiesSold.push(southCenter.dailySold);

function makeULSouth() {

 for (var i = 0; i < southCenter.cookiesSold.length; i++) {

 //connect list to JS
 var awesomeList = document.getElementById('southCenter');

 //create list item
 var item = document.createElement('li');

 //Set contents
 item.appendChild(document.createTextNode(southCenter.cookiesSold[i]+ ' cookies'));

 //Add it to the list
 awesomeList.appendChild(item);
  }
}




var bellevueSquare = {
	location: 'Bellevue Square',
	minCustHour: 20,
	maxCustHour: 48,
	avgCookiesCust: 3.3,

	randCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
  },
  totalCookiesHour: function() {
    return Math.floor(this.avgCookiesCust * this.randCustHour());
  },

  cookiesSold: [],
  dailySold: 0,
}


for (var i = 0; i < 8; i++) {
  bellevueSquare.cookiesSold[i] = bellevueSquare.totalCookiesHour();
}

for (var i = 0; i < bellevueSquare.cookiesSold.length; i++) {
  bellevueSquare.dailySold += bellevueSquare.cookiesSold[i];
}

bellevueSquare.cookiesSold.push(bellevueSquare.dailySold);

function makeULBellevue() {

 for (var i = 0; i < bellevueSquare.cookiesSold.length; i++) {

 //connect list to JS
 var awesomeList = document.getElementById('bellevueSquare');

 //create list item
 var item = document.createElement('li');

 //Set contents
 item.appendChild(document.createTextNode(bellevueSquare.cookiesSold[i]+ ' cookies'));

 //Add it to the list
 awesomeList.appendChild(item);
  }
}



var alki = {
	location: 'Alki',
	minCustHour: 3,
	maxCustHour: 24,
	avgCookiesCust: 2.6,

 	randCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
  },
  totalCookiesHour: function() {
    return Math.floor(this.avgCookiesCust * this.randCustHour());
  },

  cookiesSold: [],
  dailySold: 0,
}

for (var i = 0; i < 8; i++) {
  alki.cookiesSold[i] = alki.totalCookiesHour();
}

for (var i = 0; i < alki.cookiesSold.length; i++) {
  alki.dailySold += alki.cookiesSold[i];
}

alki.cookiesSold.push(alki.dailySold);

function makeULAlki() {

 for (var i = 0; i < alki.cookiesSold.length; i++) {

 //connect list to JS
 var awesomeList = document.getElementById('alki');

 //create list item
 var item = document.createElement('li');

 //Set contents
 item.appendChild(document.createTextNode(alki.cookiesSold[i] + ' cookies'));

 //Add it to the list
 awesomeList.appendChild(item);
  }
}

makeUL(pikePlace.cookiesSold);
makeULSea(seaTac.cookiesSold);
makeULSouth(southCenter.cookiesSold);
makeULBellevue(bellevueSquare.cookiesSold);
makeULAlki(alki.cookiesSold);
