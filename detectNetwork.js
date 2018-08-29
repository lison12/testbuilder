// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)


var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  //Step 1
  // set prefix to string of first two chars
  // check length if 14 digits and check first two chars string to be 38 or 39 = Diner's Club
  // check length if 15 digits and check first two chars string to be 34 or 37 = American Express
  //Step 2
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  //Step 3
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  //Step 4
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  // Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.

  var network = '';
  var digit = cardNumber.length
  var prefix = cardNumber.substring(0,2);
  if (digit === 14 && (prefix === '38' || prefix === '39')) {
    return network = 'Diner\'s Club';
  } else if (digit === 15 && (prefix === '34' || prefix === '37')) { 
    return network = 'American Express';
  } else if ((digit === 13 && prefix.charAt(0) === '4') || ((digit === 16 || digit === 19) && 
      (prefix.charAt(0) === '4' && cardNumber.substring(0,4) !== '4903' && cardNumber.substring(0,4) !== '4905' && 
      cardNumber.substring(0,4) !== '4911' && cardNumber.substring(0,4) !== '4936'))) {
    return network = 'Visa';
  } else if (digit === 16 && (prefix === '51' || prefix === '52' || prefix === '53' || prefix === '54' || 
      prefix === '55')) {
    return network = 'MasterCard';
  } else if ((digit === 16 || digit === 19) && (prefix === '65' || cardNumber.substring(0,4) === '6011' || 
      cardNumber.substring(0,3) === '644' || cardNumber.substring(0,3) === '645' || cardNumber.substring(0,3) === '646' || 
      cardNumber.substring(0,3) === '647' || cardNumber.substring(0,3) === '648' || cardNumber.substring(0,3) === '649')) {
    return network = 'Discover';
  } else if ((digit >= 12 && digit <= 19) && (cardNumber.substring(0,4) === '5018' || cardNumber.substring(0,4) === '5020' || 
      cardNumber.substring(0,4) === '5038' || cardNumber.substring(0,4) === '6304')) {
    return network = 'Maestro';  
  } else if ((digit >= 16 && digit <= 19) &&
      ((cardNumber.substring(0,6) >= '622126' && cardNumber.substring(0,6) <= '622925') || 
      (cardNumber.substring(0,3) >= '624' && cardNumber.substring(0,3) <= '626') || 
      (cardNumber.substring(0,4) >= '6282' && cardNumber.substring(0,4) <= '6288'))) {
    return network = 'China UnionPay';
  } else if ((digit === 16 || digit === 18 || digit === 19) &&
      (cardNumber.substring(0,4) === '4903' || cardNumber.substring(0,4) === '4905' || 
      cardNumber.substring(0,4) === '4911' || cardNumber.substring(0,4) === '4936' || 
      cardNumber.substring(0,4) === '6333' || cardNumber.substring(0,4) === '6759' || 
      cardNumber.substring(0,6) === '564182' || cardNumber.substring(0,6) === '633110')) {
    return network = 'Switch';
  }       
}
 
  // Once you've read this, go ahead and try to implement this function, then return to the console.
  // detectNetwork('343456789012345')
