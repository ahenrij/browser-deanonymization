/**
 * An improved implementation of djb2 hash function.
 * http://www.cse.yorku.ca/~oz/hash.html
 * 
 * @param {*} str object to hash
 * @returns 64 bit integer
 */

function hash (str) {
    var i = str.length
    var hash1 = 5381
    var hash2 = 52711
  
    while (i--) {
      const char = str.charCodeAt(i)
      hash1 = (hash1 * 33) ^ char
      hash2 = (hash2 * 33) ^ char
    }
    hash = (hash1 >>> 0) * 4096 + (hash2 >>> 0)
    return extract(hash, 40) // take first 40 bits
}

/**
 * Extract k first bits from a number
 * @param {*} n initial number
 * @param {*} k number of bits to extract
 */
function extract(n, k) {
  return ((1 << k) - 1) & n;
}
  
module.exports = hash