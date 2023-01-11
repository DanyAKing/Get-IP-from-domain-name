const { checkIp } = require('./lookup_dns_app');

const URL = 'www.npm.com';

const ip = console.log(checkIp(URL));

module.exports = { ip };
