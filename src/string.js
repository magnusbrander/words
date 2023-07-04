/**
 *
 * @param {string[]} elements
 * @returns {Set<number>}
 */
function getUniqueLengths(elements) {
	/** @type {Set<number>} */
	const lengths = new Set();
	for (const element of elements) {
		lengths.add(element.length);
	}
	return lengths;
}

/**
 *
 * @param {string[]} strings
 * @param {number} length
 * @returns {string[]}
 */
function getStringsByLength(strings, length) {
	return strings.filter((string) => string.length === length);
}


/**
 *
 * @param {string} text
 * @returns {boolean}
 */
function hasUniqueChars(text) {
	/** @type {Set<string>} */
	const uniqueChars = new Set();
	for (const char of text) {
		if (uniqueChars.has(char)) {
			return false;
		}
		uniqueChars.add(char);
	}
	return true;
}

/**
 *
 * @param {string[]} strings
 * @returns {string[]}
 */
function getStringsWithUniqueChars(strings) {
  /** @type {string[]} */
	const uniqueCharStrings = [];
	for (const string of strings) {
		if (hasUniqueChars(string)) {
			uniqueCharStrings.push(string);
		}
	}
	return uniqueCharStrings;
}

/**
 * 
 * firstString.lenght  === secondString.length
 * 
 * @param {string} firstString 
 * @param {string} secondString 
 * @returns {boolean}
 */
function hasOverlappingChars(firstString, secondString){
  for(let i = 0; i< firstString.length; i++){
    for( let j = 0; j< secondString.length; j++){
      if(firstString[i] === secondString[j]){
        return true;
      }
    }
  }
  return false;
}



/**
 * 
 * @param {string[]} strings 
 * @returns {string[]}
 */
function getNoneOverlappingStrings(strings){
  /** @type {string[]} */
  const nonOverlappStrings = [];
  for(let i = 0; strings.length; i++){

  }

  return [];
}

export {
	getUniqueLengths,
	getStringsByLength,
	hasUniqueChars,
	getStringsWithUniqueChars,
  hasOverlappingChars,
};
