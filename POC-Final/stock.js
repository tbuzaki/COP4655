var stock = localStorage.getItem("stock");

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
