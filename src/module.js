import { lookup } from 'dns/promises';

export default async function dnsToIP(url) {
  try {
    const data = await lookup(url);
    console.log(`Address IP domain ${url} -> ${data.address}, family address -> IP${data.family}`);
    return data;
  } catch (error) {
    error.code === 'ENOTFOUND' ? console.log(`Domain not found -> ${error.hostname}`) : error.message;
    return error;
  }
}