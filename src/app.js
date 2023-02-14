const { lookup } = require('dns').promises;

async function checkDomain(url) {
  try {
    const data = await lookup(url);
    const obj = {
      url,
      address: data.address,
      family: data.family,
    };
    return obj;
  } catch (error) {
    if (error.code === 'ENOTFOUND') {
      const obj = {
        error: `Domain not found -> ${error.hostname}`,
      };
      return obj;
    }
    const obj = {
      error: error.message,
    };
    return obj;
  }
}

module.exports = { checkDomain };
