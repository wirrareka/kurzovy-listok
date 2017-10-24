const run = require('./index');

run().then((result) => {
  console.log(JSON.stringify(result, null, 4));
})