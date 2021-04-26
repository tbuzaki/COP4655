//This is the stock.js file. It contains the api calls and the code that parses
//the JSON response into a data object and assigns the data to different getElement
//ids on the results page and landing page.

//This is a declaration to assign the user input that was stored in the local
//storage on the search page to a new variable we can use to append the api urls.
var stock = localStorage.getItem("stock");

//This is the stockJson function. It is used on the results page to gather the
//data on the user input stock. It uses fetch to get a response from the api, then
//assigns the data to different elements on the results page.
function stockJson()
{

      const api_url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=' + stock + '&region=US';
      async function getStock(){

          const response = await fetch(api_url, {
	             "method": "GET",
	             "headers": {
		                    "x-rapidapi-key": "e86d445741mshb7b549bb3b24c95p1d6a71jsndd2b8da16354",
		                    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
	                     }
                     })
          const data = await response.json();

          document.getElementById('summary').textContent = data.summaryProfile.longBusinessSummary;
          document.getElementById('city').textContent = data.summaryProfile.city;
          document.getElementById('state').textContent = data.summaryProfile.state;
          document.getElementById('phone').textContent = data.summaryProfile.phone;
          document.getElementById('website').textContent = data.summaryProfile.website;
          document.getElementById('priceOpen').textContent = data.price.regularMarketOpen.raw;
          document.getElementById('priceLow').textContent = data.price.regularMarketDayLow.raw;
          document.getElementById('priceHigh').textContent = data.price.regularMarketDayHigh.raw;
          document.getElementById('industry').textContent = data.summaryProfile.industry;
          document.getElementById('currency').textContent = data.price.currencySymbol;
          console.log(data);
        }
        getStock();
}

//This is the disneyJson function. It is used on the landing page to get the current
//price of the Disney stock and assign it to an element on the landing page.
function disneyJson()
{

      const api_url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=dis&region=US';
      async function getStock(){

          const response = await fetch(api_url, {
	             "method": "GET",
	             "headers": {
		                    "x-rapidapi-key": "e86d445741mshb7b549bb3b24c95p1d6a71jsndd2b8da16354",
		                    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
	                     }
                     })
          const data = await response.json();

          document.getElementById('Disney').textContent = data.price.regularMarketOpen.raw;
          console.log(data);
        }
        getStock();
}

//This is the appleJson function. It is used on the landing page to get the current
//price of the Apple stock and assign it to an element on the landing page.
function appleJson()
{

      const api_url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=aapl&region=US';
      async function getStock(){

          const response = await fetch(api_url, {
	             "method": "GET",
	             "headers": {
		                    "x-rapidapi-key": "e86d445741mshb7b549bb3b24c95p1d6a71jsndd2b8da16354",
		                    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
	                     }
                     })
          const data = await response.json();

          document.getElementById('Apple').textContent = data.price.regularMarketOpen.raw;
          console.log(data);
        }
        getStock();
}

//This is the microsoftJson function. It is used on the landing page to get the current
//price of the Microsoft stock and assign it to an element on the landing page.
function microsoftJson()
{

      const api_url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=msft&region=US';
      async function getStock(){

          const response = await fetch(api_url, {
	             "method": "GET",
	             "headers": {
		                    "x-rapidapi-key": "e86d445741mshb7b549bb3b24c95p1d6a71jsndd2b8da16354",
		                    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
	                     }
                     })
          const data = await response.json();

          document.getElementById('Microsoft').textContent = data.price.regularMarketOpen.raw;
          console.log(data);
        }
        getStock();
}
