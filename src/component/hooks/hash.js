
import CryptoJS from 'crypto-js';

export function hashObject(obj, secretKey, saltRounds) {
  function hashValue(value) {
    const salt = CryptoJS.lib.WordArray.random(saltRounds).toString(); // Generate salt
    return CryptoJS.AES.encrypt(JSON.stringify(value), secretKey + salt).toString();
  }

  function recursiveHash(input) { 
    if (Array.isArray(input)) {
      return input.map(item => recursiveHash(item));
    } else if (typeof input === 'object' && input !== null) {
      const hashedObj = {};
      for (let [key, value] of Object.entries(input)) {
        const hashedKey = hashValue(key);  // Hash the key
        hashedObj[hashedKey] = recursiveHash(value); // Recursively hash values
      }
      return hashedObj;
    } else {
      return hashValue(input); // Hash primitive values (e.g., strings, numbers)
    }
  }

  return recursiveHash(obj);
}

function decryptObject(hashedObj, secretKey, saltRounds) {
  function decryptValue(hashedValue) {
    const bytes = CryptoJS.AES.decrypt(hashedValue, secretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }

  function recursiveDecrypt(input) {
    if (Array.isArray(input)) {
      return input.map(item => recursiveDecrypt(item));
    } else if (typeof input === 'object' && input !== null) {
      const decryptedObj = {};
      for (let [hashedKey, hashedValue] of Object.entries(input)) {
        const decryptedKey = decryptValue(hashedKey);  // Decrypt the key
        decryptedObj[decryptedKey] = recursiveDecrypt(hashedValue); // Recursively decrypt values
      }
      return decryptedObj;
    } else {
      return decryptValue(input); // Decrypt primitive values
    }
  }

  return recursiveDecrypt(hashedObj);
}
