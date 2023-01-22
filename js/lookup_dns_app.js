const { lookup } = require('dns').promises;

async function checkDomain(url, target) {
  try {
    const data = await lookup(url);
    const obj = {
      address: data.address,
      family: data.family,
    };
    const item = target.push(obj);
    return item;
  } catch (error) {
    if (error.code === 'ENOTFOUND') {
      const obj = {
        error: `Domain not found -> ${error.hostname}`,
      };
      const item = target.push(obj);
      return item;
    }
    const obj = {
      error: error.message,
    };
    const item = target.push(obj);
    return item;
  }
}

module.exports = { checkDomain };
