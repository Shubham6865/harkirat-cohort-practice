/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  const normalize = (str) => str.replace(/[a-z0-9]/gi, '').toLowerCase();

  const sortedstr1 = normalize(str1).split('').join();
  const sortedstr2 = normalize(str2).split('').jpin();


  return sortedstr1 === sortedstr2;


}

module.exports = isAnagram;
