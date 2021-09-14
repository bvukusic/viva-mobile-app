export function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}

export function findWithProp(array, attr, value) {
  // console.log('searching for property: ', attr, ' with value of ', value);
  // console.log(' in array ', array);
  for (var i = 0; i < array.length; i += 1) {
    if (array[i][attr] === value) {
      return i;
    }
  }
  return -1;
}

export function findWith2Props(array, attr1, value1, attr2, value2) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i][attr1] === value1 && array[i][attr2] === value2) {
      return i;
    }
  }
  return -1;
}
