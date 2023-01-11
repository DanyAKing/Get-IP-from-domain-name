const { lookup } = require('dns').promises;

async function checkIp(url) {
  try {
    const data = await lookup(url);
    console.log(`Address IP domain ${url} -> ${data.address}, family address -> IP${data.family}`);
    return data;
  } catch (error) {
    error.code === 'ENOTFOUND' ? console.log(`Domain not found -> ${error.hostname}`) : error.message;
    return error;
  }
}

module.exports = { checkIp };
