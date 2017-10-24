const https = require('https');
const fastXmlParser = require('fast-xml-parser');

const URL = 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml'

const ParseOptions = { 
  attrPrefix : "",  
  ignoreNonTextNodeAttr : true,
  ignoreTextNodeAttr : false,
  ignoreNameSpace : true,
  ignoreRootElement : true,
  textNodeConversion : true,
  textAttrConversion : true,
  arrayMode : false
};

const parseResponse = (data) => {
  // data is string type
  if (fastXmlParser.validate(data)) {
    return fastXmlParser.parse(data, ParseOptions);    
  } else {
    throw new Error("INVALID DATA FORMAT");
  }
}

const run = () => {
  return new Promise((resolve, reject) => {
    https.get(URL, (resp) => {
      let data = '';
      resp.on('data', (chunk) => {
        data += chunk;
      });
     
      resp.on('end', () => {
        try {
          const parsed = parseResponse(data);
          const exchangeList = {
            date: new Date(),
            source: URL,
            currencies: parsed.Envelope.Cube.Cube.Cube.map((item) => ({ 
              currency: item.currency, 
              rate: parseFloat(item.rate) 
            }))
          }
          resolve(exchangeList);
        } catch(error) {
          reject(error)
        }
      });
     
     }).on("error", (err) => {
       reject(err);
     });
  });
};

module.exports = run;