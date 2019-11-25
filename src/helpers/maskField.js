/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
const maskInput = (input, mask, event) => {
  let booleanMask;

  const typed = event.keyCode;
  const regex = /[^\d]+/g;
  const fieldNumbers = input.value.toString().replace(regex, '');

  let positionField = 0;
  let newField = '';
  let sizeMask = fieldNumbers.length;

  if (typed !== 8) {
    for (let i = 0; i <= sizeMask; i++) {
      booleanMask =
        mask.charAt(i) === '-' ||
        mask.charAt(i) === '.' ||
        mask.charAt(i) === '/';
      booleanMask =
        booleanMask ||
        mask.charAt(i) === '(' ||
        mask.charAt(i) === ')' ||
        mask.charAt(i) === ' ';
      if (booleanMask) {
        newField += mask.charAt(i);
        sizeMask += sizeMask;
      } else {
        newField += fieldNumbers.charAt(positionField);
        positionField++;
      }
    }
    input.value = newField;
    return true;
  }
  return true;
};

export default maskInput;
