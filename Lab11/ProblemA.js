const dns = require('dns');
dns.lookup('www.miu.edu', function (err, addresses, family) {
  console.log(addresses);
});