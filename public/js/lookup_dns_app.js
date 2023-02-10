const { lookup } = require('dns').promises;

async function checkDomain(url, target) {
  try {
    const data = await lookup(url);
    const obj = {
      address: data.address,
      family: data.family,
    };
    target.push(obj);
  } catch (error) {
    if (error.code === 'ENOTFOUND') {
      const obj = {
        error: `Domain not found -> ${error.hostname}`,
      };
      target.push(obj);
    }
    const obj = {
      error: error.message,
    };
    target.push(obj);
  }
  return target;
}

module.exports = { checkDomain };
