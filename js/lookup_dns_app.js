const { lookup } = require('dns').promises;

async function checkDomain(url) {
  try {
    const data = await lookup(url);
    const obj = {
      address: data.address,
      family: data.family,
    };
    return obj;
  } catch (error) {
    error.code === 'ENOTFOUND' ? console.log(`Domain not found -> ${error.hostname}`) : error.message;
    return error;
  }
}

module.exports = { checkDomain };
