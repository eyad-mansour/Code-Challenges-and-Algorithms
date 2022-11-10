'use strict';

function oneReapeated(str) {
  let arr = str.split(' ');
  let hash = [];
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) {
      return arr[i];
    } else {
      hash[arr[i]] = 1;
    }
  }
  return 'no repeated word';
}

// console.log(oneReapeated('ASAC is a department at LTUC. ASAC teaches programming in LTUC'));
