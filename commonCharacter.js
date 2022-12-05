
function commonCharacter(string1, string2) {
  let duplicateCharacter = '';
  for (let i = 0; i < string1.length; i += 1) {
    if (duplicateCharacter.indexOf(string1[i]) === -1) {
      if (string2.indexOf(string1[i]) !== -1) {
        duplicateCharacter += string1[i];
      }
/* Credit to www.java2s.com where I took this. I do not dare to touch or edit it anymore.*/
    }
  }
  return duplicateCharacter;
};
