# kurzovy-listok
NBS.sk exchange list parser for node.js

Returns currencies with rates in json format within a Promise.

Only dependency within the project is fast-xml-parser which was choosen to provide javascript-only xml parser at no performance cost

## Installation
```
npm install kurzovy-listok --save
```

## Usage
```
const getExchangeList = require('kurzovy-listok')

getExchangeList()
  .then((data) => {
    console.log('data:', JSON.stringify(data, null, 4));
  })
  .catch((error) => {
    console.error('error', error);
  })
```

## Sample Output
```
{
    "date": "2017-10-24T23:30:55.126Z",
    "source": "https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml",
    "currencies": [
        {
            "currency": "USD",
            "rate": 1.1761
        },
        {
            "currency": "JPY",
            "rate": 133.95
        },
        {
            "currency": "BGN",
            "rate": 1.9558
        },
        {
            "currency": "CZK",
            "rate": 25.583
        },
        {
            "currency": "DKK",
            "rate": 7.4433
        },
        {
            "currency": "GBP",
            "rate": 0.89303
        },
        {
            "currency": "HUF",
            "rate": 308.53
        },
        {
            "currency": "PLN",
            "rate": 4.2403
        },
        {
            "currency": "RON",
            "rate": 4.6013
        },
        {
            "currency": "SEK",
            "rate": 9.6475
        },
        {
            "currency": "CHF",
            "rate": 1.1613
        },
        {
            "currency": "NOK",
            "rate": 9.3883
        },
        {
            "currency": "HRK",
            "rate": 7.513
        },
        {
            "currency": "RUB",
            "rate": 67.609
        },
        {
            "currency": "TRY",
            "rate": 4.3751
        },
        {
            "currency": "AUD",
            "rate": 1.5117
        },
        {
            "currency": "BRL",
            "rate": 3.8022
        },
        {
            "currency": "CAD",
            "rate": 1.4875
        },
        {
            "currency": "CNY",
            "rate": 7.8022
        },
        {
            "currency": "HKD",
            "rate": 9.1803
        },
        {
            "currency": "IDR",
            "rate": 15937.33
        },
        {
            "currency": "ILS",
            "rate": 4.1184
        },
        {
            "currency": "INR",
            "rate": 76.579
        },
        {
            "currency": "KRW",
            "rate": 1327.81
        },
        {
            "currency": "MXN",
            "rate": 22.4841
        },
        {
            "currency": "MYR",
            "rate": 4.9849
        },
        {
            "currency": "NZD",
            "rate": 1.7008
        },
        {
            "currency": "PHP",
            "rate": 60.801
        },
        {
            "currency": "SGD",
            "rate": 1.6023
        },
        {
            "currency": "THB",
            "rate": 39.035
        },
        {
            "currency": "ZAR",
            "rate": 16.1396
        }
    ]
}
```

